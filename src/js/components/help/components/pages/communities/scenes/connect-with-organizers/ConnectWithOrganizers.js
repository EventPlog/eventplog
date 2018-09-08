import React from 'react'
import Topic from 'js/components/help/components/topic'
import image from 'img/help-pages/connectwithorganizers.png'
import Description from 'js/components/help/components/help-description'
import {Link } from 'react-router-dom'

const ConnectWithOrganizers = () => {
  return(
    <div>
      <Topic> Connect With the Organizers and other guests</Topic>
      <Description>
        <p>
        Connecting with event organizers and other guests can be fun. Whether it is for enquiries or to feel more welcome,
        we have made it easier for you to connect with organizers.
        </p>
        <p>
          To connect with organizers, you only need&nbsp;
          to start a comment. Organizers get alerted when you post a comment in an event.
        </p>
        <p>
          Click on an event and scroll right to the bottom to find 'Ask the organizers'
        </p>
        <img src={image} alt="connect with organizers"/>
        <p>
        Then leave a comment to start a conversation.
        </p>
        <p>
          Don't feel held back to be the first person to start talking! Take the lead!
        </p>
      </Description>
    </div>
  )
}

export default ConnectWithOrganizers