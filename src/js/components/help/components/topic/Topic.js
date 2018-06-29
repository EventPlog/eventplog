import React from 'react'
import styled from 'styled-components'
import {media } from '../../../../styles/mixins'

const StyledTopic =styled.div`
.topic{
  text-align: center;
  font-weight:bold;
  margin: 25px;
}
`

const Topic = (props) =>{
  return(
    <StyledTopic>
      <div className="topic">{props.children}</div>
    </StyledTopic>
  )
}

export default Topic