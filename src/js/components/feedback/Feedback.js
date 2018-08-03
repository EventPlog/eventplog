import React from 'react';
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components';

// internal components
import Tab from '../shared/tab';
import Settings from './scenes/feedback-settings/';
import Report from './scenes/feedback-report'
import FeedbackForm from './scenes/quick-feedback-form'

const StyledGuests = styled.div`
  .content-header {
    margin-top: 2rem;
  }
`
const Guests = (props) => {
  const panes = [
    {name: 'New Feedback', content: FeedbackForm},
    {name: 'Report', content: Report},
    {name: 'Settings', content: Settings},
  ];

  return (
    <StyledGuests>
      <Tab panes={panes}/>
    </StyledGuests>
  )
}

const GuestRoute = (props) => {
  return (
    <Switch>
      <Route path="/communities/:community_id/events/:event_id/backstage/feedback"
             render={() => <Guests {...props}/>} />
    </Switch>
  )
}
export default Guests;
