import React from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'

// =========== INTERNAL ==========
import Button from 'js/components/shared/button'

const StyledInvitationsList = styled.ul`
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0;
  }
  
  button {
    padding: 0.5rem;
    
    i {
      margin: 0;
    }
  }
`

const PendingInvitationsList = ({
  invitations,
  handleDelete,
}) => (
  <StyledInvitationsList>
    {invitations.map(invitation => (
      <li>
        <div>{invitation.recipient_email}</div>
        <Button onClick={() => handleDelete(invitation.id)}>
          <Icon name="delete" />
        </Button>
      </li>
    ))}
  </StyledInvitationsList>
)

export default PendingInvitationsList