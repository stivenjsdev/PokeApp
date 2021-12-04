import React from 'react'

export interface StyledButton {
    readonly bgColor?: string;
    readonly textColor?: string;
    readonly border?: string;
    readonly bgColorHover?: string;
}

export interface Button extends StyledButton, React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode; // or string
}
