import React from 'react'
import styled from 'styled-components'

const StyledAboutUs = styled.div`
  display: flex;
  justify-content:center;

    .about-us-content {
      max-width: 700px;
      margin: 20px;
      padding:10px;
    }

    .topic {
      text-align:center;
    }
`

const AboutUs = () => {
  return(
    <StyledAboutUs className="app-container">
      <div className="about-us-content">
        <h5 className="topic">About EventPlog </h5>
        <p>EventPlog is an event application that helps Organizers to plan effective, engaging, 
        memorable and accountable meetups, while making it easier for events and meetups to be 
        discoverable to attendees. It is a platform where individual get to find events, show interest, 
        attend the event and give feedback on the event. EventPlog can be summary in four steps Discovery, 
        Planning, Check in and Feedback.</p>
        <h5>Discovery</h5>
        <p>With EventPlog Organizers create an event that is discoverable to interested Attendees when 
        they follow a particular community, indicate interest on topics related to the event.</p>
        <h5>Planning</h5>
        <p>After creating an event Organizers can create a To-do list either modifying a template or 
        start a fresh. Each task is assigned to Co-Organizer or Volunteer and has a completion date 
        with notifications and reminders. There is a change in time or venue? There is no need to worry, 
        with our announcement feature, all interested at an event get automatic updates.</p>
        <h5>Check-in</h5>
        <p>For Organizers, Messenger Code can be generated. With the generated code, Attendees can 
        easily Check in to the event by using their Messenger App to scan the event code without the need 
        for long queues. For Attendees that do not have Messenger App, they have the option to be checked 
        in offline by the Organizer. For registration collected outside of EventPlog, Organizers can upload 
        spreadsheet.</p>
        <h5>Feedback</h5>
        <p>With EventPlog Attendees can give feedback through the mean by which check-in either through 
        the Messenger Chatbot or online. This makes collecting feedback easy. Organizers can then generate report to see how well the event went as planned.

        With EventPlog it is now easy for newbies to start a community, host events, and create report.</p>
      </div>
    </StyledAboutUs>
  )
}

export default AboutUs