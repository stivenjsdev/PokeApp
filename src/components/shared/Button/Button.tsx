import React from 'react'
import * as Types from './Button.type'
import * as Styled from './Button.styled'

export const Button = ({ 
    children, 
    bgColor = 'white',
    textColor = 'black',
    border = '1px solid lightgray',
    bgColorHover = 'lightgray',
    ...properties
}: Types.Button): JSX.Element => {
    return (
        <Styled.Button 
            textColor={ textColor } 
            bgColor={ bgColor }
            border={ border }
            bgColorHover={ bgColorHover }
            {...properties}
        >
            { children }
        </Styled.Button>
    )
}
