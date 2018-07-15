import React from 'react'
import styled from 'styled-components'

const StyledImage =styled.div`  
  width: 100%;
  margin: 2rem 0;
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