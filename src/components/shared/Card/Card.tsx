import React from 'react'
import * as Styled from './Card.styled'
import * as Types from './Card.type'

export const Card = ({
    width = '160px',
    bgColor = 'white', 
    borderColor = 'lightgray',
    children,
    className
}: Types.Card) => {
    return (
        <Styled.Card 
            width={width} 
            bgColor={bgColor} 
            borderColor={borderColor}
            className={className}
        >
            { children }
        </Styled.Card>
    )
}
