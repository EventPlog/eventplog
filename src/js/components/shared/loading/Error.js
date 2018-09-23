import React from 'react'
import Button from 'js/components/shared/button'
import styled from 'styled-components'

const StyledError = styled.div`
  margin: 2rem auto;
  padding: 2rem;
  
  a {
    padding: 1rem;
    margin: 0.5rem; 
  }
`

const ErrorComponent = ({className, msg}) => (
  <StyledError className={`${className} app-container`}>
    <div>
      <h5> Oops ... Something went wrong. </h5>
      <p>{msg.toString()}</p>
      <p>Please confirm your internet connection,&nbsp;
      then <Button.Link to="#" onClick={() => window.location.reload()}>refresh</Button.Link> and try again.</p>
    </div>
  </StyledError>
)

export default ErrorComponent