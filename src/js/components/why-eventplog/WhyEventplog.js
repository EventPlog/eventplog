import React from 'react'
import styled from 'styled-components'

const StyledWhyEventplog = styled.div`
  display: flex;
  justify-content:center;

    .why-eventplog-content {
      max-width: 700px;
      line-height: 30px;
      margin: 2rem;
    }

    .topic {
      text-align:center;
    }
`

const WhyEventplog = () => {
  return(
    <StyledWhyEventplog className="app-container">
      <div className="why-eventplog-content">
        <h5 className="topic">Why EventPlog </h5>
        <p>
          EventPlog is built by community organizers participating in more than five 
          different communities. Some have organized event while others has volunteered in 
          helping out with events or meetups planning. We know the stress and the challenges it 
          entails to plan a successful event.</p>

          <p>We have come together as a team to solve this not as competitors to other existing platforms 
          but to complement and stand out in making planning events and making them easily discoverable 
          to attendees, checking in attendees to an event, getting feedback getting reports from 
          attendees to be fun as much as possible.</p>

          <p>We are building Communities that is contributing to the Ecosystem thereby 
          bridging the knowledge gap. Start using EventPlog today to start a community or create an event.</p>
      </div>
    </StyledWhyEventplog>
  )
}

export default WhyEventplog