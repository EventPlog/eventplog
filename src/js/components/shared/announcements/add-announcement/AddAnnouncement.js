import React from 'react'
import styled, {css} from 'styled-components'
import { Icon } from 'semantic-ui-react'

// internal
import AnnouncementPanel from 'js/components/shared/announcements/announcement-panel'
import Button from 'js/components/shared/button'
import TextArea from 'js/components/shared/text-area'
import Auth from 'js/auth'
import { media } from 'js/styles/mixins'

const AddAnnouncementStyles = styled.div`
  max-width: 820px;
  
  .new-announcement-card {
    ${
      media.phone`
      `
    }
  }
  
  .avatar {
    width: 50px;
    height: 50px;
    
    ${
      media.phone`  
        width: 30px;
        height: 30px;
        margin: 0;
        margin-right: 5px;
      `
    }
  }
  
  .announcement {
    display: flex;
      
    ${
      media.phone`
      `
    }
    
    button {
      max-height: 50px;
      margin-left: 1rem;
      align-self: center;
      height: 100%;
      max-width: 40px;
      padding: 0.6rem;
      
      ${
        media.phone`
          align-self: end;
          margin-left: 0;
          margin: auto 0 auto 0.5rem;
        `
      }
    }
  }
`

const AddAnnouncement = ({
  className,
  placeholder,
  announcement = {},
  parentAnnouncement,
  handleChange,
  createAnnouncement,
  current_user,
  ...otherProps,
}) => {
  return (
    <AddAnnouncementStyles className={`${className} add-announcement`}>
      <AnnouncementPanel className="new-announcement-card" user={current_user}>
      <TextArea placeholder={placeholder}
                name="body"
                onChange={({target}) => handleChange(target.name, target.value)}
                value={announcement.body} />

        <Button onClick={createAnnouncement}>
          <Icon className="paper plane" />
        </Button>
      </AnnouncementPanel>
    </AddAnnouncementStyles>
  )
}


export default AddAnnouncement