import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Sidebar from '../../../../help-topics'
import Topic from '../../../../topic'
import Description from '../../../../help-description'

const StyledDiscoverEvents=styled.div`
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
const DiscoverEvents = ()=>{
  return(
    <StyledDiscoverEvents>
      <div className="help-description-container">
        <div ><Sidebar/></div> 

        <div className="help-main-content"> 
          <Topic>Discover Events</Topic>
          <Description>
            Use the search bar to look for events you may be interested in, if our event suggestions do not capture
            events you would love to be a part of.
            <br/><br/> Announcements can be found on all <Link to="">Event</Link>
            and <Link to="">Community</Link> pages. <br/><br/>

           
          </Description> 
        </div>
      </div>
    </StyledDiscoverEvents>
  )
}

export default DiscoverEvents