import React from 'react'
import * as Styled from './SearchButton.styled'
import * as Types from './SearchButton.type'

export const SearchButton = ({
    bgColor,
    iconColor,
    border,
    bgColorHover,
    iconSize,
    ...properties
}: Types.SearchButton): JSX.Element => {
    return (
        <Styled.SearchButton
            bgColor={bgColor}
            textColor={iconColor}
            border={border}
            bgColorHover={bgColorHover}
            iconSize={iconSize}
            {...properties}
        >
            <i className="fa fa-search"></i>
        </Styled.SearchButton>
    )
}
