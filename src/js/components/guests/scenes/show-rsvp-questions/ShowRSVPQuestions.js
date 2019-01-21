import React from 'react'
import styled from 'styled-components'

import ContentPanel from 'js/components/shared/content-panel'
import ShowQuestions from 'js/components/questions/components/show-questions'
import config  from 'js/config/common'
import Loading from "js/components/shared/loading";
import { media } from 'js/styles/mixins'
import { genEventLink } from 'js/utils'


const StyledCheckInForm = styled.div`
  margin: 2rem 0;
  
  .app-container {
    ${
      media.phone`
        padding: 4rem 1rem;
      `
    }
  }
  
  .content-panel {
    width: 100%;
  }
  
  .content-header {
    margin: 2rem;
    font-size: 2rem;
    text-align: center;
    
    ${
      media.phone`
        margin: 0;
        margin-bottom: 2rem;
        text-align: left;
      `
    }
  }
  
  .content-body {
    margin-left: 0;
    margin-right: 0;  
  }
  
  .ui.form {
    max-width: 400px;
    margin: auto; 
    
    .check-user {
       margin-bottom: 2rem;
    }
  }
  
  button + button {
    margin-left: 1rem;
  }
  
  .space-top {
    margin-top: 2rem;
  }
  
`


const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

const emptyUser = {
  first_name: '',
  last_name: '',
  email: '',
  gender: 'Male'
}

const ShowRSVPQuestions = ({
  user = emptyUser,
  event = {},
  allowNext,
  success,
  error,
  loading,
  history,
  handleSubmit,
}) => {
  if (loading) return <Loading />
  const eventLink = genEventLink(event)
  if (success && !event.is_stakeholder) {
    setTimeout(() => history.push(`${eventLink}`), 2000)
    return (
      <StyledCheckInForm className="">
        <div className="app-container">
          <Message
            success
            header='Success!'
            content={success}
          />
        </div>
      </StyledCheckInForm>
    )
  }

  const extEventLink = <a href={`${window.location.origin}${eventLink}?utm_source=check_in_form`}>{event.title}</a>
  const title = event.is_stakeholder
    ? <span>Register a new guest for {extEventLink}</span>
    : <span>Register for {extEventLink}</span>

  return (
    <StyledCheckInForm>
      <div className="app-container">
        <ContentPanel title={title}>
          <ShowQuestions recipient_id={event.id}
                         recipient_type="Event"
                         category="rsvp"
                         allowNext={allowNext}
                         handleSubmit={handleSubmit}
                         defaultQuestions={config.defaultRSVPQuestions} />
        </ContentPanel>
      </div>
    </StyledCheckInForm>
  )
}

export default ShowRSVPQuestions