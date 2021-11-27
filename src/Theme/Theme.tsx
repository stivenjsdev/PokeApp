import { ThemeProvider, DefaultTheme } from 'styled-components'
import { GlobalStyle } from './Style'

const myTheme: DefaultTheme = {
    font: "'Grenze Gotisch', cursive",
    borderRadius: '5px',
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
