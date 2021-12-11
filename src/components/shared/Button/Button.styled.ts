import styled, { css } from 'styled-components'
import * as Types from './Button.type'

export const Button = styled.button<Types.StyledButton>`
    font-family: ${props => props.theme.fonts.secondary};
    font-weight: 200;
    font-size: 1.125rem;
    color: ${props => props.theme.colors.black};
    border: 1px solid lightgray;
    border-radius: ${props => props.theme.borderRadius.normal};
    padding: 0.34em;
    box-shadow: ${props => props.theme.shadows.elevate};
    cursor: pointer;
    transition: all 0.2s;
    ${props => props.buttonType === Types.ButtonType.INVERT
        ? css`
            background-color: ${props => props.theme.colors.gray.lightest};
            &:hover {
                background-color: ${props => props.theme.colors.white};
                /* transform: scale(1.08); */
            }
        `
        : css`
            background-color: ${props => props.theme.colors.white};
            &:hover {
                background-color: ${props => props.theme.colors.gray.lightest};
                /* transform: scale(1.08); */
            }
        `
    }
    &:active {
        box-shadow: ${props => props.theme.shadows.down};
        transform: translateY(2px);
    }
`
