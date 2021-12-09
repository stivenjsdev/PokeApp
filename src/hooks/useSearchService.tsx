import { useState } from 'react'

export const useSearchService = <T extends unknown>(
    initialValue: T | undefined, 
    service: (value: string | number) => Promise<T | undefined>
) => {
    const [item, setItem] = useState<T | undefined>(initialValue)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const searchItem = async (value: string | number) => {
        setLoading(true)
        setError(false)
        const obtainedItem = await service(value)
        if (!obtainedItem) {
            setError(true)
            setItem(obtainedItem)
            setLoading(false)
        } else {
            setError(false)
            setItem(obtainedItem)
            setLoading(false)
        }
    }

    return {
        item,
        loading,
        error,
        searchItem
    }
}
