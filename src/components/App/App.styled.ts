import styled from 'styled-components'
import { Header as SimpleHeader } from '../organisms/Header'
import { Sidebar as SimpleSidebar } from '../organisms/Sidebar'
import { PokemonTeam } from '../organisms/PokemonTeam'

export const App = styled.div`
    display: grid;
    grid-template-areas: 
        'header'
        'sidebar'
        'main'
    ;
    grid-template-rows: 5rem min-content auto;
    height: 100vh;
    /* grid-gap: 10px; */

    @media only screen and (min-width: 600px) {
        grid-template-columns: 18.75rem auto;
        grid-template-rows: 4.0625rem auto auto;
        grid-template-areas: 
            'header header'
            'sidebar main'
            'sidebar main'
        ;
    }
`

export const Header = styled(SimpleHeader)`
    grid-area: header;
`
export const Sidebar = styled(SimpleSidebar)`
    grid-area: sidebar;
`
export const StyledMain = styled(PokemonTeam)`
    grid-area: main;
`
