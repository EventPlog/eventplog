import React from 'react'
import styled from 'styled-components'
import {media } from '../../../styles/mixins'
const StyledTextTitle = styled.div`

.subtitle {
  margin: 15px auto;
  font-weight:bold;
  ${
    media.phone`
      display: block;
      font-size: 1rem;
      margin: 8px auto;
    `
  }
}

`
const TextTitle = (props) => {
  return(
    <StyledTextTitle>
      <div className="subtitle">{props.children}</div>
    </StyledTextTitle>
  )
}
export default TextTitle