import React from 'react'
import * as Styled from './PokemonCard.styled'
import * as Types from './PokemonCard.type'

export const PokemonCard = ({
    image,
    name,
    types,
    ...properties
}: Types.PokemonCard) => {
    return (
        <Styled.Card {...properties}>
            <Styled.Image 
                src={ image } 
                alt="pokemon image" 
            />
            <Styled.Title>{ name }</Styled.Title>
            <Styled.Types>{ types }</Styled.Types>
        </Styled.Card>
    )
}
