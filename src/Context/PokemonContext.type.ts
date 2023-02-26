import { AlertType } from "../components/atoms/Alert/Alert.type";
import { IPokemon } from "../interfaces/IPokemon";

export interface PokemonContext {
    pokemon: IPokemon | undefined;
    searchPokemon: (pokemonName: string | number) => void;
    searchRandomPokemon: () => void;
    searchLoading: boolean;
    searchError: boolean;
    pokeTeam: IPokemon[];
    savePokeTeam: (newItem: IPokemon[]) => void;
    saveLoading: boolean;
    saveError: boolean
    catchPokemon: (pokemon: IPokemon) => void;
    deletePokemon: (pokemonId: number) => void;
    pokemonFight: (pokemonId: number) => void;
    message: string;
    alertType: AlertType;
    showAlert: boolean;
    setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PokemonProvider {
    children?: React.ReactNode;
}
