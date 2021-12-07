import { IPokemon } from "../types/IPokemon";

export interface PokemonContext {
    pokemon: IPokemon | undefined;
    searchPokemon: (pokemonName: string | number) => void;
    searchLoading: boolean;
    searchError: boolean;
    pokeTeam: IPokemon[];
    savePokeTeam: (newItem: IPokemon[]) => void;
    saveLoading: boolean;
    saveError: boolean
    catchPokemon: (pokemon: IPokemon) => void;
    deletePokemon: (pokemonId: number) => void;
}

export interface PokemonProvider {
    children?: React.ReactNode;
}
