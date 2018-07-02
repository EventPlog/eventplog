import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../../../help-topics'
import Topic from '../../../../topic'
import Description from '../../../../help-description'
import {Link } from 'react-router-dom'

const StyledConnectWithOgrganizers = styled.div`
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

const ConnectWithOrganizers = () =>{
  return(
    <StyledConnectWithOgrganizers>
      <div className="help-description-container">
        <div><Sidebar/></div>
        <div className="help-main-content"><Topic> Find and Connect With the Organizers</Topic>     
          <Description>
          Connecting with event organizers can be a fun activity. Whether it is for enquiries or for fun,
          we have made it easier for you to connect with organizers. To connect with organizers, you have 
          to find them first! 
          The comments section helps you connect with organizers. Leave them a comment to start
          a conversation. 
          NB: We have made communications with them open so that other guests or organizers can benefit
          from the conversations. 
          <Link to ="">events page </Link> 
          </Description>
          </div>
      </div>
    </StyledConnectWithOgrganizers>
  )
}

export default ConnectWithOrganizers