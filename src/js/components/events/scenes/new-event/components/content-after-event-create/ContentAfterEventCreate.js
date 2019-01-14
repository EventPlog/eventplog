import React from 'react'
import { Form, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// local
import peopleDancing from 'img/giphys/black-guy-celebrating2.gif'
import { media } from 'js/styles/mixins'
import Button from 'js/components/shared/button'
import { genEventLink } from 'js/utils'

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  > img {
    max-width: 500px;
    margin: 50px auto; 
    
    ${
      media.phone`
        width: 100%;
      `
    }
  }
  
  .medium.lowercase {
    text-transform: none;
    font-size: 1.2em;
    font-weight: 400;
    margin: 30px auto;
  }
  
  ul {
    font-size: 1.1em;
    font-weight: 400;
    line-height: 1.8em;
  }
`

const ContentAfterEventSubmit = ({
  event = {},
  handleChange,
  loading,
  error
}) => (
  <StyledContent className="text-center">
    <h3>You just created an event!!!</h3>
    <img src={peopleDancing} alt="people dancing" />
    <p>
      Congratulations!
    </p>
    <p>
      You event is not yet live since you might want to make changes to the banner image, RSVP form questions and packages for sponsors.
    </p>
    <p>
      Click the continue button to get these progressively done in the next few steps.
    </p>
     {/*<ul>*/}
       {/*<li>*/}
         {/*<Link to="help.eventplog.com/working-with-untrained-volunteers">*/}
           {/*Use feedback to improve your team at every opportunity.*/}
        {/*</Link>*/}
      {/*</li>*/}
    {/*</ul>*/}
    {/*<Button.Link to={`${genEventLink(event, event.community)}`} className="medium lowercase">*/}
      {/*Show me my event*/}
    {/*</Button.Link>*/}
  </StyledContent>
)

export default ContentAfterEventSubmit

