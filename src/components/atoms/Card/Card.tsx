import React from 'react'
import * as Styled from './Card.styled'
import * as Types from './Card.type'

export const Card = ({
    children,
    className
}: Types.Card) => {
    return (
        <Styled.Card className={className}>
            { children }
        </Styled.Card>
    )
}
