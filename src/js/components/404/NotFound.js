import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

//======== INTERNAL ============
import Button from 'js/components/shared/button'
import createLoader from 'js/components/shared/loading/createLoadable'

const SuggestionsWidget = createLoader(() =>
  import('./components/suggestions-widget' /* webpackChunkName: "SuggestionsWidget" */), 'SuggestionsWidget')

const StyledNotFound = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 3rem auto;
  padding: 1rem;


  .search-gif {
    width: 300px;
    height: 200px;
    background-color: var(--activeLink);
    background-image: url(https://res.cloudinary.com/eventplog/image/upload/c_scale,w_auto,dpr_auto/v1551826020/comments/searching_a4pgps.gif);
    background-size: cover;
    
  }
  
  button {
    padding: 0.5rem;
  } 
  
  li {
    margin-bottom: 1rem;
  }
  
  .chat-icon {
    background: green;
    color: white;
    padding: 0.4rem 0 0.4rem 0.6rem;
    border-radius: 50%;
    font-size: 2rem;
    text-align: center;
    margin: 0 0.4rem;
    
    i {
      margin: 0;
      padding: 0;
      width: auto;
      height: auto;
    }
  } 
  
  .description {
    font-size: 1.3rem;
  }
`

const EventNotFound = ({message}) => {
  return (
    <StyledNotFound>
      <div className="search-gif" />
      <h3 className="heading">
        We're sorry! 😞
      </h3>

      <p className="description">
        {message || `We've searched every party 🎉but couldn't find what you're looking for. Here's how you could help:`}
      </p>

      <ol className="description">
        <li>Confirm you're visiting the right route.</li>
        <li><Button onclick={() => window.location.reload()}>Refresh</Button> this page.</li>
        <li>Take a screenshot of this error and share with us <Link target="_blank" to="https://spectrum.chat/eventplog">on spectrum.</Link></li>
        <li>Click on the
          <span className="chat-icon">
            <Icon name="envelope circle" />&nbsp;
          </span>
          icon at the bottom left of your screen to start a chat with an advocate.

        </li>
      </ol>

      <SuggestionsWidget />
    </StyledNotFound>
  )
}

export default EventNotFound