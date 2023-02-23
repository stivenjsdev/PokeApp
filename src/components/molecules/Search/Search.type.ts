import React from 'react'

export interface Search extends React.FormHTMLAttributes<HTMLFormElement> {
    readonly placeholder?: string;
}
