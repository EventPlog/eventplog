import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown'
import { Table } from 'semantic-ui-react'
import ContentPanel from 'js/components/shared/content-panel'
import Comments from 'js/components/shared/comments'
import data from 'js/mock-api/data'

const reportDescription = `
93 people were interested in this event. 72% were male, 28% female.
    
73 of the 93 people (84%) who indicated interested checked in. 53% of the interested males, 84% of the interested females. 
    
27 people have given feedback so far (76% male, 28% female).
    
40% of your audience would love to tell their friends of your event (Net Promoter Score - 0.4).
    
0% of your audience reported getting any swags.

`

const reportNumbers = [
  {
    name: "Interests",
    value: 93,
    male: 72,
    female: 28
  },
  {
    name: "Given Feedback",
    value: 76,
    male: 53,
    female: 32
  },
  {
    name: "Avg Satisfaction",
    value: 66.67,
    male: 72,
    female: 28
  },
  {
    name: "Net Promoter Score (NPS)",
    value: 0.4,
    male: 72,
    female: 28
  },
  {
    name: "Swags",
    value: 0,
    male: 0,
    female: 0
  },
]

const StyleFeedbackReport = styled.div`
  > img {
    width: 100%;
  }
  
  .content-panel + .content-panel {
    margin-top: 4rem; 
  }
`

const FeedbackReport = ({ event = {} }) =>
  <StyleFeedbackReport>
    <ContentPanel title="The numbers">
      <Table celled unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>  </Table.HeaderCell>
            <Table.HeaderCell>Total</Table.HeaderCell>
            <Table.HeaderCell>Male (%)</Table.HeaderCell>
            <Table.HeaderCell>Female (%)</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {(reportNumbers.map(attr =>
            <Table.Row>
              <Table.Cell>{ attr.name }</Table.Cell>
              <Table.Cell>{ attr.value }</Table.Cell>
              <Table.Cell>{ attr.male }</Table.Cell>
              <Table.Cell>{ attr.female }</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </ContentPanel>

    <ContentPanel title="Describing the report">
      <ReactMarkdown source={reportDescription} />
    </ContentPanel>

    <ContentPanel title="What your guests said">
      <Comments comments={data.feedback} textField="comment" />
    </ContentPanel>

  </StyleFeedbackReport>

export default FeedbackReport;
