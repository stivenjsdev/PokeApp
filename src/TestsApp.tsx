import React from 'react'
import { Theme } from './Theme'
import { Button } from './components/shared/Button'

// Custom Props with TypeScript
interface AppProps {
    readonly message?: string // readonly=const ?=optional
}

const TestsApp: React.FC<AppProps> = (props) => {
    return (
        <Theme>
            <p>hello world</p>
            <Button textColor="white" bgColor="lightblue">press</Button>
        </Theme>
    )
}

export { TestsApp }
