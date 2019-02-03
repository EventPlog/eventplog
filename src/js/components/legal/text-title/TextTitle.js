import React from 'react'
import styled from 'styled-components'
import {media } from '../../../styles/mixins'
const StyledTextTitle = styled.div`

.subtitle {
  margin: 2rem auto 1rem;
  
  ${
    media.phone`
      display: block;
    `
  }
}

`
const TextTitle = (props) => {
  return(
    <StyledTextTitle>
      <h4 className="subtitle">{props.children}</h4>
    </StyledTextTitle>
  )
}
export default TextTitle