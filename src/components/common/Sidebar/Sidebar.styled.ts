import styled from 'styled-components'
import { Button as SimpleButton } from '../../shared/Button'

export const Sidebar = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 15px 0px;
    
    background-color: ${props => props.theme.colors.white};
    padding: 10px;
`

export const Message = styled.p``

export const Button = styled(SimpleButton)``
