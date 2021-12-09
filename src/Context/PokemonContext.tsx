import React, { createContext, useContext, useEffect } from 'react'
import { IPokemon } from '../interfaces/IPokemon'
import { getPokemonByName } from '../services/PokemonService'
import * as Types from './PokemonContext.type'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useSearchService } from '../hooks/useSearchService'

export const PokemonContext = createContext<Types.PokemonContext>({} as Types.PokemonContext)

export const PokemonProvider = ({ children }: Types.PokemonProvider) => {
    const {
        item: pokemon,
        loading: searchLoading,
        error: searchError,
        searchItem: searchPokemon
    } = useSearchService<IPokemon>(undefined, getPokemonByName)
    
    const {
        item: pokeTeam,
        saveItem: savePokeTeam,
        loading: saveLoading,
        error: saveError
    } = useLocalStorage<IPokemon[]>('POKETEAM_V1', [])

    const searchRandomPokemon = () => {
        const pokemonId = Math.floor(Math.random() * 897) + 1;
        searchPokemon(pokemonId)
    }

    const catchPokemon = (pokemon: IPokemon) => {
        const hasPokemon = pokeTeam.find(elem => elem.id === pokemon.id)
        if (hasPokemon) {
            console.error({error: 'pokemon already exists'})
            alert('pokemon already exists')
        } else {
            const newPokeTeam = [pokemon, ...pokeTeam]
            savePokeTeam(newPokeTeam)
        }
    }
    const deletePokemon = (pokemonId: number) => {
        const newPokeTeam = pokeTeam.filter(pokemon => pokemon.id !== pokemonId)
        savePokeTeam(newPokeTeam)
    }

    useEffect(() => {
        console.log({message: 'execute useEffect PokemonContext'})
        searchRandomPokemon()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <PokemonContext.Provider value={{
            pokemon,
            searchPokemon,
            searchRandomPokemon,
            searchLoading,
            searchError,
            pokeTeam,
            savePokeTeam,
            saveLoading,
            saveError,
            catchPokemon,
            deletePokemon
        }}>
            { children }
        </PokemonContext.Provider>
    )
}

export const usePokemonContext = () => {
    return useContext(PokemonContext)
}
