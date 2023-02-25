import { IPokemon } from '../../../interfaces/IPokemon'
import { Card } from '../../atoms/Card/Card.type'

export enum CardType {
    PREVIEW,
    TEAM
}

export interface ImageProps {
    vibrating: boolean;
}

export interface PokemonCard extends Card {
    readonly pokemon?: IPokemon | undefined;
    readonly cardType: CardType
}
