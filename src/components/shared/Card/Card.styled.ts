import styled from 'styled-components'
import * as Types from './Card.type'

export const Card = styled.div<Types.StyledCard>`
    width: 160px;
    border: 1px solid ${props => props.theme.colors.gray.middle};
    border-radius: ${props => props.theme.borderRadius.card};
    padding: 10px;
`
