import React from 'react'
import Topic from 'js/components/help/components/topic'
import Description from 'js/components/help/components/help-description';
import {Link} from 'react-router-dom'
import gobackstage from 'img/help-pages/event.png'
import addorganisers from 'img/help-pages/addorganiser.png'
import assigntasks from 'img/help-pages/tasks.png'
import HelpPage from 'js/components/help/components/image'

const EventPlanning = () => {
  return(
        <div > 
          <Topic>Event Planning</Topic>
          <Description>
            Once you create your event, it is time to break down the event into various tasks
            that lead to milestones in planning your event.
            <br/><br/>
            Planning your event happens on the backstage. To go backstage, click on the backstage button
            visible to you on the event page. <br/><br/>
            <HelpPage src={gobackstage} alt="Go backstage"/>
            <Topic> Add Organizers</Topic> You can add organizers to an event to ease 
            the burden of working alone. To add organizers, Click on settings, then organizers. 
            Add an organizer by sending them an invitation by mail.<br/><br/>
            <HelpPage src={addorganisers} alt="Add organizer"/><br/>
            <Topic> Assign tasks</Topic>
            Assign tasks to organizers by going to all tasks on the backstage. If you created the event, you 
            can assign tasks to other organizers on this page. You can also view tasks assigned to you by clicking
            on my tasks. Keep track of deadlines and milestone from your task board.
            <br/><br/>
            <HelpPage src={assigntasks} alt="Assign tasks"/><br/>
          </Description> 
        </div>
  )
}

export default EventPlanning