import { createGlobalStyle } from 'styled-components'
import { normalize } from './normalize'

const GlobalStyle = createGlobalStyle`
    ${normalize}

    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        font-family: ${props => props.theme.fonts.primary};
        /*font-family: 'Grenze', serif;*/
        background-color: ${props => props.theme.colors.gray.lightest};
    }
`

export { GlobalStyle }
