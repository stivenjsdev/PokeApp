export interface IPokemon {
    id: number;
    image: string;
    name: string;
    // types: Array<any>
    types: string;
    hp?: string;
    attack?: string;
    defense?: string;
    speed?: string;
}
