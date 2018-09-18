import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { lighten } from 'polished'

import colors from 'js/styles/theme/colors';
import Sidebar from 'js/components/shared/sidebar'

const StyledHelpPage =styled.div`
  .sidebar {
    border-radius: 0;
    width: 300px;
    min-width: 300px;
    margin: 2rem 0;
    padding: 2rem;
    
    a {
      color: ${lighten(0.35, colors.blue)}
      
      &:hover {
        color: var(--activeLink);
      }
      
      &.top-level-topic {
        margin: 1rem 0 0rem;
        display: inline-block;
        font-size: 110%;
        font-weight: 800;
      }
    }

    li {
      line-height: 30px;
    }
  }

`
const TopicsSection = () => {
  const title = <Link to="/help/getting-started">
                  Getting Started
                </Link>
  return(
    <StyledHelpPage className="topics-section">
      <Sidebar title={title}>

        <Link className="top-level-topic" to="/help/organizers">
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
          <li>
            <Link to="/help/organizers/add-co-organizers">
              Add Co-Organizers
            </Link>
          </li>
          <li>
            <Link to="/help/organizers/upload-CSV">
              Upload CSV
            </Link>
          </li>
          <li>
            <Link to="/help/organizers/assign-task">
              Assign Tasks to Co-organizers 
            </Link>
          </li>
          <li>
            <Link to="/help/organizers/check-in-guest">
              Check in Guest
            </Link>
          </li>
          
        </ul>
        <hr/>
        <Link className="top-level-topic" to="/help/communities">
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
        <Link className="top-level-topic" to="/help/events/">
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

        <Link className="top-level-topic" to="/help/backstage">
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
      </Sidebar>
    </StyledHelpPage>
  )
}

export default TopicsSection