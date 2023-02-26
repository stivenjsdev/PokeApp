import { useState } from 'react'
import { AlertType } from '../components/atoms/Alert/Alert.type'

export const useAlert = () => {
  const [message, setMessage] = useState<string>('')
  const [showAlert, setShowAlert] = useState<boolean>(false)
  const [alertType, setAlertType] = useState<AlertType>(AlertType.WARNING)

  return {
    message,
    setMessage,
    showAlert,
    setShowAlert,
    alertType,
    setAlertType
  }
}
