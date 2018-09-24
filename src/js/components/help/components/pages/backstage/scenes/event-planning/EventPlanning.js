import React from 'react'
import Topic from 'js/components/help/components/topic'
import Description from 'js/components/help/components/help-description';
import {Link} from 'react-router-dom'
import HelpPage from 'js/components/help/components/image'

const EventPlanning = () => {
  return(
        <div > 
          <Topic>Event Planning</Topic>
          <Description>
            <p>
              Once you create your event, it is time to break down the event into various tasks
              that lead to milestones in planning your event.
            </p>
            <p>
              Planning your event happens on the backstage. To go backstage, click on the backstage button
              visible to you on the event page.
            </p>

            <HelpPage src="https://farm2.staticflickr.com/1921/31023008878_168b0b6758_o.png" alt="Go backstage"/>

            <Topic> Add Organizers</Topic>
            <p>
              You can add organizers to an event to ease the burden of working alone.
            </p>
            <p>
              To add organizers, Click on settings, then organizers.&nbsp;
              Add an organizer by sending them an invitation by mail.
            </p>

            <HelpPage src="https://farm2.staticflickr.com/1955/43983871165_e505a035de_o.png" alt="Add organizer"/><br/>

            <Topic> Assign tasks</Topic>

            <p>
              Assign tasks to organizers by going to all tasks on the backstage.
            </p>
            <p>
              If you created the event, you can assign tasks to other organizers on this page.
            </p>
            <p>
              You can also view tasks assigned to you by clicking on my tasks. This way you will easily keep track of deadlines and milestone from your task board.
            </p>
            <HelpPage src="https://farm2.staticflickr.com/1967/43983870245_90762f49eb_o.png" alt="Assign tasks"/><br/>
          </Description> 
        </div>
  )
}

export default EventPlanning