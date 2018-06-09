import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import Button from 'js/components/shared/button'

const CommunityCard = ({
  name,
  description,
  no_of_followers,
  no_of_upcoming_events,
  community_focus,
}) => (
  <div>
    <div className="header">
      { name }
    </div>
    <div className="description">
      { description }
    </div>
    <div className="meta">
      <div className="item">
        { no_of_followers }
      </div>
      <div className="item">
        { no_of_upcoming_events }
      </div>
      <div className="item">
        { community_focus }
      </div>
      <Button>Follow</Button>
    </div>
  </div>
)

export default CommunityCard