import React from 'react'
import styled from 'styled-components'

// local
import peopleDancing from 'img/giphys/black-guy-celebrating2.gif'
import { media } from 'js/styles/mixins'
import Button from 'js/components/shared/button'
import { genCommunityLink } from 'js/utils'

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

const ContentAfterCommunitySubmit = ({ community = {}, handleChange }) => (
  <StyledContent className="text-center">
    <h3>You just created a community!!!</h3>
    <img src={peopleDancing} alt="people dancing" />
    <p>
      Thank you for all you do to strengthen the ecosytem.
    </p>
    <p>
      You can go ahead and change your banner image, tag line, etc.
    </p>
    {/*<p>
      To get the best out of eventplog as an community leader, consider going through the following resources:
    </p>
    <ul>
      <li>
        <Link to="help.eventplog.com/working-with-untrained-volunteers">
          Setting up your community page.
        </Link>
      </li>
      <li>
        <Link to="help.eventplog.com/working-with-untrained-volunteers">
          Working best with untrained volunteers on community projects.
        </Link>
      </li>
      <li>
        <Link to="help.eventplog.com/working-with-untrained-volunteers">
          Handling check-ins in ways that sets you up for an engaging meetup.
        </Link>
      </li>
      <li>
        <Link to="help.eventplog.com/working-with-untrained-volunteers">
          Use feedback to improve your team at every opportunity.
        </Link>
      </li>
    </ul>*/}
    <Button.Link to={`${genCommunityLink(community)}`} className="medium lowercase">
      Take me to my community update page
    </Button.Link>
  </StyledContent>
)

export default ContentAfterCommunitySubmit

