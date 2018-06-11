import React from 'react'
import styled from 'styled-components'
import { media } from 'js/styles/mixins'

const StyledMainContentBody = styled.section`
  flex: 1;
  margin-right: 2rem; 
  
  ${
    media.phone`
        margin: 0 2rem;
      `
  }
`

const ContentBody = ({ children }) => (
  <StyledMainContentBody className="main-body">
    { children }
  </StyledMainContentBody>
)

export default ContentBody