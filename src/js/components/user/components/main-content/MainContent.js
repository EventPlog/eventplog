import React from 'react'
import styled from 'styled-components'
import backgroundImg from '../../../../../img/login-bg.jpg'
import colors from '../../../../../theme/colors'
import LoginForm from '../../../login/components/login-form'
import SignupForm from '../../../login/components/signup-form'

const StyledMainContent = styled.div`
  > .app-container {
    display: flex;
    z-index: 1;
    padding-top: 150px
  }
  
  .caption {
    flex: 1;
    display: flex;
    justify-content: center;
    color: #fff;
    margin: 50px;
    z-index: 1;
    flex-direction: column;
    text-align: left;
    text-shadow: 0 2px 4px ${colors.black};
    
    h1 {
      font-size: 4rem;
      font-weight: 300;
      font-family: "Andale Mono", AndaleMono, monospace;
    }

    
    
    small {
      font-size: 1.7rem;
      font-weight: 600;
      margin-top: 10px;
    }
  }
  h3{
        text-align: center;
        font-weight: bold;
        text-transform: uppercase
    }
    .maincontent-div{
      height: 450px;
      padding-top: 150px
    }
  .to-get-started-message{
      text-align:center
  }
  .form-holder {
    background: ${colors.white};
    border-radius: 5px;
    box-shadow: 0 2px 4px #000;
    height: auto;
    margin: 100px;
    margin-right: 0;
    width: 400px;
    z-index: 1;
  }
`

const loadLoginComponentByPath = (path) => (
  path == '/login'
    ? <LoginForm/>
    : <SignupForm />
)
const MainContent = ({ status, token, confirmed }) => (
  <StyledMainContent className="app-container">
    <div className="maincontent-div">
    <h3 id="confirm-mail">Confirm your email!</h3>
    {token && <div>
      {status == 'processing' && 'Confirming your email, please wait....'}
      {confirmed() && 'Your email is confirmed! Redirecting you back to login page ...'}
      {(status == 'failed') && 'You email confirmation failed. Please try again'}
    </div>}
    {!token &&
    <div className="to-get-started-message">
      We have sent you a mail with a link to confirm your email address. &nbsp;
      Please check your emal to get started.
    </div>
    }
    </div>
  </StyledMainContent>
)

export default MainContent
