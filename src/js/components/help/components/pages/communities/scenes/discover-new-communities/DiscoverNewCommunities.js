import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../../../help-topics'
import Description from '../../../../help-description'
import Topic from '../../../../topic'
import {Link } from 'react-router-dom'

const StyledDiscoverNewCommunities = styled.div`
.help-description-container{
  display:flex;
  margin 5px;
  padding: 5px;
}

img{
width:700px;
height: 500px;
}

.help-main-content{
  font-size: 15px;
  margin-left:80px;
  max-width: 650px;
}

`

const DiscoverNewCommunities = () =>{
  return(
    <StyledDiscoverNewCommunities>
    <div className="help-description-container">
      <div><Sidebar/></div>
      <div className="help-main-content"><Topic>Discover New Communities</Topic>
        <Description>
          The way to change the world is through individual responsibility and taking local action in your own community.
          -Jeff Bridges<br/><br/>
          Ready to change the world? <Link to ="">join or follow</Link> a community.
          Have a look at <Link to ="">community Suggestions</Link> if you are new or just head to
         <Link to =""> search</Link> to discover other communities!  
        </Description>
      </div>
    </div>
    </StyledDiscoverNewCommunities>
  );
}

export default DiscoverNewCommunities