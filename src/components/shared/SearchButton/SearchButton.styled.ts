import styled from 'styled-components'
import { Button } from '../Button'
import * as Types from './SearchButton.type'

export const SearchButton = styled(Button)<Types.SearchButtonStyled>`
    font-size: ${props => props.iconSize || props.theme.sizes.m + 'px'};
`
