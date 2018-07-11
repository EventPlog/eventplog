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
const MyCommunities = ()=>{
  return(
    <StyledEventGuests>
     <div className="app-container">
        <div ><Sidebar/></div> 

        <div className="help-main-content"> 
          <Topic>My Communities and Events</Topic>
          <Description>
            As an organizer, you can find all events you have created and communities you manage
            by 
            <br/><br/> 
            <br/><br/>

           
          </Description> 
        </div>
      </div>
    </StyledEventGuests>
  )
}

export default MyCommunities