import React from 'react'
import styled from 'styled-components'
import Topic from 'js/components/help/components/topic'
import Description from 'js/components/help/components/help-description'

const StyledWhyEventplog = styled.div`
  display: flex;
  justify-content:center;
`

const WhyEventplog = () => {
  return(
    <StyledWhyEventplog className="app-container">
      <div className="why-eventplog-content">
        <Topic className="topic">
          Why EventPlog 
        </Topic>
        <Description>
          EventPlog is built by community organizers participating in more than five 
          different communities. Some have organized event while others has volunteered in 
          helping out with events or meetups planning. We know the stress and the challenges it 
          entails to plan a successful event.</Description>

          <Description>We have come together as a team to solve this not as competitors to other existing platforms 
          but to complement and stand out in making planning events and making them easily discoverable 
          to attendees, checking in attendees to an event, getting feedback getting reports from 
          attendees to be fun as much as possible.</Description>

          <Description>We are building Communities that is contributing to the Ecosystem thereby 
          bridging the knowledge gap. Start using EventPlog today to start a community or create an event.</Description>
      </div>
    </StyledWhyEventplog>
  )
}

export default WhyEventplog