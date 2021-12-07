import { IPokemon } from '../../../types/IPokemon'
import { Card } from '../../shared/Card/Card.type'

export enum CardType {
    A,
    B
}

export interface PokemonCard extends Card {
    readonly pokemon?: IPokemon | undefined;
    readonly type: CardType
}
