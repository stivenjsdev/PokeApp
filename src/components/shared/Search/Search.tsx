import React, { useState } from 'react'
import * as Styled from './Search.styled'
import * as Types from './Search.type'
import { SearchButton } from '../SearchButton'
import { Input } from '../Input'
import { usePokemonContext } from '../../../Context'

// Extract event types
type InputEvent = React.ChangeEvent<HTMLInputElement>
type FormEvent = React.FormEvent<HTMLFormElement>

export const Search = ({
    placeholder,
    bgColor,
    ...properties
}: Types.Search): JSX.Element => {
    
    // State
    const [value, setValue] = useState('')

    // Context
    const { searchPokemon } = usePokemonContext()

    // Form handle change function
    const handleChange = (event: InputEvent) => {
        setValue(event.target.value)
    }

    // Form handle submit function
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        if (value) {
            searchPokemon(value.toLowerCase())
            setValue('')
        }
    }

    return (
        <Styled.SearchForm onSubmit={ handleSubmit } {...properties}>
            <Input 
                placeholder={ placeholder }
                padding="6px 6px 6px 35px"
                value={ value }
                onChange={ handleChange }
                bgColor={ bgColor }
                required
            />
            <SearchButton 
                border="none" 
                type="submit"
                bgColor={ bgColor }
            />
        </Styled.SearchForm>
    )
}
