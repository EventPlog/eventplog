import React from 'react'
import image from 'img/help-pages/getting-started.png'
import { Link} from 'react-router-dom'
import Topic from 'js/components/help/components/topic'
import Description from 'js/components/help/components/help-description'
import HelpImage from 'js/components/help/components/image'

const GettingStarted = ()=>{
  return(
    <div>
      <Topic>Getting Started</Topic>
      <Description>
        Are you new on Eventplog? <br/>
        If yes, you are at the right place and we are delighted to have you here. 
        Welcome to Eventplog! <br/>
        These guides will take you on fun, quick and easy steps to using Eventplog.<br/>
        <img src={image} alt="Getting Started image"></img> <br/>
        To get started on Eventplog, you need to Signup or Login if you already have an account!<br/>
        You can also learn how to <Link to="/help/communities/follow-a-community">follow</Link> a community that interests you or how to 
        <Link to ="/help/organizers/create-a-community"> create</Link> your own, if you need to create one.<br/>
        If you already are a part of a community you can <Link to="/help/events/event">view details about an
        event organized by your community</Link> <br/>
        For community owners, you might be interested in knowing how to <Link to="/help/organizers/create-an-event">create events</Link> 
        for your community or how to <Link to="/help/backstage">plan your event</Link> from inception to finish<br/>
      </Description>
    </div>
  )
}

export default GettingStarted