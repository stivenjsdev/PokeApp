import React from 'react'
import * as Styled from './Header.styled'
import * as Types from './Header.type'
import { Search } from '../../shared/Search'

export const Header = ({...properties}: Types.Header) => {
    return (
        <Styled.Header {...properties}>
            <Styled.Title>
                <i className="fa fa-dove"></i>
                Pokemon Catcher
            </Styled.Title>
            <Search placeholder="Search a Pokemon..."/>
        </Styled.Header>
    )
}
