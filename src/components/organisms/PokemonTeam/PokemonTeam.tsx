import React from 'react'
import { usePokemonContext } from '../../../Context'
import { PokemonCard } from '../../molecules/PokemonCard'
import { CardType } from '../../molecules/PokemonCard/PokemonCard.type'
import * as Styled from './PokemonTeam.styled'

export const PokemonTeam = ({...properties}): JSX.Element => {
    const { pokeTeam } = usePokemonContext()
    return (
        <Styled.PokemonTeam>
            <Styled.Title>Pokemon Team</Styled.Title>
            <Styled.PokemonListContainer {...properties}>
                {pokeTeam.map(pokemon => (
                    <PokemonCard
                        key={pokemon.id}
                        cardType={CardType.TEAM}
                        pokemon={pokemon}
                    />
                ))}
            </Styled.PokemonListContainer>
        </Styled.PokemonTeam>
    )
}
