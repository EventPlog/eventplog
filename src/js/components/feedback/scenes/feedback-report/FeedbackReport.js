import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown'
import { Table } from 'semantic-ui-react'
import ContentPanel from 'js/components/shared/content-panel'
import Comments from 'js/components/shared/comments'
import data from 'js/mock-api/data'
import Loading from 'js/components/shared/loading'
import { pluralize } from 'js/utils'


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
`

const FeedbackReport = ({
  feedback_report = {},
  loading,
  error,
}) => {

  if (loading) return <Loading />
  if (error) return <Loading.Error msg={error} />

  const {
    report = [],
    highest_obtainable_pts = 10,
    feedback_responses = {}
  } = feedback_report || {}

  if (report && report.length < 1) return <Loading />

  const interest = report.find(item => item.key == 'interest') || {}
  const checked_in = report.find(item => item.key == 'checked_in') || {}
  const feedback = report.find(item => item.key == 'feedback') || {}
  const satisfaction = report.find(item => item.key == 'satisfaction') || {}
  const nps = report.find(item => item.key == 'nps') || {}

  return (
    <StyleFeedbackReport>
      <ContentPanel title="The numbers">
        <Table celled unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell> </Table.HeaderCell>
              <Table.HeaderCell>Total</Table.HeaderCell>
              <Table.HeaderCell>Male (%)</Table.HeaderCell>
              <Table.HeaderCell>Female (%)</Table.HeaderCell>
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
          {interest.total} {pluralize('people', interest.total)} were interested in this event.&nbsp;
          {toPercentage(interest.male, interest.total)}% were male,&nbsp;
          {toPercentage(interest.female, interest.total)}% were female.
        </p>

        <p>
          {checked_in.total} of the {interest.total} {pluralize('people', checked_in.total)}&nbsp;
          ({toPercentage(checked_in.total, interest.total)}%) who indicated interested checked in.&nbsp;
          {toPercentage(checked_in.male, checked_in.total)}% were males,&nbsp;
          {toPercentage(checked_in.female, checked_in.total)}% were females.&nbsp;
        </p>

        <p>
          {feedback.total} {pluralize('people', feedback.total)} have given feedback so far&nbsp;
          ({toPercentage(feedback.male, feedback.total)}% male,&nbsp;
          {toPercentage(feedback.female, feedback.total)}% female).
        </p>

        <p>
          Guests were {satisfaction.total * highest_obtainable_pts}% satisfied with this event.&nbsp;
          (Guys were {satisfaction.male * highest_obtainable_pts}% satisfied,&nbsp;
          ladies were {satisfaction.female * highest_obtainable_pts}% satisfied).
        </p>

        <p>
          Your audience are on average {nps.total * 100}% likely to invite their friends of your next event.&nbsp;
          (Guys are {nps.male * 100}% likely, ladies are {nps.female * 100}% likely).
        </p>
      </ContentPanel>

      <ContentPanel title="What your guests said">
        <Comments comments={feedback_responses} textField="feedback_note" canReply={false} />
      </ContentPanel>

    </StyleFeedbackReport>
  )
}
export default FeedbackReport;
