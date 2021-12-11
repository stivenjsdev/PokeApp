import styled from 'styled-components'
import * as Types from './Input.type'

export const Input = styled.input<Types.StyledInput>`
    background-color: ${props => props.theme.colors.gray.lightest};
    color: ${props => props.theme.colors.gray.darktest};
    font-size: 1.125rem;
    border-radius: ${props => props.theme.borderRadius.search};
    margin: 0;
    padding: 0.33em 0.33em 0.33em 1.94em;
    font-family: ${props => props.theme.fonts.secondary};
    font-weight: 200;
    border: none;
    outline: none;
`
