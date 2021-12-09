import React from 'react'
import { usePokemonContext } from '../../../Context'
import { PokemonCard } from '../PokemonCard'
import { CardType } from '../PokemonCard/PokemonCard.type'
import * as Styled from './PokemonTeam.styled'

export const PokemonTeam = ({...properties}): JSX.Element => {
    const { pokeTeam } = usePokemonContext()
    return (
        <Styled.PokemonTeam>
            <Styled.Title>Team</Styled.Title>
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
