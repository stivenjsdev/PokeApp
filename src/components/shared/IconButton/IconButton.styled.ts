import styled, { css } from 'styled-components'
import * as Types from './IconButton.type'

const FloatButton = css `
    width: 40px;
    height: 40px;
    border-radius: 50px;
    box-shadow: ${props => props.theme.shadows.elevate};
    opacity: 0.7;
`

export const IconButton = styled.button<Types.IconButtonStyled>`
    font-size: ${props => props.iconSize};
    font-weight: 200;
    text-align: center;
    color: ${props => props.iconColor === Types.IconColor.WHITE ? props.theme.colors.white : props.theme.colors.black};
    padding: 6px;
    border: none;
    cursor: pointer;
    transition: all 0.2s;
    ${props => {
        switch (props.icon) {
            case Types.Icon.PLUS:
                return css`
                    ${FloatButton}
                    background-color: ${props => props.theme.colors.green};
                `
            case Types.Icon.TRASH:
                return css`
                    ${FloatButton}
                    background-color: ${props => props.theme.colors.red};
                `
            default:
                return css`
                    background-color: ${props => props.theme.colors.gray.lightest};
                    border-radius: ${props => props.theme.borderRadius.search};
                    &:hover {
                        background-color: ${props => props.theme.colors.gray.middle};
                    }
                `
        }
    }}
    &:hover {
        transform: scale(1.08);
    }
    &:active {
        box-shadow: ${props => props.theme.shadows.down};
        transform: translateY(2px);
    }
`
