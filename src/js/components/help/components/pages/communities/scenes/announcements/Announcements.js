import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../../../help-topics'
import Topic from '../../../../topic'
import Desrciption from '../../../../help-description'
import Description from '../../../../help-description';
import {Link} from 'react-router-dom'


const StyledAnnouncements = styled.div`
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

.button

`

const Announcements = () =>{
  return(
    <StyledAnnouncements>
    <div className="help-description-container">
      <div ><Sidebar/></div> 

      <div className="help-main-content"> 
        <Topic>Announcements</Topic>
        <Description>
          Anouncements are used by event organizers to notify you of any important information
          regarding an event or a community.<br/><br/> Announcements can be found on event
          and  community pages. <br/><br/>

          Usually, most recent announcements are highlighted with a green background while older
          announcements can be found on the announcements section. <br/><br/>
        </Description> 
      </div>
    </div>
  </StyledAnnouncements>
  )
}

export default Announcements