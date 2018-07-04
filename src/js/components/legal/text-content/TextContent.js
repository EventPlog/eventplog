import React from 'react'
import styled from 'styled-components'
import {media } from '../../../styles/mixins'

const StyledTextContent = styled.div`
.text-content{ 
  text-align:justify;
  ${
    media.phone`
      display: block;
      font-size: 0.8rem;
    `
  }
}
`
const TextContent = (props) => {
  return(
    <StyledTextContent>
      <div className="text-content">{props.children} </div>
    </StyledTextContent>
  )
}

export default TextContent