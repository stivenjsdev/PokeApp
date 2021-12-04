import { IPokemon } from '../types/IPokemon'

const URLPOKEMONAPI = 'https://pokeapi.co/api/v2/pokemon/'

export const getPokemonByName = async (name: string | number) => {
    try {
        const response = await fetch(URLPOKEMONAPI + name)
        const data = await response.json()
        const pokemon: IPokemon = {
            // image: data.sprites.front_default,
            // image: data.sprites.other.dream_world.front_default,
            image: data.sprites.other['official-artwork'].front_default,
            name: data.name,
            // types: data.types
            types: data.types.length > 1
                ? `${data.types[0].type.name}  -  ${data.types[1].type.name}`
                : data.types[0].type.name
        }
        console.log(pokemon) // Delete This
        return pokemon
    } catch (error) {
        console.log({error})
    }
}
