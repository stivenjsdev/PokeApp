import styled from 'styled-components'

export const PokemonTeam = styled.div`
    background-color: transparent;
`

export const PokemonListContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 1em;
    gap: 0.625em 0.625em;
`

export const Title = styled.h1`
    text-align: center;
    font-weight: 200;
    font-size: 2.5625rem;
    font-family: ${props => props.theme.fonts.secondary};
    margin: 0.2439em;
`
