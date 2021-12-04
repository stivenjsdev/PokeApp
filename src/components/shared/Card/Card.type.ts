import React from 'react'

export interface StyledCard {
    readonly bgColor?: string;
    readonly borderColor?: string;
    readonly width?: string;
}

export interface Card extends StyledCard {
    children?: React.ReactNode;
    className?: string;
}
