import React from 'react'
import { usePokemonContext } from '../../../Context'
import * as Styled from './Alert.styled'

export const Alert = (): JSX.Element | null => {
  const { message, alertType, showAlert, setShowAlert } = usePokemonContext()
  
  if (!showAlert) return null

  return (
      <Styled.Alert
        message={message} 
        type={alertType} 
        onClick={() => setShowAlert(false)}
      >
        <Styled.Text>
          {message}
        </Styled.Text>
      </Styled.Alert>
  )
}
