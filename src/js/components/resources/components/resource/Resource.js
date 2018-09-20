import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

// internal
import ContentPanel from 'js/components/shared/content-panel'
import ContentEditable from 'js/components/shared/content-editable'
import Button from 'js/components/shared/button'
import NewResource from '../new-resource/NewResource'
import { pluralize, genEventLink } from 'js/utils'

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
      By {resource.owner.display_name}
    </li>
    <li>
      {resource.publish_time} ago.
    </li>
  </ul>,
  <ul key={`interest${resource.id}`}>
    <li>
      {resource.no_of_views || 0} views
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
`

const Resource = ({
  resource,
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
  const title = generateTitle(resource, handleViewCount)
  const description = generateDescription(resource)
  const meta = generateMeta(resource)
  const btn = currentUser && currentUser.id == resource.owner_id
    ? {
        onClick: () => handleEdit(),
        className: 'edit-btn',
        icon: <span><Icon name="pencil"/> | <Icon name="trash"/></span>
      }
    : ''

  const titleLink = resource.url;

  if (editing) {
    return (
      <ContentPanel title={`Edit or delete "${resource.title}"`}>
        <NewResource {...{
                            resource, event, loading,
                            error, success, handleChange,
                            handleUpdate, handleDelete
                          }} />
      </ContentPanel>
    )
  }

  return (
    <ContentPanel.Card
      className={className}
      key={resource.id}
      featured_image={`/${resource.resource_type}-sample-thumbnail.png`}
      {...{title, description, meta, btn, titleLink}}
      showButton={true} />
  )
}

export default styled(Resource)`${styles}`