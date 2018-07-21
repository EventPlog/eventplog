import React from 'react'
import Topic from 'js/components/help/components/topic'
import Description from 'js/components/help/components/help-description';
import {Link} from 'react-router-dom'

const EventPlanning = () => {
  return(
    <div> 
      <Topic>Event Feedback and Reports</Topic>
      <Description>
        An exciting importance of eventplog is that you willl be able to get feedback from your event
        attendees to measure impact. When I generate feedback and reports, I want to put numbers to my
        event so I can know what went well, what didn't, and how to improve.
        To gather feedback from your event, click on backstage then hit the feedback
        button. <br/>You are totally in control of how you get feedback. We have a custom form which you can use
        but you can also get feedback using a custom form by entering it's URL. <br/>
        <Topic>Generate Reports</Topic>
        It is easier to generate reports if you have used our platform completely to plan your event
        from start to finish. 
        You can find reports on the feedback section of the backstage.
      </Description> 
    </div>
  )
}

export default EventPlanning