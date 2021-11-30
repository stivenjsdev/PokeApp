import { createGlobalStyle } from 'styled-components'
import { normalize } from './normalize'

const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Grenze Gotisch', cursive;
        /*font-family: 'Grenze', serif;*/
        font-weight: 400; 
        line-height: 1.37;
        background-color: ${props => props.theme.colors.gray.ligthen};
    }
`

export { GlobalStyle }
