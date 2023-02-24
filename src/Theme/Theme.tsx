import { ThemeProvider, DefaultTheme } from 'styled-components'
import { GlobalStyle } from './GlobalStyle'

const myTheme: DefaultTheme = {
    fonts: {
        primary: "'Grenze Gotisch', cursive",
        secondary: "'Grenze', serif;"
    },
    borderRadius: {
        normal: '5px',
        card: '16px',
        search: '2px'
    },
    colors: {
        main: '#1159F5',
        primary: '#1159F5',
        secondary: '#28D8A1',
        accent: '#28D8A1',
        white: '#FFF',
        black: '#000',
        green: '#0C9',
        red: 'lightcoral',
        gray: {
            darktest: '#373B42',
            dark: '#555A65',
            middle: 'lightgray',
            light: '#B4BED5',
            lightest: '#F5F8FA'
        }
    },
    shadows : {
        // elevate: '2px 2px 3px rgba(1, 35, 97, 0.25), -2px -2px 3px rgb(255, 255, 255)',
        elevate: '2px 2px 3px rgba(1, 35, 97, 0.25)',
        down: '1px 1px 2px rgba(1, 35, 97, 0.25), -1px -1px 2px rgba(255, 255, 255, 0.75)',
        card: '0 0px 10px 0 rgb(0 0 0 / 20%)',
        header: '0px 0px 16px 1.8px lightgrey'
    },
    sizes: {
        xxl: 41,
        xl: 30,
        l: 22,
        m: 18,
        s: 14,
        xs: 11
    }
}

interface ThemeProps {
    children?: React.ReactNode
}
const Theme = ({ children }: ThemeProps) => (
    <ThemeProvider theme={ myTheme }>
        <GlobalStyle />
        { children }
    </ThemeProvider>
)

export { myTheme, Theme }
