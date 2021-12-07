import { useState, useEffect } from 'react'

export const useLocalStorage = <T extends unknown>(itemName: string, initialValue: T) => {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState(initialValue)

    useEffect(() => {
        console.log({ message: 'execute useEffect LocalStorage' }) // Delete
        try {
            const localStorageItem = localStorage.getItem(itemName)
            let parsedItem = initialValue
            if (!localStorageItem) {
                localStorage.setItem(itemName, JSON.stringify(initialValue))
            } else {
                parsedItem = JSON.parse(localStorageItem)
            }
            setItem(parsedItem)
            setLoading(false)
        } catch (error) {
            setError(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const saveItem = (newItem: T) => {
        try {
            const stringifiedItem = JSON.stringify(newItem)
            localStorage.setItem(itemName, stringifiedItem)
            setItem(newItem)
            console.log({message: 'Item Saved'})
        } catch (error) {
            setError(true)
            console.log({error})
        }
    }

    return {
        item,
        saveItem,
        loading,
        error
    }
}
