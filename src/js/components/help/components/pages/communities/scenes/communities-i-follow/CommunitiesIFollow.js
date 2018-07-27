import React from 'react'
import Topic from 'js/components/help/components/topic'
import {Link} from 'react-router-dom'
import Description from 'js/components/help/components/help-description'
import mycommunitiesimage from 'img/help-pages/your-communities.png'
import communityimage from 'img/help-pages/community-page2.png'
import HelpImage from 'js/components/help/components/image'

const CommunitiesIFollow = () => {
  return(   
    <div>
      <Topic>Communities I Follow</Topic>
      <Description>
        <p>
        Click on communities at the
        top navigation bar after you have followed or joined a 
        community, if you are looking for communities you follow.
        </p>

        <HelpImage src ={mycommunitiesimage} alt="my communities"/>

        <p>
          From this page, you can decide to go to the community's home page to view
          information about a community you follow. Go to the community home page by
          clicking on any community.
        </p>

        <HelpImage src ={communityimage} alt="community image"/>

        <p>
          You can also<Link to ="#"> unfollow a community</Link> you already follow.
        </p>
      </Description>
    </div>
  )
}

export default CommunitiesIFollow