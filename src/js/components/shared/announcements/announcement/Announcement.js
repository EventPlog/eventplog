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
      {!currentUserIsOwner && <ReactMarkdown source={announcement.body} />}
      {currentUserIsOwner &&
        <ContentEditable onChange={handleChange}
                         onSubmit={updateAnnouncement}
                         type="textarea"
                         propName="body">
          {
            ({onClick, ...props}) =>
              <div onClick={(e) => onClick(e, announcement.body)} {...props}>
                <ReactMarkdown source={announcement.body} />
              </div>
          }
        </ContentEditable>}
      {children}
    </AnnouncementPanel>
  )
}

export default Announcement