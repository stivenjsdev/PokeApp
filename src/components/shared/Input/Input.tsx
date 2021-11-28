import React from 'react'
import * as Styled from './Input.styled'
import * as Types from './Input.dto'

export const Input: React.FC<Types.Input> = ({ ...properties }) => {
    return (
        <Styled.Input {...properties} />
    )
}
