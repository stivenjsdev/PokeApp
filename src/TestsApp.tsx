import React from 'react'
import { Theme } from './Theme'
import { Header } from './components/common/Header'
import { PokemonCard } from './components/common/PokemonCard'

// Custom Props with TypeScript
interface AppProps {
    readonly message?: string // readonly=const ?=optional
}

const TestsApp: React.FC<AppProps> = (props) => {
    return (
        <Theme>
            <Header />
            <PokemonCard 
                image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" 
                name="pikachu"
                types="electric roedor"
            />
        </Theme>
    )
}

export { TestsApp }
