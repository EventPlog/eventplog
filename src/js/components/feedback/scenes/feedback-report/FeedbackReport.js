import React from 'react';
import { Link } from 'react-router-dom'
import { Table, Message } from 'semantic-ui-react'
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown'

// ============ INTERNAL ===============
import ContentPanel from 'js/components/shared/content-panel'
import Comments from 'js/components/shared/comments'
import ContentEditable from 'js/components/shared/content-editable'
import Loading from 'js/components/shared/loading'
import Button from 'js/components/shared/button'
import { pluralize, genEventLink } from 'js/utils'
import LoginPrompt from 'js/components/shared/login-prompt'
import QuickFeedbackForm from 'js/components/feedback/scenes/quick-feedback-form'

const toPercentage = (num, total) => (
  total > 0
    ? Math.round(((num / total) * 100), 2)
    : 0
)

const StyleFeedbackReport = styled.div`
  > img {
    width: 100%;
  }
  
  .content-panel + .content-panel {
    margin-top: 4rem; 
  }
  
  .cta-btns {
    padding: 0 2rem 2rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`

const FeedbackReport = ({
  feedback_report = {},
  event = {},
  getFeedbackResponses,
  handleChange,
  handleSubmit,
  toggleShowReport,
  isLoggedIn,
}) => {
  const {loading, error} = feedback_report

  if (loading || !event.id) return <Loading />
  if (error) return <Loading.Error msg={error} />

  const {
    is_attending,
    is_stakeholder,
    given_feedback,
    show_feedback_url,
    start_time,
  } = event

  if (feedback_report.report == 'not due') {
    return <p>The event report will be available on or after the event day.</p>
  }

  // only show report if it's the due date
  const {
    trackable_id,
    trackable_type,
    report = [],
    highest_obtainable_pts = 10,
    feedback_responses = {},
    description,
    shown_to_guests,
  } = feedback_report || {}

  if (report && report.length < 1) return <Loading />

  const interest = report.find(item => item.key == 'interest') || {}
  const checked_in = report.find(item => item.key == 'checked_in') || {}
  const feedback = report.find(item => item.key == 'feedback') || {}
  const satisfaction = report.find(item => item.key == 'satisfaction') || {}
  const nps = report.find(item => item.key == 'nps') || {}

  const { meta = {} } = feedback_responses

  return (
    <StyleFeedbackReport>

      {is_stakeholder && !shown_to_guests &&
        <Message info>
          <Message.Header>The bulk of your report is currently private</Message.Header>
            <p>When private, only the highlights is shown to guests. The numbers, report description and feedback from attendees is hidden</p>
            <p>We've found that guests are 62.6% more likely to attend events after reading reviews from other guests</p>
        </Message>
      }

      {is_stakeholder &&
        <div className="cta-btns">
          <Button onClick={() => toggleShowReport(!shown_to_guests)}>
            {shown_to_guests ? 'Make Report Private' : 'Make Report Public'}
          </Button>
        </div>
      }

      {(description || is_stakeholder) &&
        <ContentPanel title="Highlights">
          <div className="event-description">
            <ContentEditable propName="description"
                             type="textarea"
                             canEdit={event.is_stakeholder}
                             defaultValue={description}
                             onChange={handleChange}
                             onSubmit={handleSubmit}>

              <ReactMarkdown escapeHtml={false}
                             source={description || 'The day was amazing! The facilitators were awesome. Guests were especially excited about the content.'}/>

            </ContentEditable>
          </div>
        </ContentPanel>
      }

      {is_attending && !is_stakeholder && (!given_feedback || show_feedback_url) && <QuickFeedbackForm />}
      {!is_attending && !is_stakeholder && !given_feedback &&
        <ContentPanel title="Did you attend this event">
          {<LoginPrompt msg="to add your own feedback" />}
          {isLoggedIn &&
          <p>Asked to be checked in from&nbsp;
            <Link to={`${genEventLink(event, event.community)}?activeIndex=1`}>
              the discussions panel
            </Link>
          </p>
          }
        </ContentPanel>
      }

      {(shown_to_guests || is_stakeholder) &&
        <span>
          {is_stakeholder &&
            <span>
              <ContentPanel title="The numbers">
                <Table celled unstackable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell> </Table.HeaderCell>
                      <Table.HeaderCell>Total</Table.HeaderCell>
                      <Table.HeaderCell>Male</Table.HeaderCell>
                      <Table.HeaderCell>Female</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    {(report.map(attr =>
                      <Table.Row>
                        <Table.Cell>{ attr.label }</Table.Cell>
                        <Table.Cell>{ attr.total }</Table.Cell>
                        <Table.Cell>{ attr.male }</Table.Cell>
                        <Table.Cell>{ attr.female }</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </ContentPanel>

              <ContentPanel title="Describing the report">

                <p>
                  {interest.total} {pluralize('person', interest.total)} were interested in this event.&nbsp;
                  {toPercentage(interest.male, interest.total)}% were male,&nbsp;
                  {toPercentage(interest.female, interest.total)}% were female.
                </p>

                <p>
                  {checked_in.total} of the {interest.total} {pluralize('person', checked_in.total)}&nbsp;
                  ({toPercentage(checked_in.total, interest.total)}%) who indicated interested checked in.&nbsp;
                  {toPercentage(checked_in.male, checked_in.total)}% were males,&nbsp;
                  {toPercentage(checked_in.female, checked_in.total)}% were females.&nbsp;
                </p>

                <p>
                  {feedback.total} {pluralize('person', feedback.total)} have given feedback so far&nbsp;
                  ({toPercentage(feedback.male, feedback.total)}% male,&nbsp;
                  {toPercentage(feedback.female, feedback.total)}% female).
                </p>

                <p>
                  Average guests satisfaction was {satisfaction.total * highest_obtainable_pts}%&nbsp;
                  (Guys were {satisfaction.male * highest_obtainable_pts}% satisfied,&nbsp;
                  ladies were {satisfaction.female * highest_obtainable_pts}% satisfied).
                </p>

                <p>
                  The attendees are on average {nps.total * 100}% likely to invite others to the next event.&nbsp;
                  (Guys were {nps.male * 100}% likely, ladies were {nps.female * 100}% likely).
                </p>
              </ContentPanel>
            </span>
          }
        </span>
      }

      <ContentPanel title={`What guests said (${meta.total_count} responses, Avg. rating was ${satisfaction.total}/10)`}>
        <Comments comments={feedback_responses}
                  textField="feedback_note"
                  trackable_id={trackable_id}
                  trackable_type={trackable_type}
                  getComments={getFeedbackResponses}
                  showMoreBtnTitle="Show more responses"
                  canReply={false} />
      </ContentPanel>
    </StyleFeedbackReport>
  )
}
export default FeedbackReport;
