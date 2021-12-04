import { Button } from '../Button/Button.type'

export interface SearchButtonStyled {
    readonly iconSize?: string;
}

export interface SearchButton extends Button, SearchButtonStyled {
    readonly iconColor?: string;
}
