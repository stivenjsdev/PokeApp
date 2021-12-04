import React, { useState, createContext, useContext, useEffect } from 'react'
import { IPokemon } from '../types/IPokemon'
import { getPokemonByName } from '../services/PokemonService'
import * as Types from './PokemonContext.type'

export const PokemonContext = createContext<Types.PokemonContext>({} as Types.PokemonContext)

export const PokemonProvider = ({ children }: Types.PokemonProvider) => {
    const [pokemon, setPokemon] = useState<IPokemon | undefined>(undefined)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const searchPokemon = async (pokemonName: string | number) => {
            setLoading(true)
            setError(false)
            const pokemon = await getPokemonByName(pokemonName)
            if (!pokemon) {
                setError(true)
                setPokemon(pokemon)
                setLoading(false)
            } else {
                setError(false)
                setPokemon(pokemon)
                setLoading(false)
            }
    }

    useEffect(() => {
        const pokemonId = Math.floor(Math.random() * 897) + 1;
        searchPokemon(pokemonId)
    }, [])


    return (
        <PokemonContext.Provider value={{
            pokemon,
            searchPokemon,
            loading,
            error
        }}>
            { children }
        </PokemonContext.Provider>
    )
}

export const usePokemonContext = () => {
    return useContext(PokemonContext)
}
