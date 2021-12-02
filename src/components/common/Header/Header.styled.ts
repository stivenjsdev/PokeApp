import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    flex-flow: row wrap;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    min-height: 65px;
    padding: 5px 16px;
    border-bottom: 1px solid lightgray;
    box-shadow: lightgrey 0px 0px 16px 1.8px;
    background-color: white;
`

export const Title = styled.h1`
    margin: 0;
    font-size: ${props => props.theme.sizes.l + 'px'};
    font-family: ${props => props.theme.fonts.secondary};
`
