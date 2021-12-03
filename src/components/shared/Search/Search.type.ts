export interface Search {
    readonly placeholder?: string;
    readonly bgColor?: string;
    readonly getPokemon: (pokemon: any) => void; 
}
