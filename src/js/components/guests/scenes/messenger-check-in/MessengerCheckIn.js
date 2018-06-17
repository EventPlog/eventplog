import React from 'react';
import styled from 'styled-components';

import tmnDefaultBarCode from 'img/tmn_bar_code.png';

const StyleMessengerCheckIn = styled.div`
  > img {
    width: 100%;
  }
`

const MessengerCheckIn = ({ event = {} }) =>
  <StyleMessengerCheckIn>
    <p>Ask guests to scan this code on Facebook messenger to check into this event.</p>
    <img src={event.barcode_url || tmnDefaultBarCode } />
  </StyleMessengerCheckIn>

export default MessengerCheckIn;
