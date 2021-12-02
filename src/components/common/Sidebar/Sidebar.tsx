import React from 'react'
import * as Styled from './Sidebar.styled'
import * as Types from './Sidebar.type'

export const Sidebar = ({children, ...properties}: Types.Sidebar) => {
    return (
        <Styled.Sidebar {...properties}>
            { children }
        </Styled.Sidebar>
    )
}
