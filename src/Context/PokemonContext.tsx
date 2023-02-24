import React, { createContext, useContext, useEffect } from 'react'
import { IPokemon } from '../interfaces/IPokemon'
import { getPokemonByName } from '../services/PokemonService'
import * as Types from './PokemonContext.type'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useSearchService } from '../hooks/useSearchService'

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
    const pokemonFight = (pokemonId: number) => {
        const foundedPokemon: IPokemon | undefined = pokeTeam.find(pokemon => pokemon.id === pokemonId)
        
        if (foundedPokemon && pokemon) {
            const attackerPokemon: IPokemon = { ...foundedPokemon }
            const defenderPokemon: IPokemon = { ...pokemon }

            console.log("🚀 ~ file: PokemonContext.tsx:51 ~ pokemonFight ~ attackerPokemon:", attackerPokemon)
            console.log("🚀 ~ file: PokemonContext.tsx:52 ~ pokemonFight ~ defenderPokemon:", defenderPokemon)

            if (attackerPokemon.hp && defenderPokemon.hp) {
                const calculateDamage = (attacker: IPokemon, defender: IPokemon) => {
                    const effectiveDefense: number = Number(defender.defense) * 0.5
                    const damage: number = Number(attacker.attack) - effectiveDefense
                    return damage
                }
    
                const attackerHasHp = Number(attackerPokemon.hp) > 0
                const defenderHasHp = Number(defenderPokemon.hp) > 0
    
                while (attackerHasHp && defenderHasHp) {
                    const attackerDamage = calculateDamage(attackerPokemon, defenderPokemon)
                    defenderPokemon.hp -= attackerDamage

                    console.log("🚀 ~ file: PokemonContext.tsx:68 ~ pokemonFight ~ attackerDamage:", attackerDamage)
                    console.log("🚀 ~ file: PokemonContext.tsx:69 ~ pokemonFight ~ defenderPokemon.hp:", defenderPokemon.hp)

                    if(defenderPokemon.hp <= 0){
                        console.log(`${defenderPokemon?.name} lose`)
                        break
                    }

                    const defenderDamage = calculateDamage(defenderPokemon, attackerPokemon)
                    attackerPokemon.hp -= defenderDamage

                    console.log("🚀 ~ file: PokemonContext.tsx:79 ~ pokemonFight ~ defenderDamage:", defenderDamage)
                    console.log("🚀 ~ file: PokemonContext.tsx:80 ~ pokemonFight ~ attackerPokemon.hp:", attackerPokemon.hp)

                    if(attackerPokemon.hp <= 0){
                        console.log(`${attackerPokemon?.name} lose`)
                        break
                    }
                }
            } else {
                console.error("🚀 ~ file: PokemonContext.tsx:88 ~ pokemonFight ~ no hp found")
            }
        } else {
            console.error("🚀 ~ file: PokemonContext.tsx:91 ~ pokemonFight ~ no pokemon found or no hp found")
        }

    }

    useEffect(() => {
        console.log({message: 'execute useEffect PokemonContext'})
        searchRandomPokemon()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
            pokemonFight
        }}>
            { children }
        </PokemonContext.Provider>
    )
}

export const usePokemonContext = () => {
    return useContext(PokemonContext)
}
