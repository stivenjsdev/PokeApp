import React from 'react'
import * as Types from './Button.dto'
import * as Styled from './Button.styled'

export const Button: React.FC<Types.Button> = ({ 
    children, 
    bgColor = 'white',
    textColor = 'red',
}) => {
    return (
        <Styled.NewButton textColor={ textColor } bgColor={ bgColor }>
            { children }
        </Styled.NewButton>
    )
}
