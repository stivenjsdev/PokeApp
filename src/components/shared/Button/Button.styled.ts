import styled from 'styled-components'
import * as Types from './Button.type'

export const Button = styled.button<Types.StyledButton>`
    font-family: ${props => props.theme.fonts.secondary};
    font-weight: 200;
    font-size: ${props => props.theme.sizes.m + 'px'};
    background-color: ${props => props.bgColor};
    color: ${props => props.textColor};
    border: ${props => props.border};
    padding: 6px;
    /* outline: none; */
    /* transition: all 0.2s; */
    cursor: pointer;
    &:hover {
        background-color: ${props => props.bgColorHover};
        /* transform: scale(1.08); */
    }
    &:active {
        box-shadow: ${props => props.theme.shadows.down};
        transform: translateY(2px);
    }
`
