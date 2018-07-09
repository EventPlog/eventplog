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
const MyCommunities = ()=>{
  return(
    <StyledEventGuests>
     <div className="help-description-container">
        <div ><Sidebar/></div> 

        <div className="help-main-content"> 
          <Topic>My Communities and Events</Topic>
          <Description>
            As an organizer, you can find all events you have created and communities you manage
            by 
            <br/><br/> 
            <Link to="">Community</Link> pages. <br/><br/>

           
          </Description> 
        </div>
      </div>
    </StyledEventGuests>
  )
}

export default MyCommunities