import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import footerLogo from 'img/logo-gray-full.png'

const StyledExternalFooter = styled.div`
  justify-content: center;
  color: ${props => props.theme.grayMedium};
  
  &.app-container.footer {
    margin: 2rem auto;
    
    > div {
      display: flex;
      align-items: flex-start;
      line-height: 1.5rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      a {
        margin-top: 1rem;
      }
    }
  }
  
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  img {
    width: 120px;
    margin: 0 1rem;
  }
`

const ExternalFooter = () => (
  <StyledExternalFooter className="app-container footer">
    <div>
      Powered by <img src={footerLogo}  alt='eventplog' />
      <Link to="/e/new">Create your own event now.</Link>
    </div>
  </StyledExternalFooter>
)

export default ExternalFooter
