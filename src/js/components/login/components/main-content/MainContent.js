import React from 'react'
import styled from 'styled-components'
import backgroundImg from '../../../../../img/login-bg.jpg'
import colors from '../../../../../theme/colors'
import LoginForm from '../login-form'

const StyledMainContent = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
  position: relative;
  display: flex;
  
  .overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: ${colors.black};
    opacity: 0.6;
    z-index: 0
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
  
  .form-holder {
    background: ${colors.white};
    border-radius: 5px;
    box-shadow: 0 2px 4px #000;
    height: 600px;
    margin: 100px;
    width: 400px;
    z-index: 1;
  }
`

const MainContent = () => (
  <StyledMainContent className="main-content">
    <div className="overlay"></div>

    <div className="caption">
      <h1>Event Organizers meet guests.</h1>
      <small>Be part of ecosystems you love.</small>
    </div>

    <LoginForm />
  </StyledMainContent>
)

export default MainContent
