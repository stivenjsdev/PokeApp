import styled, { css } from 'styled-components'
import { Card as SimpleCard} from '../../shared/Card'

export const Card = styled(SimpleCard)`
    position: relative;
    border-radius: ${props => props.theme.borderRadius.card};
    min-height: 198px;
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

export const Types = styled.p`
    margin: 5px 0;
    text-align: center;
`

export const NotFoundText = styled.p`
    text-align: center;
    font-size: 25px;
`

const buttonStyles = css`
    position: absolute;
    width: 40px;
    height: 40px;
    top: 7px;
    color: #FFF;
    border-radius: 50px;
    border: none;
    text-align: center;
    box-shadow: ${props => props.theme.shadows.elevate};
    cursor: pointer;
    opacity: 0.7;
    &:hover {
        transform: scale(1.05);
    }
    &:active {
        transform: translateY(2px);
        box-shadow: ${props => props.theme.shadows.down};
    }
`

export const AddButton = styled.button`
    ${buttonStyles}
    right: 7px;
    background-color: #0C9;
`

export const DeleteButton = styled.button`
    ${buttonStyles}
    left: 7px;
    background-color: lightcoral;
`
