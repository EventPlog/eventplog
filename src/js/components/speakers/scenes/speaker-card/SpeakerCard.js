import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

// internal
import ContentPanel from 'js/components/shared/content-panel'
import Button from 'js/components/shared/button'
import NewSpeaker from '../new-speaker/NewSpeaker'
import {
  pluralize,
  genEventLink,
  genUserProfileLink,
  getUserAvatar,
  titleize,
} from 'js/utils'

export const generateTitle = (speaker = {}, event = {}, handleViewCount) => {
  return (
    <Link to={`${genEventLink(event, event.community)}/speakers/${speaker.id}`}
          onClick={handleViewCount}>
      {speaker.presentation_type && `[${titleize(speaker.presentation_type)}]`} {speaker.title}
    </Link>
  )
}

export const generateDescription = (speaker = {}) => (
  <span>
    {speaker.summary}
  </span>
)

export const generateMeta = (speaker) => ([
  <ul key={`date${speaker.id}`}>
    <li>
      By <Link to={genUserProfileLink(speaker.user)}>
            {`${speaker.user.display_name}`}
         </Link>
    </li>
    <li>
      {speaker.no_of_views || 0} {pluralize('view', speaker.no_of_views)}
    </li>
    <li>
      {speaker.comments.data.length || 0} {pluralize('comment', speaker.comments.data.length)}
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

export const SpeakerCard = ({
  speaker,
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
  const title = generateTitle(speaker, event, handleViewCount)
  const description = generateDescription(speaker)
  const meta = generateMeta(speaker)
  const btn = event.is_stakeholder || (currentUser && currentUser.id == speaker.owner_id)
    ? {
        onClick: () => handleEdit(),
        className: 'edit-btn',
        icon: <span><Icon name="pencil"/> | <Icon name="trash"/></span>
      }
    : ''

  const titleLink = speaker.url;

  if (editing) {
    return (
      <ContentPanel title={`Edit or delete "${speaker.title}"`}>
        <NewSpeaker {...{
                      speaker, event, loading,
                      error, success, handleChange,
                      handleUpdate, handleDelete
                    }} />
      </ContentPanel>
    )
  }

  return (
    <ContentPanel.Card
      className={className}
      key={speaker.id}
      featured_image={getUserAvatar(speaker.user)}
      {...{title, description, meta, btn, titleLink}}
      showButton={true} />
  )
}

export default styled(SpeakerCard)`${styles}`