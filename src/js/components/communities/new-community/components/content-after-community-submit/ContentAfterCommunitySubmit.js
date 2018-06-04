import React from 'react'
import { Form, Label } from 'semantic-ui-react'
import styled from 'styled-components'

// local
import peopleDancing from '../../../../../../img/giphys/people-dancing.gif'
import { media } from '../../../../../../styles/mixins'

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  > img {
    max-width: 500px;
    
    ${
      media.phone`
        width: 100%;
      `
    }
  }
`

const ContentAfterCommunitySubmit = ({ email, handleChange, loading, error }) => (
  <StyledContent>
    <p>
      You just created a community! Thank you for all you do to strengthen the ecosytem.
      To get the best out of eventplog as an community leader, consider going through the following resources:
    </p>
    <img src={peopleDancing} alt="people-dancing" />
  </StyledContent>
)

export default ContentAfterCommunitySubmit

