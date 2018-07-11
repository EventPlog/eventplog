import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../../../help-topics'
import Topic from '../../../../topic'
import Desrciption from '../../../../help-description'
import Description from '../../../../help-description';
import {Link} from 'react-router-dom'
import createcommunityimage from '../../../../../../../../img/help-pages/create-a-community.png'

const StyledEventGuests=styled.div`
img{
  width:700px;
}
`
const EventPlanning = ()=>{
  return(
    <StyledEventGuests>
      <div className="app-container">
        <div ><Sidebar/></div> 
        <div className="help-main-content"> 
          <Topic>Event Settings</Topic>
          <Description>
            To edit you event, <Link to=""> go backstage</Link> then click on the settings.
            Edit each section as you would want it to appear on the event page.
            <br/><br/> Right after using the backstage button, you can find the settings section
            on the page and click on it. Here you 
          </Description> 
        </div>
      </div>
    </StyledEventGuests>
  )
}

export default EventPlanning