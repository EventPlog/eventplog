import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// internal
import Button from 'js/components/shared/button'
import { media } from 'js/styles/mixins'
import { resizeImage } from 'js/utils'

const StyledMainContentCard = styled.div`
  
   
`

const MainContentCard = ({
  title,
  description,
  featured_image,
  showButton = true,
  hideImage,
  btn = {},
  meta,
  titleLink,
  className,
}) => (
  <StyledMainContentCard className={`community-card ${className}`}>
    <p>Hello..</p>
  </StyledMainContentCard>
)

export default MainContentCard