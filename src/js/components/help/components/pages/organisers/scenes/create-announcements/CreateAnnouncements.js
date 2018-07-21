import React from 'react'
import Topic from 'js/components/help/components/topic'
import Desrciption from 'js/components/help/components/help-description'
import {Link} from 'react-router-dom'

const CreateAnnouncements = ()=>{
  return(
    <div > 
      <Topic>Create Announcements</Topic>
      <Description>
        When I create announcement, I want to notify everyone who is interested in my event or community of updates 
        on activities surrounding my event or community so they can know what to take note of.
        All organizers can create events for their communities or events. To create an announcements,
        you need to go backstage. As an organizer, you can find the backstage button on almost every page.
        <br/> Right after using the backstage button, click on settings and then on create announcements
        to create announcements.
      </Description> 
    </div>
  )
}

export default CreateAnnouncements