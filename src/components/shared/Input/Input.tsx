import React from 'react'
import * as Styled from './Input.styled'
import * as Types from './Input.type'

export const Input = ({...properties}: Types.Input): JSX.Element => {
    return (
        <Styled.Input {...properties} />
    )
}
