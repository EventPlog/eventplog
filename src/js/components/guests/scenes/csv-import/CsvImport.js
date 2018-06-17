import React from 'react';
import styled from 'styled-components';

const StyleMessengerCheckIn = styled.div`
  > img {
    width: 100%;
  }
`

const MessengerCheckIn = ({ event = {} }) =>
  <StyleMessengerCheckIn>
    <p>Import a guest lists as CSV.</p>
  </StyleMessengerCheckIn>

export default MessengerCheckIn;
