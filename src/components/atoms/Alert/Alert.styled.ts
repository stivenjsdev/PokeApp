import styled, { keyframes } from "styled-components";
import * as Types from './Alert.type'

const appear = keyframes`
    0%{
        opacity: 0;
    }
    100% {
        opacity: 0.88;
    }
`

export const Alert = styled.div<Types.AlertProps>`
  position: fixed;
  bottom: 5px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 0.3125rem;
  background-color: lightblue;
  opacity: 0.88;
  border-radius: ${props => props.theme.borderRadius.normal};
  width: 100%;
  background-color: ${props => {
    switch (props.type) {
      case Types.AlertType.SUCCESS:
        return props.theme.colors.alert.success
      case Types.AlertType.WARNING:
        return props.theme.colors.alert.warning
      case Types.AlertType.ERROR:
        return props.theme.colors.alert.error
    }
  }};

  animation-name: ${appear};
  animation-duration: 700ms;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
`

export const Text = styled.p`
  margin: 0;
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: 200;
  font-size: ${props => props.theme.sizes.l}px;
  color: ${props => props.theme.colors.white};
`
