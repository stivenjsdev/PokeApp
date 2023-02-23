import styled from 'styled-components'

export const SearchForm = styled.form`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    column-gap: 6px;
    padding: 4px 12px 4px 6px;
    background-color: transparent;
    border-radius: 25px;
    border: 1px solid #dfe1e5;

    &:hover {
        box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
        border-color: rgba(223, 225, 229, 0);
    }
`
