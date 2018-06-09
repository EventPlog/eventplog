import React, { Component } from 'react'
import styled from 'styled-components'
import defaults from 'js/styles/theme/variables'
import MainContent from './components/main-content'

const StyledLogin = styled.div`
  --fg: ${defaults.fg};
  --bg: ${defaults.bg};
  --activeLink: ${defaults.activeLink};
  
  display: flex;
  flex-direction: column;
  height: 100%;
  
  > .header {
    height: 70px;
  }
  
  .main-content {
    flex: 1;
    margin-top: 60px;
  }
  
  .footer {
    height: 200px;
    background: #eee;
  }
`

const JoinACommunity = ({ communities }) => (
  <StyledLogin>
    <MainContent {...{communities}} />
  </StyledLogin>
)

export default JoinACommunity
