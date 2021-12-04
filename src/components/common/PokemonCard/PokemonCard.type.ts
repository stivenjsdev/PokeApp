import { IPokemon } from '../../../types/IPokemon';
import { Card } from '../../shared/Card/Card.type'

export interface PokemonCard extends Card {
    readonly pokemon?: IPokemon | undefined;
}
