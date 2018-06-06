import React from 'react'
import styled from 'styled-components'
import colors from '../../../../../../theme/colors'
import Button from '../../../../shared/button'
import {Link} from 'react-router-dom'

const StyledCommunityInterest = styled.div`


.communityinterestdiv{
    background: #f8f8f8;
    padding: 10px 20px;
}
.communityinterestchild{
  
}
.communityinterestheader{
    margin: 10px 10px;
    padding-top: 35px;
    padding-left: 15px;
}
.communityinterestcard{
    background: ${colors.white};
    margin: 30px 20px; 
}
.communityinterestimage img{
    
    
}
img{
    width:100%;
    height: 100px;
}
.communityinterestinfo{
 display: block;
 margin: 5px 22px;
}
.communityinterestbutton{

}
.communityinterestinfoheader{
    color: ${colors.primary}
    font-size: 1.5rem;
}


`
const CommunityInterest = () =>{
    return(
        <StyledCommunityInterest>
        <div className="communityinterestdiv">
            <div className="communityinterestchild">
            <div className="communityinterestheader">
                <p>Because of your interest<br/> in Developer Circles</p>
            </div>
            <div className="communityinterestcard">
                <div className="communityinterestimage">
                <img src="image"/>
                </div>
                <div className="communityinterestinfo">
                    <div className="communityinterestinfoheader">Title</div>
                    <div className="communityinterestcategory">Technology Community</div>
                    <div className="communityinterestcommunitysize">220 members</div>
                    <div className="communityinterestbutton"><Button>Join</Button></div>
                </div>
            </div>
            </div>
        </div>
        </StyledCommunityInterest>
    )
}

export default CommunityInterest


