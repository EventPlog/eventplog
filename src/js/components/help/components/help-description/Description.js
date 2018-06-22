import React from 'react'
import styled from 'styled-components'
import image from '../../../../../img/help-pages/help login page desktop.jpg'
import {Link} from 'react-router-dom'

const StyledDescription =styled.div`
.help-description-container{
  margin 5px;
  padding: 5px;
  max-width: 600px;
  margin-left: 100px;
}

}
.help-description{
  font-size: 15px;
  max width:650px;
}

  .help-topic{
    margin: 10px auto;
    text-align: center;
  }
  img{
    width:600px;
    height:500px;
  }
  


`

const Description = ()=>{
  return(
    <StyledDescription>
  <div className="help-description-container">
    <h6 className="help-topic">Getting Started</h6>
     
    
    <div className="help-description">
      <br/>Are you new on Eventplog? <br/><br/>
      If yes, you are at the right place to be and we are delighted to have you here. <br/><br/>
      Welcome to Eventplog!
    <br/><br/>These guides will take you on fun, quick and easy steps to using Eventplog.<br/><br/>
      <img img src={image}></img>
      <br/><br/>To get started on Eventplog, you need to Signup or Login if you already have an account!
      <br/><br/>
        You can also learn how to <Link to="/join-a-community/help">follow</Link> a community that interests you or how to 
        <Link to ="create-community/help"> create</Link> your own, if there is no existing 
        community here that dazzles your interest.
        <br/><br/>
        If you already are a part of a community you can learn how to <Link to="/events/help">view your community's events</Link>
        <br/><br/>
        For community owners, you might be interested in knowing how to <Link to="create-event/help">create events</Link> for your community or how
        to <Link to="/backstage/help">plan your event</Link> from inception to finish
        <br/><br/> 
</div>
  </div>
  </StyledDescription>
  )
}

export default Description