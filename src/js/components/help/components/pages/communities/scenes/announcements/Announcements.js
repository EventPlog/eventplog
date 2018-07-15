import React from 'react'
import Topic from 'js/components/help/components/topic'
import Description from 'js/components/help/components/help-description';
import {Link} from 'react-router-dom'
import announcementimage from 'img/help-pages/announcement.png'
import HelpImage from 'js/components/help/components/image'

const Announcements = () => {
  return(
    <div> 
      <Topic>Announcements</Topic>
      <Description>
        Anouncements are used by event organizers to notify you of any important information
        regarding an event or a community.<br/> Announcements can be found on event
        and  community pages. <br/>
        Usually, most recent announcements are highlighted with a green background while older
        announcements can be found on the announcements section.<br/>Click on an event or a community,
        scroll to announcements which can be found below the description of an event or community
          <br/><br/>
      </Description> 
    </div>
  )
}

export default Announcements