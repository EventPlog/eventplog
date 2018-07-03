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
const EventGuests = ()=>{
  return(
    <StyledEventGuests>
      <div className="help-description-container">
        <div ><Sidebar/></div> 
        <div className="help-main-content"> 
          <Topic>Create Announcements</Topic>
          <Description>
            All organizers can create events for their communities or events. To create an announcements,
            you need to go backstage. As an organizer, you can find the backstage button on almost every page.
            <br/><br/> Right after using the backstage button, you can find Guest related information on 
            the guest section. <br/><br/> 
            If your guests have indicated interest in the event through eventplog, you can find your guest
            information on the all guest section of guests. You can directly check them in from here.
            <br/><br/> 
            You can also import your guest CSV if you have collected guest information on a different URL.
            When you import the list, the guest information moves to the all guests section where you can
            check them in.
            <br/><br/> 
            If there are new guest that have arrived at the event venue but did not register, you can register and
            check them in by clicking on resister new guest. 
            <br/><br/> 
            Find your unique messenger code on the messenger code section. Your guests the
            code to check into the event using messenger code scanner
          </Description> 
        </div>
      </div>
    </StyledEventGuests>
  )
}

export default EventGuests