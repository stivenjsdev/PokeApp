import React from 'react'
import { Theme } from '../../Theme'
import { PokemonProvider } from '../../Context'
import * as Styled from './App.styled'
import { Alert } from '../atoms/Alert'

const App = (): JSX.Element => {

  return (
    <Theme>
      <PokemonProvider>
        <Styled.App>
          <Styled.Header />

          <Styled.Sidebar />

          <Styled.StyledMain />

          <Alert />
        </Styled.App>
      </PokemonProvider>
    </Theme>
  )
}

export { App }
