import React from 'react'
import { Theme } from './Theme'

// Custom Props with TypeScript
interface AppProps {
    readonly message?: string // readonly=const ?=optional
}

const TestsApp: React.FC<AppProps> = (props) => {
    return (
        <Theme>
            <div>hello world</div>
        </Theme>
    )
}

export default TestsApp
