import React from 'react'
import styled, { css } from 'styled-components'
import colors from '../../../styles/theme/colors'
import { NavLink } from 'react-router-dom';
import { media } from 'js/styles/mixins'

const btnSizes = {
  medium: {fontSize: '1.2em'},
}
const commonStyles = css`
  --activeLink: ${props => props.theme.activeLink};
  border: 1px solid var(--activeLink);
  color: var(--activeLink);
  background: transparent;
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
  color: ${ colors.white};
  border-color: ${ colors.white };
  
  &:link, &:visited {
    background: var(--activeLink);
    color: ${ colors.white};
    border-color: ${ colors.white };
  }
  
  &:hover, &:link:hover, &:visited:hover {
    background: ${ colors.white };
    border-color: var(--activeLink);
    color: var(--activeLink);
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
      
      &:hover, &:link:hover, &:visited:hover {
        color: ${colors.white};
      }
    `
  )
}

const InvertedBtn = (Component, props) => (
  props.inverted
  ? styled(Component)`
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
