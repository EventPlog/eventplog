import React from 'react'
import styled from 'styled-components'

// internal
import MainContent from './components/main-content'
import { media } from 'js/styles/mixins'

const StyledCommunities = styled.div`
`

const Events = (props) => (
  <div>
    <section className="app-container">
      <MainContent {...props} />
    </section>
  </div>
)

export default Events