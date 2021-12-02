import React from 'react'
import { Theme } from './Theme'
import { Header } from './components/common/Header'

// Custom Props with TypeScript
interface AppProps {
    readonly message?: string // readonly=const ?=optional
}

const TestsApp: React.FC<AppProps> = (props) => {
    return (
        <Theme>
            <Header />
        </Theme>
    )
}

export { TestsApp }
