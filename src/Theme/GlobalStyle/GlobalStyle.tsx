import { createGlobalStyle } from 'styled-components'
import { normalize } from './normalize'

const GlobalStyle = createGlobalStyle`
    ${normalize}

    *, *:before, *:after {
        box-sizing: border-box;
    }

    body {
        font-family: ${props => props.theme.fonts.primary};
        /*font-family: 'Grenze', serif;*/
        font-weight: 400; 
        line-height: 1.37;
        background-color: ${props => props.theme.colors.gray.lightest};
    }
`

export { GlobalStyle }
