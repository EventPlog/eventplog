import React from 'react'
import {Link} from 'react-router-dom'
import Topic from 'js/components/help/components/topic'
import Description from 'js/components/help/components/help-description'
import eventimage from 'img/help-pages/event.png'
import HelpPage from 'js/components/help/components/image'

const Event = () => {
  return(
    <div> 
      <Topic>Event</Topic>
      <Description>
        Every information about an event can be found once you click on the event you want
        to know about.  <br/><br/>
        Information about venue, date, time, organizers and even the number of people interested in
        the event is found right on the event page. <br/><br/>
        <HelpPage src={eventimage} alt="event"/>
      </Description> 
    </div>
  )
}

export default Event