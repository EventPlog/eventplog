import React from 'react';
import styled from 'styled-components';

// internal components
import Tab from '../shared/tab';
import EventUpdate from './scenes/event-update/';
import EventOrganizers from './scenes/event-organizers'

const StyledGuests = styled.div`
  .content-panel {
    margin-top: 2rem;
  }
  
`
const Guests = (props) => {
  const panes = [
    {name: 'Event', content: EventUpdate},
    {name: 'Organizers', content: EventOrganizers},
  ];

  return (
    <StyledGuests>
      <Tab panes={panes}/>
    </StyledGuests>
  )
}

export default Guests;
