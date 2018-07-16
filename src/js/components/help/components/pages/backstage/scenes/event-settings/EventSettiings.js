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
        When I edit my event, I want to make corrections or updates so the right information 
        can be displayed on my event page.
        To edit you event, <Link to=""> go backstage</Link> then click on the settings.
        Edit each section as you would want it to appear on the event page.
        <br/><br/> Right after using the backstage button, you can find the settings section
        on the page and click on it. Here you 
      </Description> 
    </div>
  )
}

export default EventPlanning