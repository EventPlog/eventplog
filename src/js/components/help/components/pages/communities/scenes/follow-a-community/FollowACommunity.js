import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../../../help-topics'
import Topic from '../../../../topic'
import Description from '../../../../help-description'
import {Link } from 'react-router-dom'

const StyledFollowACommunity = styled.div`
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

const FollowAcommunity = () =>{
  return(
    <StyledFollowACommunity>
      <div className="help-description-container">
        <div><Sidebar/></div>
        <div className="help-main-content"><Topic>Follow a Community</Topic>
          <Description>
          If you are new to eventplog, you might want to follow a community.
          To follow a community, click on  
          <Link to ="">join </Link> and tada.. you have started following the community.
          You will also start getting notifications and updates on events from this community.
          </Description>
      </div>
    </div>
    </StyledFollowACommunity>
  )
}

export default FollowAcommunity