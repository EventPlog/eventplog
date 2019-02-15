// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import defaults from 'js/styles/theme/variables'
import MainContent from './components/main-content'
import { media } from 'js/styles/mixins'

const StyledNewCategory = styled.div`
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
        padding: 1rem 2rem;
      `
    }
  }
  
  ul {
    margin: 0
  }
`

type CategoryType = {
  category: {name: string},
  error: any,
  loading: boolean,
  emailSubmitted?: boolean,
  handleChange: () => {},
  submitEmail: () => {}
}

const NewCategory = (props: communityType) => (
  <StyledNewCategory>
    <MainContent {...props } />
  </StyledNewCategory>
)

export default NewCategory
