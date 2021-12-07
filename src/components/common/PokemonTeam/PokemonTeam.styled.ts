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
    padding: 16px;
    gap: 10px 10px;
`

export const Title = styled.h1`
    text-align: center;
    font-weight: 200;
    font-size: ${props => props.theme.sizes.xxl + 'px'};
    margin: 10px;
`
