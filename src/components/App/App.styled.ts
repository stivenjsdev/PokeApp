import styled from 'styled-components'
import { Header as SimpleHeader } from '../common/Header'
import { Sidebar as SimpleSidebar } from '../common/Sidebar'

export const App = styled.div`
    display: grid;
    grid-template-areas: 
        'header'
        'sidebar'
        'main'
    ;
    grid-template-rows: 80px auto auto;
    height: 100vh;
    /* grid-gap: 10px; */

    @media only screen and (min-width: 600px) {
        grid-template-columns: 300px auto;
        grid-template-rows: 65px auto auto;
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
export const StyledMain = styled.div`
    grid-area: main;
    background-color: transparent;
`
