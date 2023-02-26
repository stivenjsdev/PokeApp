import React, { createContext, useContext, useEffect } from 'react'
import { IPokemon } from '../interfaces/IPokemon'
import { getPokemonByName } from '../services/PokemonService'
import * as Types from './PokemonContext.type'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useSearchService } from '../hooks/useSearchService'
import { useAlert } from '../hooks/useAlert'
import { AlertType } from '../components/atoms/Alert/Alert.type'

export const PokemonContext = createContext<Types.PokemonContext>({} as Types.PokemonContext)

export const PokemonProvider = ({ children }: Types.PokemonProvider) => {
    const {
        item: pokemon,
        loading: searchLoading,
        error: searchError,
        searchItem: searchPokemon
    } = useSearchService<IPokemon>(undefined, getPokemonByName)
    
    const {
        item: pokeTeam,
        saveItem: savePokeTeam,
        loading: saveLoading,
        error: saveError
    } = useLocalStorage<IPokemon[]>('POKETEAM_V1', [])

    const {
        message,
        showAlert,
        setMessage,
        setShowAlert,
        alertType,
        setAlertType
    } = useAlert()

    const searchRandomPokemon = () => {
        const pokemonId = Math.floor(Math.random() * 897) + 1;
        searchPokemon(pokemonId)
    }

    const catchPokemon = (pokemon: IPokemon) => {
        const hasPokemon = pokeTeam.find(elem => elem.id === pokemon.id)
        if (hasPokemon) {
            console.error({error: `pokemon ${hasPokemon.name} already exists`})
            alert(`pokemon ${hasPokemon.name} already exists`)
        } else {
            const newPokeTeam = [pokemon, ...pokeTeam]
            savePokeTeam(newPokeTeam)
        }
    }
    const deletePokemon = (pokemonId: number) => {
        const newPokeTeam = pokeTeam.filter(pokemon => pokemon.id !== pokemonId)
        savePokeTeam(newPokeTeam)
    }
    const pokemonFight = async (pokemonId: number) => {
        const foundedPokemon: IPokemon | undefined = pokeTeam.find(pokemon => pokemon.id === pokemonId)
        
        if (foundedPokemon && pokemon) {
            const attackerPokemon: IPokemon = { ...foundedPokemon }
            const defenderPokemon: IPokemon = { ...pokemon }

            if (attackerPokemon.hp && defenderPokemon.hp) {
                const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
                setMessage(`${attackerPokemon.name} attacks ${defenderPokemon.name}`)
                setAlertType(AlertType.WARNING)
                setShowAlert(true)
                await delay(1700)
                setShowAlert(false)

                const calculateDamage = (attacker: IPokemon, defender: IPokemon): number => {
                    const effectiveDefense: number = Number(defender.defense) * 0.4
                    const damage: number = Number(attacker.attack) - effectiveDefense
                    return damage
                }
    
                const attackerHasHp = Number(attackerPokemon.hp) > 0
                const defenderHasHp = Number(defenderPokemon.hp) > 0
    
                while (attackerHasHp && defenderHasHp) {
                    const attackerDamage = calculateDamage(attackerPokemon, defenderPokemon)
                    defenderPokemon.hp -= attackerDamage

                    console.log("🔪 attackerDamage:", attackerDamage)
                    console.log("❤ defenderPokemon.hp:", defenderPokemon.hp)

                    if(defenderPokemon.hp <= 0){
                        console.log(`${attackerPokemon.name} wins!, you have captured ${defenderPokemon.name}`)
                        setMessage(`${attackerPokemon.name} wins!, you have captured ${defenderPokemon.name}`)
                        setAlertType(AlertType.SUCCESS)
                        setShowAlert(true)
                        catchPokemon(pokemon)
                        searchRandomPokemon()
                        break
                    }

                    const defenderDamage = calculateDamage(defenderPokemon, attackerPokemon)
                    attackerPokemon.hp -= defenderDamage

                    console.log("🔪 defenderDamage:", defenderDamage)
                    console.log("❤ attackerPokemon.hp:", attackerPokemon.hp)

                    if(attackerPokemon.hp <= 0){
                        console.log(`${attackerPokemon.name} has been defeated by ${defenderPokemon.name}`)
                        setMessage(`${attackerPokemon.name} has been defeated by ${defenderPokemon.name}`)
                        setAlertType(AlertType.ERROR)
                        setShowAlert(true)
                        break
                    }
                }
            } else {
                console.error("🚀 ~ file: PokemonContext.tsx:110 ~ pokemonFight ~ no hp found")
            }
        } else {
            console.error("🚀 ~ file: PokemonContext.tsx:113 ~ pokemonFight ~ no pokemon found")
        }

    }

    useEffect(() => {
        console.log({message: 'execute useEffect PokemonContext'})
        async function fetchPokemon() {
            await searchRandomPokemon()
        }
        fetchPokemon()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        console.log({message: 'validating poketeam...'})
        if (pokeTeam.length <= 0 && pokemon) {
            console.log("🚀 ~ file: PokemonContext.tsx:130 ~ useEffect ~ pokeTeam.length:", pokeTeam.length, "starting new game")   
            const newPokeTeam = [...pokeTeam, pokemon]
            savePokeTeam(newPokeTeam)
            searchRandomPokemon()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pokemon])
    

    return (
        <PokemonContext.Provider value={{
            pokemon,
            searchPokemon,
            searchRandomPokemon,
            searchLoading,
            searchError,
            pokeTeam,
            savePokeTeam,
            saveLoading,
            saveError,
            catchPokemon,
            deletePokemon,
            pokemonFight,
            message,
            alertType,
            showAlert,
            setShowAlert
        }}>
            { children }
        </PokemonContext.Provider>
    )
}

export const usePokemonContext = () => {
    return useContext(PokemonContext)
}
