import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Sidebar from '../../../../help-topics'
import Topic from '../../../../topic'
import Description from '../../../../help-description'

const StyledDiscoverEvents=styled.div`

`
const DiscoverEvents = ()=>{
  return(
    <StyledDiscoverEvents>
      <div className="help-description-container">
        <div ><Sidebar/></div> 

        <div className="help-main-content"> 
          <Topic>Discover Events</Topic>
          <Description>
            Anouncements are used by event organizers to notify you of any important information
            regarding an event or a community.<br/><br/> Announcements can be found on all <Link to="">Event</Link>
            and <Link to="">Community</Link> pages. <br/><br/>

            Usually, most recent announcements are highlighted with a green background while older
            announcements can be found on the announcements section. <br/><br/>
          </Description> 
        </div>
      </div>
    </StyledDiscoverEvents>
  )
}

export default DiscoverEvents