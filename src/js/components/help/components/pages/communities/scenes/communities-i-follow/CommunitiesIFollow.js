import React from 'react'
import Topic from '../../../../topic'
import {Link} from 'react-router-dom'
import Sidebar from '../../../../help-topics'
import Description from '../../../../help-description'
import styled from 'styled-components';
import Button from '../../../../../../shared/button'

const StyledCommunitiesIFollow = styled.div`
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
.button{
  display:flex;
  justify-content: center;
}
`

const CommunitiesIFollow = ()=>{
  return(
    <StyledCommunitiesIFollow>
      <div className="help-description-container">
        <div><Sidebar/></div>
        <div className="help-main-content"><Topic>Communities I Follow</Topic>
          <Description>
            If you are looking for communities you follow, you can click on communities at the
            top navigation bar of the first page you see after you have followed or joined a 
            community.
            From this page, you can decide to go to the community's page or you can decide to 
            <Link to =""> unfollow a community</Link> you already follow.<br/><br/>
          </Description>
          <div className="button"><Button>Go to eventplog</Button></div>
        </div>
      </div>
    </StyledCommunitiesIFollow>
  )
}

export default CommunitiesIFollow