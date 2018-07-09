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
const CreateCommunity = ()=>{
  return(
    <StyledEventGuests>
      <div className="help-description-container">
        <div ><Sidebar/></div> 

        <div className="help-main-content"> 
          <Topic>Create a Community</Topic>
          <Description>
            Creating a community is the first thing you have to do before going to 
            <Link to="/help/organizers/create-an-event"> create an event.</Link>
            <br/><br/> To create a community, click on the CreateCommunity button on the top
            navigation bar of the events or communities page. 
            <br/><br/>
            You can set upp your community by editing the content of the template community page.
            <br/><br/>
            Make sure you review all the information you have enetered before publishing your community.

            If you have entered an information in error however, you can <Link to=""> edit</Link> you community's information.
          </Description> 
        </div>
      </div>
    </StyledEventGuests>
  )
}

export default CreateCommunity