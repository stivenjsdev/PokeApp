import React from 'react'
import * as Styled from './Header.styled'
import * as Types from './Header.type'
import { Search } from '../../shared/Search'

export const Header = ({getPokemon, ...properties}: Types.Header) => {
    return (
        <Styled.Header {...properties}>
            <Styled.Title>Poke APP</Styled.Title>
            <Search
                getPokemon={ getPokemon }
                placeholder="Search a Pokemon..." 
                bgColor="#F5F8FA"
            />
        </Styled.Header>
    )
}
