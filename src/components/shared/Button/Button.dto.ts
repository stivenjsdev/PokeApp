import React from 'react'

export interface StyledButton {
    readonly bgColor?: string;
}

export interface StyledNewButton {
    readonly textColor?: string;
}

export interface Button extends StyledButton, StyledNewButton{}
