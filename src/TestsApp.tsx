import React from 'react'
import { Theme } from './Theme'
import styled, { css } from 'styled-components'

// STYLED COMPONENTS

// Ejemplo código css dinámico
const flex = css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
`

// Definir atributos por defecto para los styled components
const Input = styled.input.attrs( props => ({
    placeholder: props.placeholder || 'Type something',
    type: props.type || 'text'
}))`
    padding: 1em;
    height: 27px;
`

// Custom Style Components Props with TypeScript
interface ButtonProps {
    readonly bg?: string
}
const Button = styled.button<ButtonProps>`
    padding: 1em 2.5em;
    margin: 1em;
    background-color: ${ props => props.bg || props.theme.colors.gray};
    /*border: none; */
`
// También se puede hacer de la siguiente forma: (Lo malo es que el snippet no funcionaría)
/*const Button2 = styled.button<ButtonProps>(props => `
    padding: 1em 2.5em;
    margin: 1em;
    background-color: ${ props.bg || ''}
`)*/


// Custom Props with TypeScript
interface AppProps {
    readonly message?: string // readonly=const ?=optional
}

const TestsApp: React.FC<AppProps> = (props) => {
    return (
        <Theme>
            <p>hello world</p>
            <Input />
            <Button bg="lightblue">hola</Button>
        </Theme>
    )
}

export default TestsApp
