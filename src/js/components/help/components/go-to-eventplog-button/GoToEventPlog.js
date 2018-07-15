import React from 'react'
import Button from 'js/components/shared/button'
import Styled from 'styled-components'
import styled from 'styled-components';

const StyledGoToEventPlog = styled.div`
  display: flex;
  justify-content: flex-end;
`

const GoToEventPlog = () => {
  return(
    <StyledGoToEventPlog className="go-to-eventplog-button">
      <Button>Go To EventPlog</Button>
    </StyledGoToEventPlog>
  )
}

export default GoToEventPlog