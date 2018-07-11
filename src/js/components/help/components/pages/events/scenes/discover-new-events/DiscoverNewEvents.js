import React from 'react'
import {Link} from 'react-router-dom'
import Topic from 'js/components/help/components/topic'
import Description from 'js/components/help/components/help-description'

const DiscoverEvents = () => {
  return(
    <div className="help-main-content"> 
      <Topic>Discover Events</Topic>
      <Description>
        Use the search bar to look for events you may be interested in, if our event suggestions do not capture
        events you would love to be a part of.
        <br/><br/> Announcements can be found on all <Link to="">Event</Link>
        and <Link to="">Community</Link> pages. <br/><br/> 
      </Description> 
    </div>
  )
}

export default DiscoverEvents