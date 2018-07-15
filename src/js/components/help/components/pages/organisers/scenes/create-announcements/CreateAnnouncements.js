import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../../../help-topics'
import Topic from '../../../../topic'
import Desrciption from '../../../../help-description'
import Description from '../../../../help-description';
import {Link} from 'react-router-dom'

const StyledEventGuests=styled.div`
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
const CreateAnnouncements = ()=>{
  return(
    <StyledEventGuests>
      <div className="help-description-container">
        <div ><Sidebar/></div> 
        <div className="help-main-content"> 
          <Topic>Create Announcements</Topic>
          <Description>
            All organizers can create events for their communities or events. To create an announcements,
            you need to go backstage. As an organizer, you can find the backstage button on almost every page.
            <br/><br/> Right after using the backstage button, click on settings and then on create announcements
            to create announcements.
          </Description> 
        </div>
      </div>
    </StyledEventGuests>
  )
}

export default CreateAnnouncements