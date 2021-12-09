import { useState, useEffect } from 'react'
import { getPokemonByName } from '../services/PokemonService'
import { IPokemon } from '../interfaces/IPokemon'

export const usePokemonSearch = () => {
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

    return {
        pokemon,
        loading,
        error,
        searchPokemon
    }
}
