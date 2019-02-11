import React from 'react'
import styled from 'styled-components'

// internal
import MainContent from './components/main-content'
import BannerPage from 'js/components/shared/banner-page'
import { media } from 'js/styles/mixins'

const Search = (props) => (
  <BannerPage title="Search">
    <MainContent {...props} />
  </BannerPage>
)

export default Search