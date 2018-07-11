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

const AllEvents = ()=>{
  return(
    <StyledDiscoverEvents>
      <div className="app-container">
        <div ><Sidebar/></div> 

        <div className="help-main-content"> 
          <Topic>My Events</Topic>
          <Description>
            To find all events you indicated interest in, whether past or upcoming, hit the MyEvents button
            on ... <br/><br/>
          </Description> 
        </div>
      </div>
    </StyledDiscoverEvents>
  )
}

export default AllEvents