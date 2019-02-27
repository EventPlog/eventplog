import React from 'react'
import Button from 'js/components/shared/button'
import styled from 'styled-components'

const StyledError = styled.div`
  margin: 2rem auto;
  padding: 2rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100%;
  
  a {
    padding: 1rem;
    margin: 0.5rem; 
    display: inline-block;
  }
`

const ErrorComponent = ({className, msg}) => {
  if (msg && msg.toLowerCase && msg.toLowerCase().includes('loading chunk')) {
    return window.location.reload()
  }
  return (
    <StyledError className={`${className} app-container`}>
      <div>
        <h1> 😌 </h1>
        <h3> Oops ... Something went wrong. </h3>
        <p>{msg.toString()}</p>
        <p>Confirm your internet connection,&nbsp;
      then <Button.Link to="#" onClick={() => window.location.reload()}>refresh</Button.Link></p>
      </div>
    </StyledError>
  )
}

export default ErrorComponent