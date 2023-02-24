import React from 'react'

export enum ButtonType {
    NORMAL,
    INVERT,
    TRANSPARENT
}

export interface StyledButton {
    readonly buttonType?: ButtonType;
}

export interface Button extends StyledButton, React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode; // or string
}
