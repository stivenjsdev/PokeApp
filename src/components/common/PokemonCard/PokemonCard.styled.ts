import styled from 'styled-components'
import { Card as SimpleCard} from '../../shared/Card'

export const Card = styled(SimpleCard)`
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
