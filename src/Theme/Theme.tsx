import { ThemeProvider, DefaultTheme } from 'styled-components'
import { GlobalStyle } from './Style'

const myTheme: DefaultTheme = {
    fonts: {
        primary: "'Grenze Gotisch', cursive",
        secondary: "'Grenze', serif;"
    },
    borderRadius: {
        normal: '5px',
        card: '16px'
    },
    colors: {
        main: '#1159F5',
        primary: '#1159F5',
        secondary: '#28D8A1',
        accent: '#28D8A1',
        white: '#FFF',
        black: '#000',
        red: '#FF8888',
        gray: {
            darken: '#373B42',
            dark: '#555A65',
            ligth: '#B4BED5',
            ligthen: '#F5F8FA'
        }
    },
    shadows : {
        elevate: '2px 2px 3px rgba(1, 35, 97, 0.25), -2px -2px 3px #FFFFFF',
        down: '1px 1px 2px rgba(1, 35, 97, 0.25), -1px -1px 2px rgba(255, 255, 255, 0.75)',
        card: '0 0px 10px 0 rgb(0 0 0 / 20%)'
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

const Theme: React.FC = ({ children }) => (
    <ThemeProvider theme={ myTheme }>
        <GlobalStyle />
        { children }
    </ThemeProvider>
)

export { myTheme, Theme }
