import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        fonts: {
            primary: string;
            secondary: string;
        };
        borderRadius: {
            normal: string;
            card: string;
            search: string;
        };
        colors: {
            main: string;
            primary: string;
            secondary: string;
            accent: string;
            white: string;
            black: string;
            green: string;
            red: string;
            alert: {
                success: string;
                warning: string;
                error: string;
            }
            gray: {
                darkest: string;
                dark: string;
                middle: string;
                light: string;
                lightest: string;
            }
        };
        shadows : {
            elevate: string;
            down: string;
            card: string;
            header: string;
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