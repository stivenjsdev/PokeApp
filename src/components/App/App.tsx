import React, { useState } from 'react'
import { Theme } from '../../Theme'
import { PokemonCard } from '../common/PokemonCard'
import * as Styled from './App.styled'

const examplePokemon = {
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  name: 'pikachu',
  types: 'electric'
}

const App = () => {
  const [state, setState] = useState(examplePokemon)
  const { image, name, types } = state;

  const getPokemon = async (pokemon: any) => {
    setState(pokemon)
  }

  return (
    <Theme>
      <Styled.App>
        <Styled.Header getPokemon={getPokemon} />

        <Styled.Sidebar>
          <PokemonCard
            image={ image }
            name={ name }
            types={ types }
            bgColor="#F5F8FA"
          />
        </Styled.Sidebar>

        <Styled.StyledMain>

        </Styled.StyledMain>
      </Styled.App>
    </Theme>
  )
}

export { App }
