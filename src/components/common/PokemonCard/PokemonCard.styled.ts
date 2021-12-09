import styled, { css } from 'styled-components'
import { Card as SimpleCard} from '../../shared/Card'
import { IconButton } from '../../shared/IconButton'
import * as Types from './PokemonCard.type'

export const Card = styled(SimpleCard)<Types.PokemonCard>`
    position: relative;
    min-height: 198px;
    ${props => {
        switch (props.cardType) {
            case Types.CardType.PREVIEW:
                return css`
                    background-color: ${props => props.theme.colors.gray.lightest};
                `
            case Types.CardType.TEAM:
                return css`
                    background-color: ${props => props.theme.colors.white};
                `
        }
    }}
    &:hover {
        /* transform: scale(1.01); */
        box-shadow: ${props => props.theme.shadows.card};
    }
`

export const Image = styled.img`
    display: block;
    margin: 0 auto;
    width: 136px;
`

export const Title = styled.h1`
    margin: 5px 0;
    text-align: center;
`

export const PokemonTypes = styled.p`
    margin: 5px 0;
    text-align: center;
`

export const NotFoundText = styled.p`
    text-align: center;
    font-size: 25px;
`

const buttonStyles = css`
    position: absolute;
    top: 7px;
    right: 7px;
`

export const AddButton = styled(IconButton)`
    ${buttonStyles}
`

export const DeleteButton = styled(IconButton)`
    ${buttonStyles}
`
