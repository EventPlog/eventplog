import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../../../help-topics'
import Topic from '../../../../topic'
import Desrciption from '../../../../help-description'
import Description from '../../../../help-description';
import {Link} from 'react-router-dom'

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
          <Topic>Event Feedback and Reports</Topic>
           <Description>
            An exciting importance of eventplog is that you willl be able to get feedback from your event
            attendees to measure impact. To gather feedback from your event, click on backstage then hit the feedback
            button. 
            <br/><br/> You are totally in control of how you get feedback. We have a custom form which you can use
            but you can also get feedback using a custom form by entering it's URL. <br/><br/>
            <Topic>Generate Reports</Topic>
            It is easier to generate reports if you have used our platform completely to plan your event
            from start to finish. 
            You can find reports on the feedback section of the backstage.

           </Description> 
        </div>
      </div>
    </StyledEventGuests>
  )
}

export default EventPlanning