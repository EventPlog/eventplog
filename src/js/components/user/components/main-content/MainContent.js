import React from 'react'
import styled from 'styled-components'
import colors from '../../../../../theme/colors'
import welcomeImg from '../../../../../img/giphys/people-dancing.gif'

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  > h1 {
    font-size: 3rem;
    font-weight: 300;
    font-family: "Andale Mono", AndaleMono, monospace;
  }
  
  > p {
    margin: 20px 0 50px;
  }
  
  > img {
    width: 500px;
    margin: 10px 0 100px;
  }
`

const MainContent = ({ status, token, confirmed }) => (
  <StyledMainContent className="main-content app-container">
    <h1>One Step left!</h1>
    {token &&
      [
        <p>
          {status == 'processing' && 'Confirming your email, please wait....'}
          {confirmed() && 'Your email is confirmed! Redirecting you back to login page ...'}
          {(status == 'failed') && 'You email confirmation failed. Please request for a new one.'}
        </p>,
        <img src={welcomeImg} alt="welcome-image" />,
      ]
    }
    {!token &&
      [
        <p className="confirmation-text">
          We've sent you an email with a link to confirm your email address. &nbsp;
          Please click on that link to get started.
        </p>,
        <img src={welcomeImg} alt="welcome-image" />,
      ]
    }
  </StyledMainContent>
)

export default MainContent
