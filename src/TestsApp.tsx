import React from 'react'
import { Theme } from './Theme'
import { Search } from './components/shared/Search'

// Custom Props with TypeScript
interface AppProps {
    readonly message?: string // readonly=const ?=optional
}

const TestsApp: React.FC<AppProps> = (props) => {
    return (
        <Theme>
            <p>hello world</p>
            <div>
                <span>Poke API</span>
                <Search placeholder="Search a Pokemon"></Search>
            </div>
        </Theme>
    )
}

export { TestsApp }
