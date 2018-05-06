import React from 'react'
import { Card, Header } from 'semantic-ui-react'
import OrganizationCard from './components/event-card'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
    <Header as="h3" className="event-group-header">{title}</Header>
    <Card.Group itemsPerRow={4}>
      {events && events.map((event, index) => {
          return <OrganizationCard key={index} organization={organization} />
        }
      )}
    </Card.Group>
  </div>
)

const Events = ({ organizations }) => (
  <StyledEvents>
    {createEventGroup("My organizations", organizations)}
  </StyledEvents>
)

export default Events