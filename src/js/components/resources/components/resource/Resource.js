import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

// internal
import ContentPanel from 'js/components/shared/content-panel'
import Button from 'js/components/shared/button'
import NewResource from 'js/components/resources/components/new-resource/NewResource'
import UserLink from 'js/components/shared/user-link'
import { pluralize, titleize, genEventLink } from 'js/utils'

export const generateTitle = (resource = {}, handleViewCount) => {
  return (
  <Link to={resource.url || '#'} target='_blank' onClick={handleViewCount}>
    {resource.title}
  </Link>
  )
}

export const generateDescription = (resource = {}) => (
  <span>
    {resource.description}
  </span>
)

export const generateMeta = (resource) => ([
  <ul key={`date${resource.id}`}>
    <li>
      Added {(resource.publish_time)} ago by <UserLink user={resource.owner} />
    </li>
  </ul>,
  <ul key={`interest${resource.id}`}>
    <li>
      {resource.no_of_views || 0} {pluralize('view', resource.no_of_views)}
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

export const featuredImageGen = (resource_type = '') => (
  `/${resource_type}-sample-thumbnail.png`
)

export const Resource = ({
  resource,
  event,
  loading,
  error,
  success,
  presentationsOptions,
  handleChange,
  handleUpdate,
  handleDelete,
  handleEdit,
  handleViewCount,
  editing = false,
  currentUser,
  requester,
  className,
}) => {
  const title = generateTitle(resource, handleViewCount)
  const description = generateDescription(resource)
  const meta = generateMeta(resource)
  const btn = event.is_stakeholder || (currentUser && currentUser.id == resource.owner_id)
    ? {
        onClick: () => handleEdit(),
        className: 'edit-btn',
        icon: <span><Icon name="pencil"/> | <Icon name="trash"/></span>
      }
    : {
      onClick: () => {window.open(resource.url || '#', '_newtab'); handleViewCount()},
      className: 'edit-btn',
      icon: <Icon name="send"/>,
      text: 'Open'
    }

  const titleLink = resource.url;

  if (editing) {
    return (
      <ContentPanel title={`Edit or delete "${resource.title}"`}>
        <NewResource editResource {...{
                                    resource, event, loading, presentationsOptions,
                                    error, success, handleChange,
                                    handleUpdate, handleDelete, requester
                                  }} />
      </ContentPanel>
    )
  }

  return (
    <ContentPanel.Card
      className={className}
      key={resource.id}
      featured_image={featuredImageGen(resource.resource_type)}
      {...{title, description, meta, btn, titleLink}}
      showButton={true} />
  )
}

export default styled(Resource)`${styles}`