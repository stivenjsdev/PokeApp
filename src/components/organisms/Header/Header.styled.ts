import styled from 'styled-components';

export const Header = styled.header`
    position: relative;
    display: flex;
    flex-flow: row wrap;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 0.3125em 1em;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray.middle};
    box-shadow: ${({ theme }) => theme.shadows.header};
    background-color: ${({ theme }) => theme.colors.white};;
    gap: 0.3125em 0;
`

export const Title = styled.h1`
    margin: 0;
    font-size: 1.375rem;
    font-family: ${props => props.theme.fonts.secondary};
`
