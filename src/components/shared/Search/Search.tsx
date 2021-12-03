import React, { useState } from 'react'
import * as Styled from './Search.styled'
import * as Types from './Search.type'
import { SearchButton } from '../SearchButton'
import { Input } from '../Input'

// Extract event types
type InputEvent = React.ChangeEvent<HTMLInputElement>
type FormEvent = React.FormEvent<HTMLFormElement>

// API Request Function
const URLPOKEMONAPI = 'https://pokeapi.co/api/v2/pokemon/'
interface Pokemon {
    image: string;
    name: string;
    // types: Array<any>
    types: string;
}
const getPokemonByName = async (name: string) => {
    const response = await fetch(URLPOKEMONAPI + name)
    const data = await response.json()
    const pokemon: Pokemon = {
        image: data.sprites.front_default,
        name: data.name,
        // types: data.types
        types: data.types.length > 1
            ? `${data.types[0].type.name}   ${data.types[1].type.name}`
            : data.types[0].type.name
    }
    console.log(pokemon) // Delete This
    return pokemon
}

export const Search = ({
    getPokemon,
    placeholder,
    bgColor,
    ...properties
}: Types.Search): JSX.Element => {
    
    // State
    const [value, setValue] = useState('')

    // Form handle change function
    const handleChange = (event: InputEvent) => {
        setValue(event.target.value)
    }

    // Form handle submit function
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        // submit(value) /doing/ send captured value up or create a function that makes api request
        const response = await getPokemonByName(value.toLowerCase())
        getPokemon(response)
        setValue('')
    }

    return (
        <Styled.SearchForm onSubmit={ handleSubmit } {...properties}>
            <Input 
                placeholder={ placeholder }
                padding="6px 6px 6px 35px"
                value={ value }
                onChange={ handleChange }
                bgColor={ bgColor }
            />
            <SearchButton 
                border="none" 
                type="submit"
                bgColor={ bgColor }
            />
        </Styled.SearchForm>
    )
}
