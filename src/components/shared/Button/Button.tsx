import React from 'react'
import * as Types from './Button.type'
import * as Styled from './Button.styled'

export const Button = ({ 
    children, 
    buttonType,
    ...properties
}: Types.Button): JSX.Element => {
    return (
        <Styled.Button 
            buttonType={ buttonType }
            {...properties}
        >
            { children }
        </Styled.Button>
    )
}
