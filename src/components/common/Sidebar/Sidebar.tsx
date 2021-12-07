import React from 'react'
import { usePokemonContext } from '../../../Context'
import { PokemonCard } from '../PokemonCard'
import { CardType } from '../PokemonCard/PokemonCard.type'
import * as Styled from './Sidebar.styled'
import * as Types from './Sidebar.type'

export const Sidebar = ({ children, ...properties }: Types.Sidebar) => {
    const { pokemon, searchLoading, searchError, searchPokemon } = usePokemonContext()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const pokemonId = Math.floor(Math.random() * 897) + 1;
        searchPokemon(pokemonId)
    }

    return (
        <Styled.Sidebar {...properties}>
            {pokemon &&
                <PokemonCard
                    type={CardType.A}
                    pokemon={pokemon}
                />
            }
            <Styled.Button
                onClick={handleClick}
                bgColorHover="#F5F8FA"
            >
                Walk through the tall grass
            </Styled.Button>
            {searchError && <Styled.Message>¡Error! not found</Styled.Message>}
            {searchLoading && <Styled.Message>Loading....</Styled.Message>}
        </Styled.Sidebar>
    )
}
