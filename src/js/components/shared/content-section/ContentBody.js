import React from 'react'
import styled from 'styled-components'
import { media, maxMedia } from 'js/styles/mixins'

const StyledMainContentBody = styled.section`
  flex: 1;
  margin-right: 2rem; 
  width: 100%;
  margin: 0;
  padding: 0 2rem;
  
  ${
    media.tablet`
        margin: 0;
      `
  }
  
  ${
    media.phone`
      `
  }
`

const ContentBody = ({ children }) => (
  <StyledMainContentBody className="main-body">
    { children }
  </StyledMainContentBody>
)

export default ContentBody