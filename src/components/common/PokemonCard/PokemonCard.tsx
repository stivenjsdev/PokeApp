import React from 'react'
import * as Styled from './PokemonCard.styled'
import * as Types from './PokemonCard.type'
import { usePokemonContext } from '../../../Context'

export const PokemonCard = ({
    pokemon,
    type,
    ...properties
}: Types.PokemonCard) => {
    const { catchPokemon, deletePokemon } = usePokemonContext()
    return (
        <Styled.Card 
            bgColor={type === Types.CardType.A ? '#F5F8FA' : 'white'} 
            {...properties}
        >
            {
                pokemon
                    ? <>
                        <Styled.Image
                            src={pokemon.image}
                            alt="pokemon image"
                        />
                        <Styled.Title>{pokemon.name}</Styled.Title>
                        <Styled.Types>{pokemon.types}</Styled.Types>
                        {type === Types.CardType.A && 
                            <Styled.AddButton 
                                onClick={() => catchPokemon(pokemon)}
                            >
                                <i className="fa fa-plus"></i>
                            </Styled.AddButton>
                        }
                        {type === Types.CardType.B &&
                            <Styled.DeleteButton
                                onClick={() => deletePokemon(pokemon.id) }
                            >
                                <i className="fa fa-trash"></i>
                            </Styled.DeleteButton>
                        }
                    </>
                    : <Styled.NotFoundText>not found</Styled.NotFoundText>

            }

        </Styled.Card>
    )
}
