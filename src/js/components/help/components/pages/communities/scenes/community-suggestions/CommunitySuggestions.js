import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../../../help-topics'
import Topic from '../../../../topic'
import Description from '../../../../help-description'
import {Link } from 'react-router-dom'
import communitysuggestionimage from '../../../../../../../../img/help-pages/communities.png'


const StyledCommunitySuggestions = styled.div`
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

const Communitysuggestions = () =>{
  return(
    <StyledCommunitySuggestions>
      <div className="help-description-container">
        <div><Sidebar/></div>
        <div className="help-main-content"><Topic>Community Suggestions</Topic>  
          <Description>
            Communities you might be interested in are always shown to you based on your previous 
            event interests or communities you already follow.<br/><br/> Community suggestions 
            can be found as a section on the <Link to ="">communities page </Link>. Click on communities
            on the navigation bar and then scroll right to the buttom of the page to find suggestions.
            <br/><br/><img src={communitysuggestionimage} alt="community suggestions"/>
          </Description>
        </div>
      </div>
    </StyledCommunitySuggestions>
  )
}

export default Communitysuggestions