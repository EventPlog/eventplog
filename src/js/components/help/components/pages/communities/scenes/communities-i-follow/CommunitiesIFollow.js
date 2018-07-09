import React from 'react'
import Topic from '../../../../topic'
import {Link} from 'react-router-dom'
import Sidebar from '../../../../help-topics'
import Description from '../../../../help-description'
import mycommunitiesimage from '../../../../../../../../img/help-pages/your-communities.png'
import communityimage from '../../../../../../../../img/help-pages/community-page2.png'
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
            Click on communities at the
            top navigation bar after you have followed or joined a 
            community, if you are looking for communities you follow.<br/><br/>
            <img src ={mycommunitiesimage} alt="my communities"/><br/><br/>
            From this page, you can decide to go to the community's home page to view 
            information about a community you follow. Go to the community home page by 
            clicking on any community.   <br/><br/>
            <img src ={communityimage} alt="community image"/><br/><br/>
            You can also<Link to =""> unfollow a community</Link> you already follow.<br/><br/>
          </Description>
        </div>
      </div>
    </StyledCommunitiesIFollow>
  )
}

export default CommunitiesIFollow