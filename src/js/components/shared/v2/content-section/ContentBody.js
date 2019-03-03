import React from 'react'
import styled from 'styled-components'
import { media, maxMedia } from 'js/styles/mixins'

const StyledMainContentBody = styled.section`
  flex: 1;
  width: 100%;
  margin: 0;
  padding: 1rem;

  ${
    media.tablet`
      padding: 0 1.5rem;
    `
  }
  
  ${
    media.phone`
      padding: 0 1.5rem;
    `
  }
`

const ContentBody = ({ className, children }) => (
  <StyledMainContentBody className={`main-body ${className}`}>
    { children }
  </StyledMainContentBody>
)

export default ContentBody