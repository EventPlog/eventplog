import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledEventCard = styled.div`

`

const EventCard = ({ event = {} }) => (
  <Card>
    {/*<Image src={img} />*/}
    <Card.Content>
      <Card.Header><Link to={`events/${event.id}`}>{event.title || 'No title'}</Link></Card.Header>

      <Card.Meta>Joined in 2016</Card.Meta>
    </Card.Content>

    <Card.Content>
      <Card.Description>{ event.description || 'No description' }</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        { event.start_time || 'No specified time' }
      </a>
    </Card.Content>
  </Card>
)

export default EventCard