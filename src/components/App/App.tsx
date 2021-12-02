import React from 'react'
import { Theme } from '../../Theme'
import { PokemonCard } from '../common/PokemonCard'
import * as Styled from './App.styled'

const App = () => {
  return (
    <Theme>
      <Styled.App>
        <Styled.Header />

        <Styled.Sidebar>
          <PokemonCard
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            name="pikachu"
            types="electric roedor"
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
