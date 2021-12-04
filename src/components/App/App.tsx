import React from 'react'
import { Theme } from '../../Theme'
import { PokemonProvider } from '../../Context'
import * as Styled from './App.styled'

const App = (): JSX.Element => {

  return (
    <Theme>
      <PokemonProvider>
        <Styled.App>
          <Styled.Header />

          <Styled.Sidebar />

          <Styled.StyledMain>

          </Styled.StyledMain>
        </Styled.App>
      </PokemonProvider>
    </Theme>
  )
}

export { App }
