import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

// internal
import MainContent from './components/main-content'
import { media } from 'js/styles/mixins'

const StyledEvents = styled.div`
  background-color: ${props => darken(0.2, props.theme.primary)};
  
  > .app-container {
    max-width: 2000px;
  }
`

const Events = (props) => (
  <StyledEvents>
    <section className="app-container">
      <MainContent {...props} />
    </section>
  </StyledEvents>
)

export default Events