import React, { useState } from 'react';
import { Theme } from './Theme'
import styled, { css } from 'styled-components'

// REACT WITH TYPESCRIPT

// Escribir de manera más corta este tipo de descripciones
type FormElement = React.FormEvent<HTMLFormElement>;

// Definimos la forma de una Task
interface ITask {
    name: string,
    done: boolean
}

// Explicación genéricos en interfaces
// interface React.FC<T> {
//     props: T
//     ... 
// }
const GuideAndExamples: React.FC<{ message: string }> = ({ message }) => {
    
    //                     Estamos recibiendo un string
    const [newTask, setNewTask] = useState<string>('');
    //                     Estamos recibiendo un Arreglo de ITask
    const [tasks, setTasks] = useState<ITask[]>([]);

    // FormEvent to onSubmit
    const handleSubmit = (e : FormElement) => {
        e.preventDefault();
        console.log('enviando...' + newTask);
        addTask( newTask );
        setNewTask( '' );
    }

    const addTask = (name: string) => {
        // newTasks es un arreglo de ITask s
        const newTasks: ITask[] = [...tasks, { name, done: false }];
        setTasks(newTasks);
    }

    // ChangeEvent to onChange
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setNewTask( e.target.value );
    }

    return (
        <>
            <h1>{ message }</h1>
            <form onSubmit={ handleSubmit }>
                <input type="text" onChange={ handleChange } value={ newTask } />
                <input type="submit" value="Save"/>
            </form>
        </>
    )
}

//-------------------

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

const GuideAndExamples2: React.FC<AppProps> = (props) => {
    return (
        <Theme>
            <p>hello world</p>
            <Input />
            <Button bg="lightblue">hola</Button>
        </Theme>
    )
}

export { GuideAndExamples, GuideAndExamples2 }
