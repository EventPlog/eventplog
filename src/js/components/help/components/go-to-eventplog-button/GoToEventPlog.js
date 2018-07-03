import React from 'react'
import Button from '../../../shared/button'
import Styled from 'styled-components'
import styled from 'styled-components';

const StyledGoToEventPlog = styled.div`
.button{
  display: flex;
  justify-content:center;
}
`
const GoToEventPlog = ()=>{
  return(
    <StyledGoToEventPlog>
      <div className="button">
        <Button>Go To EventPlog</Button>
      </div>
    </StyledGoToEventPlog>
  )
}

export default GoToEventPlog