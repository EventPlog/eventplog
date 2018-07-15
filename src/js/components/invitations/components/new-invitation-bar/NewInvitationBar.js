import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { lighten, modularScale }  from 'polished'

import Button from 'js/components/shared/button'

const StyledNewInvitationBar = styled.div`
  padding: 2rem;
  background: ${props => lighten(-0.6, props.theme.activeLink)};
  color: #fff;
  
  .description a {
    color: #fff;
    text-decoration: underline;
  }
  
  .app-container {
    justify-content: center;
  }
  
  .description {
     margin-right: 2rem;
  }
  
  button {
    margin-left: 2rem;
  }
`

const d_notification = {
  id: 1,
  recipient_id: 1,
  recipient_type: 'User',
  owner_id: 1,
  owner_type: 'User',
  trackable_id: 1,
  trackable_type: 'Event',
  owner: {
    id: 1,
    first_name: 'Innocent'
  },
  event: {
    id: 1,
    title: 'Build day 2018',
    community_id: 1,
  }
}

const NewInvitationBar = ({
  handleConfirm,
  user_pending_invitations: invitations,
}) => {
  if (invitations.loading || invitations.error || !invitations[0] ) {
    return ''
  }
  const invitation = invitations[0]
  const { owner, event } = invitation
  return (
    <StyledNewInvitationBar className="notifications-bar">
      <div className="app-container">
        <div className="description">
          {owner.first_name} has invited you to help organize&nbsp;
          <Link to={`/communities/${event.community_id}/events/${event.id}`}>
            {event.title}
          </Link>
        </div>
        <div className="cta" >
          <Button inverted onClick={() => handleConfirm(invitation.id, 'accepted')}>Accept</Button>
          <Button inverted onClick={() => handleConfirm(invitation.id, 'declined')}>Decline</Button>
        </div>
      </div>
    </StyledNewInvitationBar>
  )
}

export default NewInvitationBar
