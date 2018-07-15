import React from 'react'
import styled from 'styled-components'

const StyledImage =styled.div`  
  .help-page-image {
    width: 100%;
  }
`

const HelpImage = ({
  src,
  alt,
  className
})=>{
  return(
    <StyledImage className={`${className} help-page-image`}>
      <img src={src} alt={alt} />
    </StyledImage>
  )
}

export default HelpImage