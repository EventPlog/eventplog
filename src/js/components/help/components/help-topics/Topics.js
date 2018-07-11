import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import colors from 'js/styles/theme/colors';

const StyledHelpPage =styled.div`
  background: #eee;
  width: 300px;
  min-width: 300px;
  margin: 2rem 0;
  padding: 2rem;
  border-radius: 10px;

  li {
    line-height: 30px;
  }

`
const TopicsSection = () => {
  return(
    <StyledHelpPage className="topics-section">
        <Link to="/help/getting-started">
          Getting Started
        </Link>
        <br/>
        <hr/>
        <Link to="/help/communities">
          Communities
        </Link>
        <ul>
          <li>
            <Link to="/help/communities/follow-a-community">
              Follow your favorite communities
            </Link>
          </li>
          {/* {<li><Link to="/help/communities/discover-new-communities">Discover New Communities</Link></li>} */}
          <li>
            <Link to="/help/communities/communities-i-follow">
              Communities I Follow
            </Link>
          </li>
          <li>
            <Link to="/help/communities/community-suggestions">
              Community suggestions
            </Link>
          </li>
          <li>
            <Link to="/help/communities/announcements">
              Announcements
            </Link>
          </li>
          <li>
            <Link to="/help/communities/connect-with-organizers">
              Find and connect with organisers
            </Link>
          </li>
        </ul>
        <hr/>
        <Link to="/help/events/">
          Events
        </Link>
        <ul>
          {/* {<li><Link to="/help/events/upcoming-events">Upcoming events</Link></li>} */}
          <li>
            <Link to="/help/events/event-suggestions">
              Event Suggestions
            </Link>
          </li>
          {/* {<li><Link to="/help/events/discover-new-events">Discover new events</Link></li>} */}
          <li>
            <Link to="/help/events/upcoming-and-past-events">
              My events
            </Link>
          </li>
          <li>
            <Link to="/help/organizers/create-an-event">
              Create an Event
            </Link>
          </li>
          <li>
            <Link to="/help/events/event">
              About an event
            </Link>
          </li>
        </ul>
        <hr/>
        <Link to="/help/organizers">
          Organizers
        </Link>
        <ul>
          <li>
            <Link to="/help/organizers/create-a-community">
              Create a community
            </Link>
          </li>
          <li>
            <Link to="/help/organizers/create-an-event">
              Create an Event
            </Link>
          </li>
          <li>
            <Link to="/help/backstage/">
              Plan your event
            </Link>
          </li>
          <li>
            <Link to="/help/organizers/my-communities">
              My communities and Events
            </Link>
          </li>
          <li>
            <Link to="/help/organizers/create-announcements">
              Create Announcements
            </Link>
          </li>
          
        </ul><hr/>
        <Link to="/help/backstage">
          Backstage
        </Link>
        <ul>
          <li>
            <Link to="/help/backstage/event-planning">
              Event Planning
            </Link>
          </li>
          <li>
            <Link to="/help/backstage/event-guests">
              Guest Information
            </Link>
          </li>
          <li>
            <Link to="/help/backstage/event-feedback">
              Event Feedback and Reports
            </Link>
          </li>
          <li>
            <Link to="/help/backstage/event-settings">
              Event Settings
            </Link>
          </li>
        </ul> 
    </StyledHelpPage>
  )
}

export default TopicsSection