import React from 'react'

export enum Icon {
    SEARCH = 'fa fa-search',
    PLUS = 'fa fa-plus',
    TRASH = 'fa fa-trash'
}

export enum IconSize {
    SMALL = '0.875rem',
    NORMAL = '1.125rem',
    BIG = '1.375rem',
}

export enum IconColor {
    BLACK,
    WHITE
}


export interface IconButtonStyled {
    readonly iconSize: IconSize;
    readonly iconColor?: IconColor;
    readonly icon: Icon;
}

export interface IconButton extends React.ButtonHTMLAttributes<HTMLButtonElement>, IconButtonStyled {
}
