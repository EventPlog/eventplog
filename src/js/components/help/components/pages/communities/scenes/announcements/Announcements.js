import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../../../help-topics'
import Topic from '../../../../topic'
import Desrciption from '../../../../help-description'
import Description from '../../../../help-description';
import {Link} from 'react-router-dom'
import announcementimage from '../../../../../../../../img/help-pages/announcement.png'


const StyledAnnouncements = styled.div`
img{
  width:700px;
}
`

const Announcements = () =>{
  return(
    <StyledAnnouncements>
      <div className="app-container">
        <div ><Sidebar/></div> 

        <div className="help-main-content"> 
          <Topic>Announcements</Topic>
          <Description>
            Anouncements are used by event organizers to notify you of any important information
            regarding an event or a community.<br/><br/> Announcements can be found on event
            and  community pages. <br/><br/>
            Usually, most recent announcements are highlighted with a green background while older
            announcements can be found on the announcements section.<br/>Click on an event or a community,
            scroll to announcements which can be found below the description of an event or community
             <br/><br/>

          </Description> 
        </div>
      </div>
    </StyledAnnouncements>
  )
}

export default Announcements