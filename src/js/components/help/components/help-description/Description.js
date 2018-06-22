import React from 'react'
import styled from 'styled-components'

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
  


`

const Description = ()=>{
  return(
    <StyledDescription>
  <div className="help-description-container">
    <h6 className="help-topic">Getting Started</h6>
    <img></img>
    <div className="help-description">
      Joining a new community or creating a new one? These guides will take you on a fun, quick and easy steps to using Eventplog.<br/>
     
      Are you new on Eventplog? <br/>
      If yes, you are at the right place to be and we are delighted to have you here. <br/>
      Welcome to Eventplog!
      You can join any community that interest you or create your own, if there is no existing community here for your dazzling interest.
</div>
  </div>
  </StyledDescription>
  )
}

export default Description