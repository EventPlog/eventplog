import React from 'react'
import Topic from '../../../../topic'
import image from 'img/help-pages/connectwithorganizers.png'
import Description from 'js/components/help/components/help-description'
import {Link } from 'react-router-dom'

const ConnectWithOrganizers = () =>{
  return(
    <div className="help-main-content"><Topic> Find and Connect With the Organizers</Topic>     
      <Description>
        Connecting with event organizers can be a fun activity. Whether it is for enquiries or for fun,
        we have made it easier for you to connect with organizers.<br/><br/> To connect with organizers, you have 
        to find them first!<br/> You find organizers when you are interested in their events.<br/><br/>
        Click on an event and scroll right to the bottom to find 'ask the organizers'
        <br/><br/> <img src={image} alt="connect with organizers"/>
        The comments section helps you connect with organizers. Leave them a comment to start
        a conversation. <br/>
        NB: We have made communications with them open so that other guests or organizers can benefit
        from the conversations. 
      </Description>
    </div>
  )
}

export default ConnectWithOrganizers