import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

// =========== INTERNAL ============
import EventsSection from 'js/components/events/scenes/events/components/events-section'
import { media } from 'js/styles/mixins'
import sharedStyles from '../sharedStyles'

const StyledEvents = styled.div`
  ${sharedStyles}
`

const MyEvents = ({
  user,
  labelVerbMapping = [],
  events,
  getEvents,
  activeItem,
  attendEvent,
  handleItemClick,
}) => {


  return (
    <StyledEvents>
      <Grid className='app-container'>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            {
              Object.keys(labelVerbMapping).map(item => (
                <Menu.Item
                  name={item}
                  active={activeItem === item}
                  onClick={handleItemClick}
                />
              ))
            }
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            <EventsSection key="user-upcoming-events-section"
                           title={activeItem} {...{events, getEvents, attendEvent }} />,
          </Segment>
        </Grid.Column>
      </Grid>
    </StyledEvents>
  )
}

export default MyEvents