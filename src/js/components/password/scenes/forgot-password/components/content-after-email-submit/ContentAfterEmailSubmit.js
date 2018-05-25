import React from 'react'
import { Form, Label } from 'semantic-ui-react'
import styled from 'styled-components'

// local
import Input from '../../../../../shared/input'
import Button from '../../../../../shared/button'
import peopleDancing from '../../../../../../../img/giphys/people-dancing.gif'

const StyledContent = styled.div`
  .ui.form {
    margin: 60px;
    
    .email-holder {
      flex: 1;
      
      input[type='email'] {
        width: 100%;
      }
    }
  }
  
`

const ContentAfterEmailSubmit = ({ email, handleChange, loading, error }) => (
  <StyledContent>
    <p>
      Check your email. if we have an account with that email, &nbsp;
      then within the next five minutes we'll send you a link to reset your password.
    </p>
    <img src={peopleDancing} alt="people-dancing" />
  </StyledContent>
)

export default ContentAfterEmailSubmit

