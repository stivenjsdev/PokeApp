import styled, { css, keyframes } from 'styled-components'
import { Card as SimpleCard } from '../../atoms/Card'
import { IconButton } from '../../atoms/IconButton'
import { Button } from '../../atoms/Button'
import * as Types from './PokemonCard.type'

export const Card = styled(SimpleCard) <Types.PokemonCard>`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3125em 0;
    padding-bottom: 0.938em;
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

const vibrate = keyframes`
    0%{
        transform: translateX(0);
    }
    20% {
        transform: translateX(-10px) rotate(-5deg);
    }
    40% {
        transform: translateX(10px) rotate(5deg);
    }
    60% {
        transform: translateX(-10px) rotate(-5deg);
    }
    80% {
        transform: translateX(10px) rotate(5deg);
    }
    100% {
        transform: translateX(0);
    }
`

export const Image = styled.img<Types.ImageProps>`
    display: block;
    margin: 0 auto;
    width: 136px;

    ${props => 
        props.vibrating &&
        css`
            animation-name: ${vibrate};
            animation-duration: 500ms;
            animation-timing-function: ease-in-out;
            animation-iteration-count: 1;
        `
    }
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

export const AttackButton = styled(Button)`
    position: absolute;
    top: 120px;
`
