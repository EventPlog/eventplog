import React from 'react'
import styled from 'styled-components'

const StyledEvent = styled.div`
  flex: 1;
  height: 30vh;
  margin-top: 100px
`

const Event = () => {
  return (
    <StyledEvent>
      <h4>Event Page</h4>
    </StyledEvent>
  )
}

export default Event;