import styled from 'styled-components'
import { Button as SimpleButton } from '../../shared/Button'

export const Sidebar = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    background-color: ${props => props.theme.colors.white};
    padding: 10px;
`

export const Message = styled.p`
    margin: 5px 0;
`

export const Button = styled(SimpleButton)`
    margin: 5px 0;
    border-radius:0.12em;
`
