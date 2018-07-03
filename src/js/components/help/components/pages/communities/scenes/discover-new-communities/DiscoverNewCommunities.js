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
        <Description>If you do not find any communities to follow in <Link to ="">Community Suggestions</Link> You can discover 
          a new community by searching for one. 
        </Description>
      </div>
    </div>
    </StyledDiscoverNewCommunities>
  );
}

export default DiscoverNewCommunities