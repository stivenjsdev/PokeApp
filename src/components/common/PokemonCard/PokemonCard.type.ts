import { IPokemon } from '../../../interfaces/IPokemon'
import { Card } from '../../shared/Card/Card.type'

export enum CardType {
    PREVIEW,
    TEAM
}

export interface PokemonCard extends Card {
    readonly pokemon?: IPokemon | undefined;
    readonly cardType: CardType
}
