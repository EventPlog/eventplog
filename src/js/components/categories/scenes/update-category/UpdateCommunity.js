import React, { Component } from 'react'
import styled from 'styled-components'
import defaults from 'js/styles/theme/variables'
import MainContent from './components/main-content'
import { media, maxMedia } from 'js/styles/mixins'

const StyledUpdateCommunity = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 200px;
  
  .main-content {
    width: 100%;
    max-width: 600px;
    margin: 60px auto;
   
    ${
      media.phone`
        width: 100%;
        align-items: end;
        padding: 1rem 2rem;
      `
    }
  }
  
  ul {
    margin: 0
  }
`

type CommunityType = {
  community: {name: string},
  error: any,
  loading: boolean,
  success: string,
  emailSubmitted?: boolean,
  handleChange: () => {},
  submitEmail: () => {},
  slug_check: {valid: boolean, loading: boolean, error: boolean},
  checkForValidSlug: () => {},
}

const UpdateCommunity = (props: communityType) => (
  <StyledUpdateCommunity className="app-container">
    <MainContent {...props } />
  </StyledUpdateCommunity>
)

export default UpdateCommunity
