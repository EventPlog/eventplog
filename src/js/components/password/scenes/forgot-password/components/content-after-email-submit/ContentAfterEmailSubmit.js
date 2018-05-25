import React from 'react'
import { Form, Label } from 'semantic-ui-react'
import styled from 'styled-components'

// local
import Input from '../../../../../shared/input'
import Button from '../../../../../shared/button'
import peopleDancing from '../../../../../../../img/giphys/people-dancing.gif'

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  > img {
    max-width: 500px;
  }
`

const ContentAfterEmailSubmit = ({ email, handleChange, loading, error }) => (
  <StyledContent>
    <p>
      We've received your request to reset your password. if we have an account with that email,&nbsp;
      then within the next five minutes we'll send you an email containing a link to reset your password.
    </p>
    <img src={peopleDancing} alt="people-dancing" />
  </StyledContent>
)

export default ContentAfterEmailSubmit

