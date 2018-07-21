import React from 'react'
import Topic from 'js/components/help/components/topic'
import Description from 'js/components/help/components/help-description';
import {Link} from 'react-router-dom'

const MyCommunities = () => {
  return(
    <div> 
      <Topic>My Communities and Events</Topic>
      <Description>
        As an organizer, when I view my communities, I want to see all communities oe events I manage or have created
        so I can access all of them from a common place.  You can find all events you have created and communities you manage
        by ...
        <br/>   
      </Description> 
    </div>
  )
}

export default MyCommunities