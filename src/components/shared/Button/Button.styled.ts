import styled from 'styled-components'
import * as Types from './Button.type'

export const Button = styled.button<Types.StyledButton>`
    font-size: ${props => props.theme.sizes.m + 'px'};
    background-color: ${props => props.bgColor};
    color: ${props => props.textColor};
    border: ${props => props.border};
    padding: 6px;
    outline: none;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.bgColorHover};
    }
    &:active {
        box-shadow: ${props => props.theme.shadows.down};
    }
`
