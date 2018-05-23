import React from 'react'

import CommunitiesContainer from './CommunitiesContainer'
import Communities from './Communities'

const EventsWithContainer = () => (
  <CommunitiesContainer>
    {(props) => <Communities {...props} />}
  </CommunitiesContainer>
)

export default EventsWithContainer