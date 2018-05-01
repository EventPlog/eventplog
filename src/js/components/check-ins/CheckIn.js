import React, { Component } from 'react';
import styled from 'styled-components';

// internal components
import Tab from '../shared/tab';
import CheckInForm from './check-in-form/';
import MessengerCheckIn from './messenger-check-in/';

const StyledCheckIns = styled.div`
`
const CheckIns = (props) => {
  const panes = [
    {name: 'Check in form', content: CheckInForm},
    {name: 'Event Messenger Code', content: MessengerCheckIn},
  ];

  return (
    <StyledCheckIns>
      <Tab panes={panes}/>
    </StyledCheckIns>
  )
}

export default CheckIns;