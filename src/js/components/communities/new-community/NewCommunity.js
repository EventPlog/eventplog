import React, { Component } from 'react'
import styled from 'styled-components'
import defaults from '../../../../styles/theme/variables'
import MainContent from './components/main-content'
import { media } from '../../../../styles/mixins'

const StyledNewCommunity = styled.div`
  --fg: ${defaults.fg};
  --bg: ${defaults.bg};
  --activeLink: ${defaults.activeLink};
  
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 200px;
  
  .main-content {
    flex: 1;
    margin-top: 60px;
    
    ${
      media.phone`
        width: 100%;
        align-items: end;
      `
    }
  }
  
`

type CommunityType = {
  community: {name: string},
  error: any,
  loading: boolean,
  emailSubmitted?: boolean,
  handleChange: () => {},
  submitEmail: () => {}
}

const ForgotPassword = (props: communityType) => (
  <StyledNewCommunity>
    <MainContent {...props } />
  </StyledNewCommunity>
)

export default ForgotPassword
