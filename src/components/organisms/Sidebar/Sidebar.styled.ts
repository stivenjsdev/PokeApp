import styled from 'styled-components'
import { Button as SimpleButton } from '../../atoms/Button'

export const Sidebar = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1em 0;
    
    /* background-color: ${props => props.theme.colors.white}; */
    background-image: linear-gradient(180deg, #c5e0cc , transparent);
    padding: 0.625em;
`

export const Message = styled.p``

export const Button = styled(SimpleButton)`
    box-shadow: 2px 2px 3px rgba(1,35,97,0.25);
`
