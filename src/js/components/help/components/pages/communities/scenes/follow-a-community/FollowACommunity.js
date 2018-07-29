import React from 'react'
import styled from 'styled-components'
import Sidebar from 'js/components/help/components/help-topics'
import Topic from 'js/components/help/components/topic'
import Description from 'js/components/help/components/help-description'
import {Link } from 'react-router-dom'

const FollowAcommunity = () => {
  return(
    <div>
      <Topic>Follow a Community</Topic>
      <Description>
        <p>
          If you are new to eventplog, you might want to follow a community.
          To follow a community, click on
        </p>
        <p>
          <Link to =""> join </Link> and tada.. you have started following the community.&nbsp;
          You will also start getting notifications and updates on events from this community.
        </p>
      </Description>
  </div>
  )
}

export default FollowAcommunity