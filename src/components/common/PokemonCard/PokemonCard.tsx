import React from 'react'
import * as Styled from './PokemonCard.styled'
import * as Types from './PokemonCard.type'

export const PokemonCard = ({
    pokemon,
    ...properties
}: Types.PokemonCard) => {
    return (
        <Styled.Card {...properties}>
            {
                pokemon 
                    ? <>
                        <Styled.Image 
                            src={ pokemon.image } 
                            alt="pokemon image" 
                        />
                        <Styled.Title>{ pokemon.name }</Styled.Title>
                        <Styled.Types>{ pokemon.types }</Styled.Types>
                    </>
                    : <Styled.NotFoundText>not found</Styled.NotFoundText>

            }
            
        </Styled.Card>
    )
}
