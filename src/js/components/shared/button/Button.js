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
  display: inline-block;
  padding: 10px 30px;
  border-radius: 5px;
  text-transform: uppercase;
  text-align: center;
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
    cursor: pointer;
  }
`

const inverted = css`
  background: var(--activeLink);
  color: ${ colors.white} !important;
  border-color: ${ colors.white };
  
  &:hover {
    background: ${ colors.white };
    border-color: var(--activeLink);
    color: var(--activeLink) !important;
  }
`

const StyledBtn = styled.button`
  ${ commonStyles }
`

const StyledLink = (isAnchorTag) => {
  const El = isAnchorTag ? styled.a`` : NavLink
  return (
    styled(El)`
      ${ commonStyles }
      
      &:hover {
        color: ${colors.white} !important;
      }
    `
  )
}

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

Button.Link = function({isAnchorTag, ...props}) {
  const Component = InvertedBtn(StyledLink(isAnchorTag), props)
  return <Component {...props} />
}


export default Button
