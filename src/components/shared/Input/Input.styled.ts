import styled from 'styled-components'
import * as Types from './Input.type'

export const Input = styled.input<Types.StyledInput>`
    background-color: #fff;
    color: #333;
    font-size: ${props => props.theme.sizes.m + 'px'};
    border-radius: ${props => props.theme.borderRadius || '2px'};
    margin: 0;
    padding: ${props => props.padding || '6px'};
    font-family: 'Grenze', serif;
    font-weight: 200;
    border: none;
    outline: none;
`
