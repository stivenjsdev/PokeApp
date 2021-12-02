import React from 'react'
import * as Styled from './Header.styled'
import { Search } from '../../shared/Search'

export const Header = () => {
    return (
        <Styled.Header>
            <Styled.Title>Poke APP</Styled.Title>
            <Search 
                placeholder="Search a Pokemon..." 
                bgColor="#F5F8FA"
            />
        </Styled.Header>
    )
}
