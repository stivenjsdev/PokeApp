import React from 'react'

export enum Icon {
    SEARCH = 'fa fa-search',
    PLUS = 'fa fa-plus',
    TRASH = 'fa fa-trash'
}

export enum IconSize {
    SMALL = '14px',
    NORMAL = '18px',
    BIG = '22px',
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
