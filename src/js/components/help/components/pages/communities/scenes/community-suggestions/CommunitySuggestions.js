import React from 'react'
import Topic from 'js/components/help/components/topic'
import Description from 'js/components/help/components/help-description'
import {Link } from 'react-router-dom'
import communitysuggestionimage from 'img/help-pages/communities.png'
import HelpImage from 'js/components/help/components/image'

const Communitysuggestions = () => {
  return(
    <div>
      <Topic>Community Suggestions</Topic>  
      <Description>
        When you want to find communities similar to communities you follow, you want to follow
        these communities so that you can see their events also. <br/> 
        Communities you might be interested in are always shown to you based on your previous 
        event interests or communities you already follow.<br/> Community suggestions 
        can be found as a section on the communities page. Click on communities
        on the navigation bar and then scroll right to the buttom of the page to find suggestions.
        <br/><br/><img src={communitysuggestionimage} alt="community suggestions"/>
      </Description>
    </div>
  )
}

export default Communitysuggestions