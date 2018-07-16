import React from 'react'
import Description from 'js/components/help/components/help-description'
import Topic from 'js/components/help/components/topic'
import {Link } from 'react-router-dom'

const DiscoverNewCommunities = () => {
  return(
    <div>
      <Topic>Discover Communities</Topic>
      <Description>
        The way to change the world is through individual responsibility and taking local action in your own community.
        -Jeff Bridges<br/>
        Ready to change the world? <Link to ="">follow</Link> a community.<br/>
        Have a look at <Link to ="">community Suggestions</Link> if you are new or just head to
        <Link to =""> search</Link> to discover other communities!  
      </Description>
    </div>
  );
}

export default DiscoverNewCommunities