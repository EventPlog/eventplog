import React from 'react'
import styled from 'styled-components'
import image from '../../../../../../img/help-pages/getting-started.png'
import { Link} from 'react-router-dom'
import Topic from '../../topic'
import Description from '../../help-description'
import Sidebar from '../../help-topics'

const StyledGettingStarted =styled.div`
`

const GettingStarted = ()=>{
  return(
  <StyledGettingStarted>
      <div className="help-main-content">
      <Topic>Getting Started</Topic>
      <Description>
        Are you new on Eventplog? <br/><br/>
        If yes, you are at the right place and we are delighted to have you here. <br/><br/>
        Welcome to Eventplog!
      <br/><br/>These guides will take you on fun, quick and easy steps to using Eventplog.<br/><br/>
      <br/><br/><br/><br/>
        <img src={image} alt="Getting Started image"></img> <br/><br/>
        <br/><br/>To get started on Eventplog, you need to Signup or Login if you already have an account!
        <br/><br/>
          You can also learn how to <Link to="/help/communities/follow-a-community">follow</Link> a community that interests you or how to 
          <Link to ="/help/organizers/create-a-community"> create</Link> your own, if you need to create one.
          <br/><br/>
          If you already are a part of a community you can <Link to="/help/events/event">view details about an
          event organized by your community</Link>
          <br/><br/>
          For community owners, you might be interested in knowing how to <Link to="/help/organizers/create-an-event">create events</Link> 
          for your community or how to <Link to="/help/backstage">plan your event</Link> from inception to finish
          <br/><br/> 
      </Description>
      </div>

  </StyledGettingStarted>
  )
}

export default GettingStarted