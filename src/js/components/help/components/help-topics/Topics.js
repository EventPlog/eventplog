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

`
const TopicsSection =()=>{
  return(
    <StyledHelpPage>
  <div className="topics-section">
    <Link to="/help">Getting Started</Link><br/><br/>
    <Link to="/communities/help">Communities</Link>
    <ul>
        <li><Link to="/communities/help">Follow your favorite communities</Link></li>
        <li><Link to="/communities/help">My communities</Link></li>
        <li><Link to="/communities/help">Community suggestions</Link></li>
        <li><Link to="/communities/help">Community events</Link></li>
        <li><Link to="/communities/help">Announcements</Link></li>
        <li><Link to="/communities/help">Connect with organisers</Link></li>
        <li><Link to="/communities/help">Create a community</Link></li>
      </ul>
    <Link to="/communities/help">Events</Link>
    <ul>
        <li><Link to="/communities/help">Upcoming events</Link></li>
        <li><Link to="/communities/help">My communities</Link></li>
        <li><Link to="/communities/help">Event Suggestions</Link></li>
        <li><Link to="/communities/help">Create an event</Link></li>
      </ul>
    <Link to="/communities/help">Backstage</Link>
    <ul>
        <li><Link to="/communities/help">Event Planning</Link></li>
        <li><Link to="/communities/help">Event Guests</Link></li>
        <li><Link to="/communities/help">Event Feedback</Link></li>
        <li><Link to="/communities/help">Event Settings</Link></li>
      </ul>
  </div>
  </StyledHelpPage>
  )
}

export default TopicsSection