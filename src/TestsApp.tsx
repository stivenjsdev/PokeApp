import React from 'react'
import { Theme } from './Theme'

// Custom Props with TypeScript
interface AppProps {
    readonly message?: string // readonly=const ?=optional
}

const TestsApp = (props: AppProps) => {
    return (
        <Theme>
            
        </Theme>
    )
}

export { TestsApp }
