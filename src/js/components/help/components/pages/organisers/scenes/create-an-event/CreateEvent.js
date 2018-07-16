import React from 'react'
import Topic from '../../../../topic'
import Description from 'js/components/help/components/help-description';
import {Link} from 'react-router-dom'
import createeventimage from 'img/help-pages/createevent.png'
import createevent from 'img/help-pages/createeventstep2.png'

const CreateEvent = () => {
  return(
    <div > 
      <Topic>Create an Event</Topic>
      <Description>
        When I create an event I want to engage my comunity in meaningful offline activities so they can connect
        with members of my community with similar interests.
        To create an event, you must have <Link to="/help/organizers/create-a-community">created a community! </Link>
        <br/> The CreateEvent button can be found on almost all page's top navigation bar. Click on the 
        button and to find a page that asks for the name of your event.<br/><br/>
        <img src={createeventimage} alt="create an event"/><br/><br/> After creating an event, select
        "take me to my events so I can setup and publish". This takes you to a template event page that is editable.
        <br/><br/><img src={createevent} alt="Edit my event"/> After editing the template, you can publish your event. <br/>
        <br/>If you have entered some information in error, don't panic! You can <Link to=""> edit</Link> you event'sinformation.       
      </Description> 
    </div>
  )
}

export default CreateEvent