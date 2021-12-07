import React from 'react'
import { usePokemonContext } from '../../../Context'
import { PokemonCard } from '../PokemonCard'
import { CardType } from '../PokemonCard/PokemonCard.type'
import * as Styled from './PokemonTeam.styled'
// import * as Types from './PokemonTeam.type'

export const PokemonTeam = ({...properties}): JSX.Element => {
    const { pokeTeam } = usePokemonContext()
    return (
        <Styled.PokemonTeam>
            <Styled.Title>Your Team</Styled.Title>
            <Styled.PokemonListContainer {...properties}>
                {pokeTeam.map(pokemon => (
                    <PokemonCard
                        type={CardType.B}
                        key={pokemon.id}
                        pokemon={pokemon}
                    />
                ))}
            </Styled.PokemonListContainer>
        </Styled.PokemonTeam>
    )
}
