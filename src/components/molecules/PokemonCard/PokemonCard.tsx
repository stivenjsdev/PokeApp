import React from 'react'
import * as Styled from './PokemonCard.styled'
import * as Types from './PokemonCard.type'
import { usePokemonContext } from '../../../Context'
import { Icon, IconColor, IconSize } from '../../atoms/IconButton/IconButton.type'
import { ButtonType } from '../../atoms/Button/Button.type'
import { useAnimation } from '../../../hooks/useAnimation'

export const PokemonCard = ({
    pokemon,
    cardType,
    ...properties
}: Types.PokemonCard) => {
    const { deletePokemon, pokemonFight, pokeTeam } = usePokemonContext()
    const {
        vibrating,
        setVibrating
    } = useAnimation()

    const handleClick = (pokemonId: number) => {
        setVibrating(true)
        setTimeout(() => {
            pokemonFight(pokemonId)
            setVibrating(false)
        }, 700);
    }

    return (
        <Styled.Card cardType={cardType} {...properties}>
            {
                pokemon
                    ? <>
                        <Styled.Image
                            vibrating={vibrating}
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
                        {cardType === Types.CardType.TEAM && pokeTeam.length > 1 &&
                            <Styled.DeleteButton
                                icon={Icon.TRASH}
                                iconSize={IconSize.NORMAL}
                                iconColor={IconColor.WHITE}
                                onClick={() => deletePokemon(pokemon.id)}
                            />
                        }
                        {cardType === Types.CardType.TEAM &&
                            <Styled.AttackButton
                                buttonType={ButtonType.TRANSPARENT}
                                onClick={() => handleClick(pokemon.id)}
                            >
                                attack
                            </Styled.AttackButton>
                        }
                    </>
                    : <Styled.NotFoundText>not found</Styled.NotFoundText>

            }

        </Styled.Card>
    )
}
