export interface IPokemon {
    id: number;
    image: string;
    name: string;
    // types: Array<any>
    types: string;
    hp?: number;
    attack?: number;
    defense?: number;
    speed?: number;
}
