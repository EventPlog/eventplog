import React from 'react'
import styled from 'styled-components'

// internal
import MainContent from './components/main-content'
import { media } from 'js/styles/mixins'
import Loading from 'js/components/shared/loading'

const StyledCommunities = styled.div`
  section.app-container {
    
    ${
      media.phone`
        margin-bottom: 0;
      `
    } 
  }
`

const Communities = (props) => {
  if (props.loading) {
    return <Loading />
  }
  return (
    <StyledCommunities>
      <section className="app-container">
        <MainContent {...props} />
      </section>
    </StyledCommunities>
  )
}

export default Communities