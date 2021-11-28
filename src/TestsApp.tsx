import React from 'react'
import { Theme } from './Theme'
import { Button } from './components/shared/Button'
import { Search } from './components/shared/Search'

// Custom Props with TypeScript
interface AppProps {
    readonly message?: string // readonly=const ?=optional
}

const TestsApp: React.FC<AppProps> = (props) => {
    return (
        <Theme>
            <p>hello world</p>
            <Search placeholder="Search a Pokemon"></Search>
        </Theme>
    )
}

export { TestsApp }
