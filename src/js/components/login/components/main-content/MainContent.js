import React from 'react'
import styled from 'styled-components'
import backgroundImg from '../../../../../img/login-bg.jpg'
import colors from '../../../../../theme/colors'
import LoginForm from '../login-form'
import SignupForm from '../signup-form'
import { Message } from 'semantic-ui-react'

const StyledMainContent = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
  position: relative;
  
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
  
  > .app-container {
    display: flex;
    z-index: 1
    
    > .message {
      flex: 1;
      margin: 20px 0 0;
    }
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
      color: #ffffff;
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
    height: auto;
    margin: 100px;
    margin-right: 0;
    width: 100%;
    z-index: 1;
  }
`

const loadLoginComponentByPath = ({currentPath, ...otherProps}) => (
  currentPath == '/login'
    ? <LoginForm {...otherProps} />
    : <SignupForm {...otherProps} />
)

class ShowFlashMsg extends React.Component {
  state = { visible: true }

  handleDismiss = () => {
    this.setState({ visible: false })

  }
  render() {
    const {flashMsg} = this.props
    if (!flashMsg || !this.state.visible) return null
    return (
      <div className="app-container">
        <Message
          floating
          success
          content={flashMsg}
          onDismiss={this.handleDismiss}
        />
      </div>
    )
  }
}

const MainContent = ({flashMsg = null, ...otherProps }) => (
  <StyledMainContent className="main-content">
    <div className="overlay"></div>
    <ShowFlashMsg flashMsg={flashMsg} />

    <div className="app-container row">
      <div className="caption col-s-12 col-xs-12 col-m-5 col-l-5">
        <h1>Event Organizers meet guests.</h1>
        <small>Be part of ecosystems you love.</small>
      </div>

      {loadLoginComponentByPath(otherProps)}
    </div>
  </StyledMainContent>
)

export default MainContent
