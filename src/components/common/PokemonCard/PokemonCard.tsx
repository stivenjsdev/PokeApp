import React from 'react'
import * as Styled from './PokemonCard.styled'
import * as Types from './PokemonCard.type'
import { usePokemonContext } from '../../../Context'
import { Icon, IconColor, IconSize } from '../../shared/IconButton/IconButton.type'

export const PokemonCard = ({
    pokemon,
    cardType,
    ...properties
}: Types.PokemonCard) => {
    const { catchPokemon, deletePokemon } = usePokemonContext()
    return (
        <Styled.Card cardType={cardType} {...properties}>
            {
                pokemon
                    ? <>
                        <Styled.Image
                            src={pokemon.image}
                            alt="pokemon image"
                        />
                        <Styled.Title>{pokemon.name}</Styled.Title>
                        <Styled.Stats>
                            <Styled.StatElement>
                                hp: {pokemon.hp}
                            </Styled.StatElement>
                            <Styled.StatElement>
                                attack: {pokemon.attack}
                            </Styled.StatElement>
                            <Styled.StatElement>
                                defense: {pokemon.defense}
                            </Styled.StatElement>
                            <Styled.StatElement>
                                speed: {pokemon.speed}
                            </Styled.StatElement>
                        </Styled.Stats>
                        <Styled.PokemonTypes>{pokemon.types}</Styled.PokemonTypes>
                        {cardType === Types.CardType.PREVIEW && 
                            <Styled.AddButton
                                icon={Icon.PLUS}
                                iconSize={IconSize.NORMAL}
                                iconColor={IconColor.WHITE}
                                onClick={() => catchPokemon(pokemon)}
                            />
                        }
                        {cardType === Types.CardType.TEAM &&
                            <Styled.DeleteButton
                                icon={Icon.TRASH}
                                iconSize={IconSize.NORMAL}
                                iconColor={IconColor.WHITE}
                                onClick={() => deletePokemon(pokemon.id) }
                            />
                        }
                    </>
                    : <Styled.NotFoundText>not found</Styled.NotFoundText>

            }

        </Styled.Card>
    )
}
