import React, { useState } from 'react'
import * as Styled from './Search.styled'
import * as Types from './Search.type'
import { IconButton } from '../../atoms/IconButton'
import { Input } from '../../atoms/Input'
import { usePokemonContext } from '../../../Context'
import { Icon, IconColor, IconSize } from '../../atoms/IconButton/IconButton.type'

// Extract event types
type InputEvent = React.ChangeEvent<HTMLInputElement>
type FormEvent = React.FormEvent<HTMLFormElement>

export const Search = ({
    placeholder,
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
            <IconButton
                icon={Icon.SEARCH}
                iconColor={IconColor.BLACK}
                iconSize={IconSize.SMALL}
                type="submit"
            />
            <Input 
                placeholder={ placeholder }
                value={ value }
                onChange={ handleChange }
                required
            />
        </Styled.SearchForm>
    )
}
