import React from 'react'
import Topic from 'js/components/help/components/topic'
import Description from 'js/components/help/components/help-description'
import {Link} from 'react-router-dom'
import createcommunityimage from 'img/help-pages/create-a-community.png'
import createcommunity from 'img/help-pages/createcommunitystep2.png'
import HelpImage from 'js/components/help/components/image'

const CreateCommunity = () => {
  return(
    <div className="help-main-content"> 
      <Topic>Create a Community</Topic>
      <Description>
        Creating a community is the first thing you have to do before going to 
        <Link to="/help/organizers/create-an-event"> 
        create an event.
        </Link>
        <br/> To create a community, click on the 'CreateCommunity' button on the top
        navigation bar of the events or communities page. 
        <HelpImage src={createcommunityimage} alt="create a community image" />
        <br/>
        You can set up your community by editing the content of the template community page.
        To do this, click on "take me to my community so I can setup and publish"
        <br/>
        <HelpImage src={createcommunity} alt="Edit my community"/>
        Make sure you review all the information you have enetered before publishing your community.
        If you have entered an information in error however, you can
        <Link to="">
          edit
        </Link> 
         you community's information.
        <br/>
      </Description> 
    </div>
  )
}

export default CreateCommunity