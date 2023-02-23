import React from 'react'
import * as Styled from './IconButton.styled'
import * as Types from './IconButton.type'

export const IconButton = ({
    icon,
    iconSize,
    ...properties
}: Types.IconButton): JSX.Element => {
    return (
        <Styled.IconButton
            icon={icon}
            iconSize={iconSize}
            {...properties}
        >
            <i className={icon}></i>
        </Styled.IconButton>
    )
}
