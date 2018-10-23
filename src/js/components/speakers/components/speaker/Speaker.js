import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

// internal
import ContentPanel from 'js/components/shared/content-panel'
import ContentEditable from 'js/components/shared/content-editable'
import Button from 'js/components/shared/button'
import NewSpeaker from '../new-speaker/NewSpeaker'
import { pluralize, genEventLink } from 'js/utils'

export const generateTitle = (speaker = {}, handleViewCount) => {
  return (
  <Link to={speaker.url || '#'} target='_blank' onClick={handleViewCount}>
    {speaker.title}
  </Link>
  )
}

export const generateDescription = (speaker = {}) => (
  <span>
    {speaker.description}
  </span>
)

export const generateMeta = (speaker) => ([
  <ul key={`date${speaker.id}`}>
    <li>
      By {speaker.user.display_name}
    </li>
    <li>
      At {speaker.start_time} - {speaker.end_time}.
    </li>
  </ul>,
  <ul key={`interest${speaker.id}`}>
    <li>
      {speaker.no_of_views || 0} views
    </li>
  </ul>
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

const Speaker = ({
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
  const title = generateTitle(speaker, handleViewCount)
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
      featured_image={`/${speaker.speaker_type}-sample-thumbnail.png`}
      {...{title, description, meta, btn, titleLink}}
      showButton={true} />
  )
}

export default styled(Speaker)`${styles}`