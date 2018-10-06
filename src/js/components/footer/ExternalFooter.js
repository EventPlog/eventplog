import React from 'react'
import styled from 'styled-components'

import footerLogo from 'img/logo-gray-full.png'

const StyledExternalFooter = styled.div`
  justify-content: center;
  color: ${props => props.theme.grayMedium};
  
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
  <StyledExternalFooter className="app-container">
    <div>
      Powered by <img src={footerLogo}  alt='eventplog' />
    </div>
  </StyledExternalFooter>
)

export default ExternalFooter
