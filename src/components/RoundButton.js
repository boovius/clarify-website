import React from 'react';
import styled, { css } from 'styled-components'
import { darken } from 'polished'

const RoundButton = styled.button`
  border-radius: 30px;
  padding: 15px;
  font-size: 15px;
  background-color: transparent;
  cursor: pointer;

  ${ props => css`
    border-color: ${props.secondaryColor};
    color: ${props.secondaryColor};

    &:hover {
      background-color: ${darken(0.05, props.primaryColor)};
    }
  `}

  ${ props => props.disabled && css`
    opacity: .65;
    pointer-events: none;
  `}
`

export default RoundButton
