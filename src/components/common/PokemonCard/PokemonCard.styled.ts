import styled from 'styled-components'
import { Card as SimpleCard} from '../../shared/Card'

export const Card = styled(SimpleCard)`
    border-radius: ${props => props.theme.borderRadius.card};
    &:hover {
        /* transform: scale(1.01); */
        box-shadow: ${props => props.theme.shadows.card};
    }
`

export const Image = styled.img`
    display: block;
    margin: 0 auto;
`

export const Title = styled.h1`
    margin: 5px 0;
    text-align: center;
`

export const Types = styled.p`
    margin: 5px 0;
    text-align: center;
`
