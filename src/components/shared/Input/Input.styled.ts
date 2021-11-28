import styled from 'styled-components'

export const Input = styled.input`
    background-color: #fff;
    color: #333;
    font-size: 16px;
    border-radius: ${props => props.theme.borderRadius || '2px'};
    margin: 0;
    padding: 6px;
    font-family: 'Grenze', serif;
    font-weight: 200;
    border: none;
    outline: none;
`
