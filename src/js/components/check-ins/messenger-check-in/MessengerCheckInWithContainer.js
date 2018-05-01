import React from 'react'

import MessengerCheckInContainer from './MessengerCheckInContainer'
import MessengerCheckIn from './MessengerCheckIn'

const MessengerCheckInWithContainer = () => (
  <MessengerCheckInContainer>
    {(props) => <MessengerCheckIn {...props} />}
  </MessengerCheckInContainer>
)

export default MessengerCheckInWithContainer