import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../../../help-topics'
import Topic from '../../../../topic'
import Desrciption from '../../../../help-description'
import Description from '../../../../help-description';
import {Link} from 'react-router-dom'
import gobackstage from '../../../../../../../../img/help-pages/event.png'
import addorganisers from '../../../../../../../../img/help-pages/addorganiser.png'
import assigntasks from '../../../../../../../../img/help-pages/tasks.png'

const StyledEventGuests=styled.div`
.help-description-container{
  display:flex;
  margin 5px;
  padding: 5px;
}

img{
width:700px;
height: 500px;
}

.help-main-content{
  font-size: 15px;
  margin-left:80px;
  max-width: 650px;
}
`
const EventPlanning = ()=>{
  return(
    <StyledEventGuests>
      <div className="help-description-container">
        <div ><Sidebar/></div> 
        <div className="help-main-content"> 
          <Topic>Event Planning</Topic>
          <Description>
            Once you create your event, it is time to break down the event into various tasks
            that lead to milestones in planning your event.
            <br/><br/>
            Planning your event happens on the backstage. To go backstage, click on the backstage button
            visible to you on the event page. <br/><br/>
            <img src={gobackstage} alt="Go backstage"/>
            <Topic> Add Organizers</Topic> You can add organizers to an event to ease 
            the burden of working alone. To add organizers, Click on settings, then organizers. 
            Add an organizer by sending them an invitation by mail.<br/><br/>
            <img src={addorganisers} alt="Add organizer"/><br/>
            <Topic> Assign tasks</Topic>
            Assign tasks to organizers by going to all tasks on the backstage. If you created the event, you 
            can assign tasks to other organizers on this page. You can also view tasks assigned to you by clicking
            on my tasks. Keep track of deadlines and milestone from your task board.
            <br/><br/>
            <img src={assigntasks} alt="Assign tasks"/><br/>
          </Description> 
        </div>
      </div>
    </StyledEventGuests>
  )
}

export default EventPlanning