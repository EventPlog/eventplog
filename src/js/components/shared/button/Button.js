import React from 'react'
import styled from 'styled-components'
import colors from '../../../../theme/colors'


const StyledBtn = styled.button`
  border: 1px solid var(--activeLink);
  color: var(--activeLink);
  background: transparent;
  padding: 10px 30px;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  
  &:hover {
    background: var(--activeLink);
    color: ${colors.white};
  }
`

const Button = (props) => (
  <StyledBtn {...props} />
)

export default Button
