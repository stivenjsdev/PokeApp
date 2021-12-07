import React from 'react'

export interface StyledCard {
    readonly bgColor?: string;
    readonly borderColor?: string;
    readonly width?: string;
}

export interface Card extends React.HTMLAttributes<HTMLElement>, StyledCard {
    children?: React.ReactNode;
    className?: string;
}
