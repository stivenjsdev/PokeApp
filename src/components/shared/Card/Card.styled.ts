import styled from 'styled-components'
import * as Types from './Card.type'

export const Card = styled.div<Types.StyledCard>`
    width: ${props => props.width};
    border: 1px solid ${props => props.borderColor};
    border-radius: ${props => props.theme.borderRadius};

    background-color: ${props => props.bgColor};
    padding: 10px;
`
