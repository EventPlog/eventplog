import React from 'react';
import styled from 'styled-components';

// internal components
import Tab from '../shared/tab';
import EventUpdate from './scenes/event-update/';
import EventOrganizers from './scenes/event-organizers'

const StyledEventSettings = styled.div`
  .content-panel {
    margin-top: 2rem;
  }
  
`

const activeIndex = {
  settings: 0,
  organizers: 1
}
const EventSettings = (props) => {
  const panes = [
    {name: 'Organizers', content: EventOrganizers},
    {name: 'Event', content: EventUpdate},
  ];

  return (
    <StyledEventSettings>
      <Tab panes={panes} {...props} />
    </StyledEventSettings>
  )
}

export default EventSettings;
