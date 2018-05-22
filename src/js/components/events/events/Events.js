import React from 'react'
import { Card, Header } from 'semantic-ui-react'
import EventCard from './components/event-card'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../../../theme/colors'

import src from '../../../../img/tech_is_in_you.png'

const StyledEvents = styled.div`
  
  .event-group {
    margin: 50px;
    
    .event-group-header {
      font-weight: 400;
      margin-bottom: 30px;
    }
  }
  
  .create-event {
    width: 100%;
    padding: 40px;
  }
  
`

const createEventGroup = (title, events) => (
  <div class="event-group">
    <h4>{title}</h4>
    <Card.Group itemsPerRow={4}>
      {events && events.map((event, index) => {
          return <EventCard key={index} event={event} />
        }
      )}
    </Card.Group>
  </div>
)

const Events = ({ events }) => (
  <StyledEvents>
    {createEventGroup("Events I've registered for", events.user_events)}
    {createEventGroup("Events by communities I'm part of", events.communities_events)}
  </StyledEvents>
)

export default Events