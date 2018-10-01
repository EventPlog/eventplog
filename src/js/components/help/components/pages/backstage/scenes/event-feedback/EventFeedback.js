import React from 'react'
import Topic from 'js/components/help/components/topic'
import Description from 'js/components/help/components/help-description';
import {Link} from 'react-router-dom'

// feedback image => https://www.flickr.com/photos/137068579@N06/43084420690/in/dateposted-public/
const EventPlanning = () => {
  return(
    <div> 
      <Topic>Event Feedback and Reports</Topic>
      <Description>
        <p>
          An exciting importance of eventplog is that you willl be able to get feedback from your event
          attendees to measure impact. To gather feedback from your event, click on backstage then hit the feedback
          button.
        </p>
        <p>
          You are totally in control of how you get feedback. We have a custom form which you can use
          but you can also get feedback using a custom form by entering it's URL.
        </p>

      <Topic>Generate Reports</Topic>

      <p>
        It is easier to generate reports if you have used our platform completely to plan your event
        from start to finish.
      </p>
      <p>
        You can find reports on the feedback section of the backstage.
      </p>
      </Description> 
    </div>
  )
}

export default EventPlanning