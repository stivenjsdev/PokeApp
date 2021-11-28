import { createGlobalStyle } from 'styled-components'
import { normalize } from './normalize'

const GlobalStyle = createGlobalStyle`
    ${normalize}

    body {
        font-family: 'Grenze Gotisch', cursive;
        font-weight: 400; 
        line-height: 1.37;
    }
`

export { GlobalStyle }
