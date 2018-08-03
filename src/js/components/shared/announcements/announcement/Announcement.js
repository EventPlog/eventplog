import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { Icon } from 'semantic-ui-react'

// ========= INTERNALS =========

import { media } from 'js/styles/mixins'
import AnnouncementPanel from '../announcement-panel'
import ContentEditable from 'js/components/shared/content-editable'
import Button from 'js/components/shared/button'

const Announcement = ({
  className = '',
  announcement = {},
  handleChange,
  updateAnnouncement,
  children,
  canCreateAnnouncement,
  current_user,
  deleteAnnouncement,
  ...otherProps
}) => {
  const currentUserIsOwner = (!announcement.deleted && announcement.user.id == current_user.id)

  return (
    <AnnouncementPanel announcement={announcement}
                       user={announcement.deleted ? {} : announcement.user}>
      {currentUserIsOwner && <Button inverted className="btn-delete" onClick={deleteAnnouncement}>
                               <Icon className="delete" />
                             </Button>}
      {currentUserIsOwner
        ? <ContentEditable propName="body"
                     canEdit={currentUserIsOwner}
                     type="textarea"
                     defaultValue={announcement.body}
                     onChange={handleChange}
                     onSubmit={updateAnnouncement}>
            <ReactMarkdown source={announcement.body} />
          </ContentEditable>
        : <ReactMarkdown source={announcement.body} />
      }
      {children}
    </AnnouncementPanel>
  )
}

export default Announcement