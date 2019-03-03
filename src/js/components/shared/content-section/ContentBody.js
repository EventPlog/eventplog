import React from 'react'
import styled from 'styled-components'
import { media, maxMedia } from 'js/styles/mixins'

const StyledMainContentBody = styled.section`
  flex: 1;
  width: 100%;
  margin: 0;
  // padding: 0 2rem;

  ${
    media.tablet`
      padding: 0 2rem;
    `
  }
  
  ${
    media.phone`
      padding: 0 2rem;
    `
  }
`

const ContentBody = ({ children }) => (
  <StyledMainContentBody className="main-body">
    { children }
  </StyledMainContentBody>
)

export default ContentBody