import { useState } from 'react'

export const useAnimation = () => {
  const [vibrating, setVibrating] = useState<boolean>(false)

  return {
    vibrating,
    setVibrating
  }
}
