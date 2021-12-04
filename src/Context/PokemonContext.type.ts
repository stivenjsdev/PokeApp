import { IPokemon } from "../types/IPokemon";

export interface PokemonContext {
    pokemon: IPokemon | undefined;
    searchPokemon: (pokemonName: string | number) => void;
    loading: boolean;
    error: boolean;
}

export interface PokemonProvider {
    children?: React.ReactNode;
}
