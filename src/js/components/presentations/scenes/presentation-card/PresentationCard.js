import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

// internal
import ContentPanel from 'js/components/shared/content-panel'
import Button from 'js/components/shared/button'
import NewPresentation from '../new-presentation/NewPresentation'
import UserLink from 'js/components/shared/user-link'
import {
  pluralize,
  genEventLink,
  genUserProfileLink,
  getUserAvatar,
  titleize,
} from 'js/utils'

export const generateTitle = (presentation = {}, event = {}, handleViewCount) => {
  return (
    <Link to={`${genEventLink(event, event.community)}/presentations/${presentation.id}`}
          onClick={handleViewCount}>
      {presentation.presentation_type && `[${titleize(presentation.presentation_type)}]`} {presentation.title}
    </Link>
  )
}

export const generateDescription = (presentation = {}) => (
  <span>
    {presentation.summary}
  </span>
)

export const generateMeta = (presentation) => ([
  <ul key={`date${presentation.id}`} className="row">
    <li>
      By <UserLink user={presentation.user} />
    </li>
    <li>
      {presentation.no_of_views || 0} <Icon name="eye" />
    </li>
    <li>
      {presentation.no_of_resources || 0} <Icon name="file alternate" />
    </li>
    <li>
      {presentation.comments.data.length || 0} <Icon name="comment outline" />
    </li>
  </ul>,
])

export const generateCTA = (handleClick) => (
  <Button onClick={handleClick}>
    Interested
  </Button>
)

const styles = css`
  button {
    padding: 0.5rem;
    min-width: 70px;
    margin-left: 0.5rem;
  }
  
  .card-title a {
    color: var(--activeLink);
  }
`

export const PresentationCard = ({
  presentation,
  event,
  loading,
  error,
  success,
  handleChange,
  handleUpdate,
  handleDelete,
  handleEdit,
  handleViewCount,
  editing = false,
  currentUser,
  className,
}) => {
  const title = generateTitle(presentation, event, handleViewCount)
  const description = generateDescription(presentation)
  const meta = generateMeta(presentation)
  const btn = event.is_stakeholder || (currentUser && currentUser.id == presentation.owner_id)
    ? {
      onClick: () => handleEdit(),
      className: 'edit-btn',
      icon: <span><Icon name="pencil"/> | <Icon name="trash"/></span>
    }
    : ''

  const titleLink = presentation.url;

  if (editing) {
    return (
      <ContentPanel title={`Edit or delete "${presentation.title}"`}>
        <NewPresentation {...{
          presentation, event, loading,
          error, success, handleChange,
          handleUpdate, handleDelete
        }} />
      </ContentPanel>
    )
  }

  return (
    <ContentPanel.Card
      className={className}
      key={presentation.id}
      featured_image={getUserAvatar(presentation.user)}
      {...{title, description, meta, btn, titleLink}}
      showButton={true} />
  )
}

export default styled(PresentationCard)`${styles}`