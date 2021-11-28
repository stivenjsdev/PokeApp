import React from 'react'
import * as Styled from './Search.styled'
import * as Types from './Search.dto'

export const Search: React.FC<Types.Search> = ({ 
    placeholder 
}) => {
    return (
        <Styled.Input placeholder={ placeholder } />
    )
}
