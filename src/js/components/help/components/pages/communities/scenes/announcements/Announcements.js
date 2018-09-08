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
        <p>
          When you look out for announcements, you want to know the latest update about a community
          or an event so that you don't miss out on important information.
        </p>
        <p>
          Anouncements are used by event organizers to notify you of any important information
          regarding an event or a community.
        </p>
        <p>
          Announcements can be found on event
          and  community pages.
        </p>
        <p>
          Usually, most recent announcements are highlighted with a green background while older
          announcements can be found on the announcements section.
        </p>
        <p>
          Click on an event or a community, scroll to announcements which can be found below the description of an event or community
        </p>
      </Description>
    </div>
  )
}

export default Announcements