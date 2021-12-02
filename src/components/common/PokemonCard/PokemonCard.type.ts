import { Card } from '../../shared/Card/Card.type'

export interface PokemonCard extends Card {
    readonly image?: string;
    readonly name?: string;
    readonly types?: string;
}
