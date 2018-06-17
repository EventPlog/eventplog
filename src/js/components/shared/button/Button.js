import React from 'react'
import styled, { css } from 'styled-components'
import colors from '../../../styles/theme/colors'
import { NavLink } from 'react-router-dom';
import { media } from 'js/styles/mixins'

const btnSizes = {
  medium: {fontSize: '1.2em'},
}
const commonStyles = css`
  border: 1px solid var(--activeLink);
  color: var(--activeLink);
  background: transparent;
  padding: 10px 30px;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  
  ${
    media.phone`
      padding: 0.8rem;
    `
  }
  &:hover {
    background: var(--activeLink);
    color: ${colors.white};
  }
`

const inverted = css`
  background: var(--activeLink);
  color: ${ colors.white} !important;
  
  &:hover {
    background: ${ colors.white };
    color: var(--activeLink) !important;
  }
`

const StyledBtn = styled.button`
  ${ commonStyles }
`

const StyledLink = styled(NavLink)`
  ${ commonStyles }
  
  &:hover {
    color: ${colors.white} !important;
  }
`;

const InvertedBtn = (Component, props) => (
  props.inverted
  ? Component.extend`
      ${ inverted }
    `
  : Component
)

const Button = function(props) {
  const Component = InvertedBtn(StyledBtn, props)
  return <Component {...props} />
}

Button.Link = function(props) {
  const Component = InvertedBtn(StyledLink, props)
  return <Component {...props} />
}


export default Button
