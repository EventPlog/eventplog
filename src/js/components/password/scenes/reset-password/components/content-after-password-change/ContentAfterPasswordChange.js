import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// local
import Input from '../../../../../shared/input'
import Button from '../../../../../shared/button'
import peopleDancing from '../../../../../../../img/giphys/congratulations.gif'
import { media } from '../../../../../../../styles/mixins'

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  > img {
    max-width: 500px;
    margin: 50px;
    
    
    ${
      media.phone`
        width: 100%;
      `
    }
  }
`

const ContentAfterEmailSubmit = ({ email, handleChange, loading, error }) => (
  <StyledContent>
    <p>
      You've changed your password!&nbsp;
    </p>
    <img src={peopleDancing} alt="people-dancing" />
    <p>
      Click <Link to="/logout">here</Link> if you want to log out and log back in with your new password.
    </p>
  </StyledContent>
)

export default ContentAfterEmailSubmit

