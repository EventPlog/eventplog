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
          To find all events you indicated interest in, within the past week or upcoming, click on the `My Events` link on the navbar.
        </p>
      </Description>
    </div>
  )
}

export default AllEvents