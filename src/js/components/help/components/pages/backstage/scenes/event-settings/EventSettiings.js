import React from 'react'
import Topic from 'js/components/help/components/topic'
import Description from 'js/components/help/components/help-description';
import {Link} from 'react-router-dom'
import createcommunityimage from 'img/help-pages/create-a-community.png'

const EventPlanning = () => {
  return(
    <div > 
      <Topic>Event Settings</Topic>
      <Description>
        <p>
          To edit you event, <Link to=""> go backstage</Link> then click on the settings.
          Edit each section as you would want it to appear on the event page.
        </p>
        <p>
          Once you click the backstage button, you can find the settings section
          on the page and click on it.
        </p>
      </Description> 
    </div>
  )
}

export default EventPlanning