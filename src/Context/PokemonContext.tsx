import React, { createContext, useContext } from 'react'
import { IPokemon } from '../types/IPokemon'
import * as Types from './PokemonContext.type'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { usePokemonSearch } from '../hooks/usePokemonSearch'

export const PokemonContext = createContext<Types.PokemonContext>({} as Types.PokemonContext)

export const PokemonProvider = ({ children }: Types.PokemonProvider) => {
    const {
        pokemon,
        loading: searchLoading,
        error: searchError,
        searchPokemon
    } = usePokemonSearch()
    
    const {
        item: pokeTeam,
        saveItem: savePokeTeam,
        loading: saveLoading,
        error: saveError
    } = useLocalStorage<IPokemon[]>('POKETEAM_V1', [])

    const catchPokemon = (pokemon: IPokemon) => {
        const newPokeTeam = [...pokeTeam, pokemon]
        savePokeTeam(newPokeTeam)
    }
    const deletePokemon = (pokemonId: number) => {
        const newPokeTeam = pokeTeam.filter(pokemon => pokemon.id !== pokemonId)
        savePokeTeam(newPokeTeam)
    }

    return (
        <PokemonContext.Provider value={{
            pokemon,
            searchPokemon,
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
