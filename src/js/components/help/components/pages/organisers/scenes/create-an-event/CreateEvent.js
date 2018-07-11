import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../../../help-topics'
import Topic from '../../../../topic'
import Desrciption from '../../../../help-description'
import Description from '../../../../help-description';
import {Link} from 'react-router-dom'
import createeventimage from '../../../../../../../../img/help-pages/createevent.png'
import createevent from '../../../../../../../../img/help-pages/createeventstep2.png'

const StyledEventGuests=styled.div`
img{
  width:700px;
}
`
const CreateEvent = ()=>{
  return(
    <StyledEventGuests>
      <div className="app-container">
        <div ><Sidebar/></div> 

        <div className="help-main-content"> 
          <Topic>Create an Event</Topic>
          <Description>
            To create an event, you must have <Link to="/help/organizers/create-a-community">created a community! </Link>
            <br/><br/> The CreateEvent button can be found on almost all page's top navigation bar. Click on the 
            button and to find a page that asks for the name of your event.<br/><br/>
            <img src={createeventimage} alt="create an event"/><br/><br/> After creating an event, select
            "take me to my events so I can setup and publish". This takes you to a template event page that is editable.
            <br/><br/><img src={createevent} alt="Edit my event"/> After editing the template, you can publish your event. <br/>
            <br/>If you have entered some information in error, don't panic! You can <Link to=""> edit</Link> you event'sinformation.       
          </Description> 
        </div>
      </div>
    </StyledEventGuests>
  )
}

export default CreateEvent