import React from 'react'
import styled from 'styled-components'
import colors from '../../../../../../styles/theme/colors'
import Button from '../../../../shared/button'
import {Link} from 'react-router-dom'

const StyledCommunityInterest = styled.div`


.community-interest-div{
    background: #f8f8f8;
    padding: 10px 20px;
}

.community-interest-header{
    margin: 10px 10px;
    padding-top: 35px;
    padding-left: 15px;
}
.community-interest-card{
    background: ${colors.white};
    margin: 30px 20px; 
}

img{
    width:100%;
    height: 100px;
}
.community-interest-info{
 display: block;
 margin: 5px 22px;
}

.community-interest-info-header{
    color: ${colors.primary}
    font-size: 1.5rem;
}


`
const CommunityInterest = () =>{
    return(
        <StyledCommunityInterest>
        <div className="community-interest-div">
            <div className="community-interest-child">
            <div className="community-interest-header">
                <p>Because of your interest<br/> in Developer Circles</p>
            </div>
            <div className="community-interest-card">
                <div className="community-interest-image">
                <img src="image"/>
                </div>
                <div className="community-interest-info">
                    <div className="community-interest-info-header">Title</div>
                    <div className="community-interest-category">Technology Community</div>
                    <div className="community-interest-community-size">220 members</div>
                    <div className="community-interest-button"><Button>Join</Button></div>
                </div>
            </div>
            </div>
        </div>
        </StyledCommunityInterest>
    )
}

export default CommunityInterest


