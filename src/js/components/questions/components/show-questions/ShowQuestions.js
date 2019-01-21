import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Form, Message } from 'semantic-ui-react'

import ContentPanel from 'js/components/shared/content-panel'
import QuestionsForm from 'js/components/questions/components/questions-form'
import Button from 'js/components/shared/button'
import Loading from "js/components/shared/loading";
import { genEventLink } from 'js/utils'


import QuestionCard from '../question-answer-card'

const ShowQuestionsStyles = styled.div`
  .app-container {
    * {
      margin-left: auto;
      margin-right: auto;
    }
  }
  .cta-holder {
    max-width: 400px;
    margin: 3rem auto;
  }
`

const ShowQuestions = ({
  loading,
  success,
  error,
  history,
  ...props,
}) => {

  if (loading) return <Loading />
  const eventLink = genEventLink(props.event)
  if (success && !props.event.is_stakeholder) {
    setTimeout(() => history.push(`${eventLink}`), 2000)
    return (
      <ShowQuestionsStyles className="">
        <div className="app-container">
          <Message
            success
            header='Success!'
            content={success}
          />
        </div>
      </ShowQuestionsStyles>
    )
  }

  return (
    <ShowQuestionsStyles>
      <Form loading={loading} success={success} error={error}>
        <Message
          success
          header='Success!'
          content={success}
        />
        <Message
          error
          header='Error!'
          content={error}
        />

        {props.event.is_stakeholder && !success &&
          <Message
            info
            header='Did you know you could upload a CSV?'
            content={<p>If you have an existing guest list,&nbsp;
                              <Link to={`${eventLink}/backstage/guests?activeIndex=1`}>
                                click here to import it instead!
                              </Link>
                           </p>}
          />
        }
        <QuestionsForm questionCard={QuestionCard} {...props} />

        <div className="cta-holder">
          <Button inverted
                  type='submit'
                  disabled={false}
                  onClick={props.handleSubmit}>
            Submit
          </Button>
          <Button onClick={() => {}}>
            Cancel
          </Button>
        </div>
      </Form>
    </ShowQuestionsStyles>
  )
}

export default ShowQuestions