import React from 'react'
import { usePokemonContext } from '../../../Context'
import { PokemonCard } from '../../molecules/PokemonCard'
import { CardType } from '../../molecules/PokemonCard/PokemonCard.type'
import * as Styled from './Sidebar.styled'
import * as Types from './Sidebar.type'

export const Sidebar = ({ children, ...properties }: Types.Sidebar) => {
    const { pokemon, searchLoading, searchError, searchRandomPokemon } = usePokemonContext()

    return (
        <Styled.Sidebar {...properties}>
            {pokemon &&
                <PokemonCard
                    cardType={CardType.PREVIEW}
                    pokemon={pokemon}
                />
            }
            <Styled.Button onClick={searchRandomPokemon}>
                Walk through the tall grass
            </Styled.Button>
            {searchError && <Styled.Message>¡Error! not found</Styled.Message>}
            {searchLoading && <Styled.Message>Loading....</Styled.Message>}
        </Styled.Sidebar>
    )
}
