import React from 'react'

export interface StyledCard {}

export interface Card extends React.HTMLAttributes<HTMLElement>, StyledCard {
    children?: React.ReactNode;
    className?: string;
}
