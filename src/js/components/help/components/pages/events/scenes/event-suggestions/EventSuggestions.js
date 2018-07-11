import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Sidebar from '../../../../help-topics'
import Topic from '../../../../topic'
import Description from '../../../../help-description'
import eventimage from '../../../../../../../../img/help-pages/your-communities.png'

const StyledDiscoverEvents=styled.div`
img{
  width:700px;
}
`

const EventSuggestions = ()=>{
  return(
    <StyledDiscoverEvents>
      <div className="app-container">
        <div ><Sidebar/></div> 

        <div className="help-main-content"> 
          <Topic>Event Suggestions</Topic>
          <Description>
            Based on your interest in certain events or communitites, we suggest events you might be 
            interested in.<br/><br/> Find event suggestions  the right side of all <Link to=""> communities </Link>
            pages. <br/><br/>
            <img src={eventimage} alt="Event suggestions"/>
          </Description> 
        </div>
      </div>
    </StyledDiscoverEvents>
  )
}

export default EventSuggestions