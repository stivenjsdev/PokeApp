import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        fonts: {
            primary: string;
            secondary: string;
        };
        borderRadius: string;
        colors: {
            main: string;
            primary: string;
            secondary: string;
            accent: string;
            white: string;
            black: string;
            red: string;
            gray: {
                darken: string;
                dark: string;
                ligth: string;
                ligthen: string;
            }
        };
        shadows : {
            elevate: string;
            down: string;
        };
        sizes: {
            xxl: number;
            xl: number;
            l: number;
            m: number;
            s: number;
            xs: number;
        };
    }
}