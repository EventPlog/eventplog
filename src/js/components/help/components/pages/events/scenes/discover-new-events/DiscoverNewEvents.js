import React from 'react'
import {Link} from 'react-router-dom'
import Topic from 'js/components/help/components/topic'
import Description from 'js/components/help/components/help-description'

const DiscoverEvents = () => {
  return(
    <div className="help-main-content"> 
      <Topic>Discover Events</Topic>
      <Description>
        When you search for events in a field, you want to find a list of events all related to one field 
        say technology, so you can indicate interest in those that appeal to you.
        Use the search bar to look for events you may be interested in, if our event suggestions do not capture
        events you would love to be a part of.
      </Description> 
    </div>
  )
}

export default DiscoverEvents