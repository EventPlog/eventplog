import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import colors from '../../../../styles/theme/colors';

const StyledHelpPage =styled.div`
.topics-section{
  background: #eee;
  width:300px;
  margin:5px;
  padding:5px;
  border-radius: 3%;
}
li{
  line-height: 30px;
}
hr{
  color:pink;
}

`
const TopicsSection =()=>{
  return(
    <StyledHelpPage>
  <div className="topics-section">
    <Link to="/help/getting-started">Getting Started</Link><br/><hr/>
    <Link to="/help/communities">Communities</Link>
    <ul>
      <li><Link to="/help/communities/follow-a-community">Follow your favorite communities</Link></li>
      {/* {<li><Link to="/help/communities/discover-new-communities">Discover New Communities</Link></li>} */}
      <li><Link to="/help/communities/communities-i-follow">Communities I Follow</Link></li>
      <li><Link to="/help/communities/community-suggestions">Community suggestions</Link></li>
      <li><Link to="/help/communities/announcements">Announcements</Link></li>
      <li><Link to="/help/communities/connect-with-organizers">Find and connect with organisers</Link></li>
    </ul>
    <hr/>
    <Link to="/help/events/">Events</Link>
    <ul>
      {/* {<li><Link to="/help/events/upcoming-events">Upcoming events</Link></li>} */}
      <li><Link to="/help/events/event-suggestions">Event Suggestions</Link></li>
      {/* {<li><Link to="/help/events/discover-new-events">Discover new events</Link></li>} */}
      <li><Link to="/help/events/upcoming-and-past-events">My events</Link></li>
      <li><Link to="/help/organizers/create-an-event">Create an Event</Link></li>
      <li><Link to="/help/events/event">About an event</Link></li>
    </ul>
    <hr/>
    <Link to="/help/organizers">Organizers</Link>
    <ul>
      <li><Link to="/help/organizers/create-a-community">Create a community</Link></li>
      <li><Link to="/help/organizers/create-an-event">Create an Event</Link></li>
      <li><Link to="/help/backstage/">Plan your event</Link></li>
      <li><Link to="/help/organizers/my-communities">My communities and Events</Link></li>
      <li><Link to="/help/organizers/create-announcements">Create Announcements</Link></li>
      
    </ul><hr/>
    <Link to="/help/backstage">Backstage</Link>
    <ul>
      <li><Link to="/help/backstage/event-planning">Event Planning</Link></li>
      <li><Link to="/help/backstage/event-guests">Guest Information</Link></li>
      <li><Link to="/help/backstage/event-feedback">Event Feedback and Reports</Link></li>
      <li><Link to="/help/backstage/event-settings">Event Settings</Link></li>
    </ul> 
  </div>
  </StyledHelpPage>
  )
}

export default TopicsSection