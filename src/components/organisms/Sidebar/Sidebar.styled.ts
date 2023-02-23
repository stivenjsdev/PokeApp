import styled from 'styled-components'
import { Button as SimpleButton } from '../../atoms/Button'

export const Sidebar = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1em 0;
    
    background-color: ${props => props.theme.colors.white};
    padding: 0.625em;
`

export const Message = styled.p``

export const Button = styled(SimpleButton)``
