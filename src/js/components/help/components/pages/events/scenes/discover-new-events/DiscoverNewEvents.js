import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Sidebar from '../../../../help-topics'
import Topic from '../../../../topic'
import Description from '../../../../help-description'

const StyledDiscoverEvents=styled.div`
img{
  width:700px;
}
`
const DiscoverEvents = ()=>{
  return(
    <StyledDiscoverEvents>
      <div className="app-container">
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