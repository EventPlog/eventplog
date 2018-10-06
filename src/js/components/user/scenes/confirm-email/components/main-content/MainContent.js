import React from 'react'
import styled from 'styled-components'
import welcomeImg from 'img/giphys/welcome.gif'
import peopleDancing from 'img/giphys/people-dancing.gif'
import Button from 'js/components/shared/button'

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
  
  .btn-continue {
    margin-bottom: 2rem;
  }
`

const headerMsg = (token, status) => {
  if (!token) {
    return 'Welcome to EventPlog!'
  }

  switch (status) {
    case 'procesing':
      return 'Hang on ...'
    case 'failed':
      return 'Uh oh!'
    default:
      return 'Yayyy! Welcome!!'
  }
}

const MainContent = ({ status, token, confirmed }) => (
  <StyledMainContent className="main-content app-container">
    <h1>{headerMsg(token, status)}</h1>
    {token &&
      [
        <p>
          {status == 'processing' && 'Confirming your email, please wait....'}
          {confirmed() && 'Your email is confirmed! Loggin you in in a sec ...'}
          {(status == 'failed') && 'Your email confirmation failed. Please request for a new one.'}
        </p>,
        <img src={welcomeImg} alt="welcome-image" />,
      ]
    }
    {!token &&
      [
        <p>
          We've sent you an email with a link to confirm your email address. &nbsp;
          Please click on that link to confirm your email.
        </p>,
        <img src={peopleDancing} alt="people-dancing" />,
        <Button.Link className="btn-continue"
                     to="/">
          Continue
        </Button.Link>
      ]
    }
  </StyledMainContent>
)

export default MainContent
