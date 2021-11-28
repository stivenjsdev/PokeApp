import styled from 'styled-components'
import * as Types from './Button.dto'

export const Button = styled.button<Types.StyledButton>`
    background-color: ${props => props.bgColor};
    color: black;
    padding: 5px 10px;
`

export const NewButton = styled(Button)<Types.StyledNewButton>`
    color: ${props => props.textColor};
`
