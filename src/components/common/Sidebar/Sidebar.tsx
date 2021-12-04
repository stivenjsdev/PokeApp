import React from 'react'
import { usePokemonContext } from '../../../Context'
import { PokemonCard } from '../PokemonCard'
import * as Styled from './Sidebar.styled'
import * as Types from './Sidebar.type'

export const Sidebar = ({ children, ...properties }: Types.Sidebar) => {
    const { pokemon, loading, error, searchPokemon } = usePokemonContext()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const pokemonId = Math.floor(Math.random() * 897) + 1;
        searchPokemon(pokemonId)
    }

    return (
        <Styled.Sidebar {...properties}>
            {pokemon &&
                <PokemonCard
                    pokemon={pokemon}
                    bgColor="#F5F8FA"
                />
            }
            <Styled.Button
                onClick={handleClick}
                bgColorHover="#F5F8FA"
            >
                Walk through the tall grass
            </Styled.Button>
            {error && <Styled.Message>¡Error! not found</Styled.Message>}
            {loading && <Styled.Message>Loading....</Styled.Message>}
        </Styled.Sidebar>
    )
}
