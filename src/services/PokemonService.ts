import { IPokemon } from '../interfaces/IPokemon'

const URLPOKEMONAPI = 'https://pokeapi.co/api/v2/pokemon/'

export const getPokemonByName = async (name: string | number) => {
    try {
        const response = await fetch(URLPOKEMONAPI + name)
        const data = await response.json()
        // console.log(data.stats[1].stat.name + data.stats[1].base_stat)
        const pokemon: IPokemon = {
            id: data.id,
            // image: data.sprites.front_default,
            // image: data.sprites.other.dream_world.front_default,
            image: data.sprites.other['official-artwork'].front_default,
            name: data.name,
            // types: data.types
            types: data.types.length > 1
                ? `${data.types[0].type.name}  -  ${data.types[1].type.name}`
                : data.types[0].type.name,
            [data.stats[0].stat.name]: data.stats[0].base_stat, // hp
            [data.stats[1].stat.name]: data.stats[1].base_stat, // attack
            [data.stats[2].stat.name]: data.stats[2].base_stat, // defense
            [data.stats[5].stat.name]: data.stats[5].base_stat  // speed 
        }
        console.log({foundPokemon: pokemon}) // Delete This
        return pokemon
    } catch (error) {
        console.log({error})
    }
}
