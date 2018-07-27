import React from 'react'
import {Link} from 'react-router-dom'
import Topic from 'js/components/help/components/topic'
import Description from 'js/components/help/components/help-description'

const AllEvents = () => {
  return(
    <div> 
      <Topic>My Events</Topic>
      <Description>
        <p>
          To find all events you indicated interest in, whether past or upcoming, hit the MyEvents button
          on ...
        </p>
      </Description>
    </div>
  )
}

export default AllEvents