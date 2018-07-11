import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../../../help-topics'
import Topic from '../../../../topic'
import Desrciption from '../../../../help-description'
import Description from '../../../../help-description';
import {Link} from 'react-router-dom'
import createcommunityimage from 'img/help-pages/create-a-community.png'
import createcommunity from 'img/help-pages/createcommunitystep2.png'
import HelpImage from 'js/components/help/components/image'

const StyledEventGuests=styled.div`
`
const CreateCommunity = () => {
  return(
    <StyledEventGuests>
      <div className="app-container">
        <div ><Sidebar/></div> 

        <div className="help-main-content"> 
          <Topic>Create a Community</Topic>
          <Description>
            Creating a community is the first thing you have to do before going to 
            <Link to="/help/organizers/create-an-event"> create an event.</Link>
            <br/><br/> To create a community, click on the 'CreateCommunity' button on the top
            navigation bar of the events or communities page. 
            <br/><br/>
            <HelpImage src={createcommunityimage} alt="create a community image" />
            
            <br/><br/>
            You can set up your community by editing the content of the template community page.
            To do this, click on "take me to my community so I can setup and publish"
            <br/><br/>
            <HelpImage src={createcommunity} alt="Edit my community"/>
            Make sure you review all the information you have enetered before publishing your community.

            If you have entered an information in error however, you can <Link to=""> edit</Link> you community's information.
            <br/><br/>
          </Description> 
        </div>
      </div>
    </StyledEventGuests>
  )
}

export default CreateCommunity