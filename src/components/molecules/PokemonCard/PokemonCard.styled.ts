import styled, { css } from 'styled-components'
import { Card as SimpleCard} from '../../atoms/Card'
import { IconButton } from '../../atoms/IconButton'
import * as Types from './PokemonCard.type'

export const Card = styled(SimpleCard)<Types.PokemonCard>`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3125em 0;
    padding-bottom: 0.938em;
    min-height: 12.375rem;
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
    width: 8.5rem;
`

export const Title = styled.h1`
    font-size: 1.75rem;
    text-align: center;
    /* margin: 0.178571429em 0; */
    margin: 0;
`

export const PokemonTypes = styled.p`
    text-align: center;
    line-height: 1;
    /* margin: 0.3125em 0; */
    margin: 0;
`

export const NotFoundText = styled.p`
    font-size: 1.5625rem;
    text-align: center;
`

export const Stats = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const StatElement = styled.p`
    /* width: 50%; */
    flex-basis: 50%;
    font-size: 0.875rem;
    font-weight: 300;
    text-align: center;
    margin: 0;
    color: ${({ theme }) => theme.colors.gray.darktest};
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
