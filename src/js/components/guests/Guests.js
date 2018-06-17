import React from 'react';
import styled from 'styled-components';

// internal components
import Tab from '../shared/tab';
import CheckInForm from './scenes/check-in-form/';
import GuestsList from './scenes/guests-list/';
import CsvImport from './scenes/csv-import'
import MessengerCheckIn from './scenes/messenger-check-in/';

const StyledGuests = styled.div`
`
const Guests = (props) => {
  const panes = [
    {name: 'All Guests', content: GuestsList},
    {name: 'Import CSV', content: CsvImport},
    {name: 'New guest', content: CheckInForm},
    {name: 'Messenger Code', content: MessengerCheckIn},
  ];

  return (
    <StyledGuests>
      <Tab panes={panes}/>
    </StyledGuests>
  )
}

export default Guests;
