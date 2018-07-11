import React from 'react'
import styled from 'styled-components'
import {media } from '../../../../styles/mixins'

const StyledTopic = styled.div`
  text-align: center;
  font-weight:bold;
  margin: 15px;
`

const Topic = (props) => {
  return(
    <StyledTopic className= "topic">
      <h5>{props.children}</h5>
    </StyledTopic>
  )
}

export default Topic