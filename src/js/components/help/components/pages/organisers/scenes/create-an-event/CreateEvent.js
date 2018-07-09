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
const CreateEvent = ()=>{
  return(
    <StyledEventGuests>
      <div className="help-description-container">
        <div ><Sidebar/></div> 

        <div className="help-main-content"> 
          <Topic>Create an Event</Topic>
          <Description>
            To create an event, you must have <Link to="/help/organizers/create-a-community">created a community! </Link>
            <br/><br/> The CreateEvent button can be found on all default communities pages top navigation bar. Click on the 
            button and then edit the content of the default event page.<br/><br/> After editing the template,
            you can publish your event. <br/>
            If you hve entered some information in error, don't panic! You can <Link to=""> edit</Link> you event'sinformation.       
          </Description> 
        </div>
      </div>
    </StyledEventGuests>
  )
}

export default CreateEvent