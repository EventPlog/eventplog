import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// internal components
import EventPageContent from './EventPageContent';
import { media, maxMedia } from 'js/styles/mixins'
import { genEventLink } from 'js/utils'

const StyledMainContent = styled.div`
  display: flex;
  flex: 1;
  padding-bottom: 4rem;
  background: ${props => props.theme.gray};
  
  .event-workplace {
    position: relative;
    flex: 1;
  }
  
  .banner-image {
    height: 400px;
    position: absolute;
    width: 100%;
    background-size: cover;
    
    ${
      media.phone`
        max-height: 250px;
      `
    }
  }
  
  .container {
    background: transparent;
    position: relative; 
    display: flex;
    flex-direction: column;
    
    > * {
      width: 100%;
    }
  }
  
  .workplace {
    margin: auto;
    background: #fff;
    border-radius: 10px;
    
    > div {
    }
    
    ${
      maxMedia.tablet`
       border-radius: 0;
      `
    }
  }
  
  .backstage-header {
    max-width: 1200px;
    margin: auto;
    margin: 4rem auto 2rem;
    text-shadow: 1px 2px 4px #000;
    
    h3 a {
      color: #fff;
      font-weight: 600; 
      padding: 0 2rem;
      display: inline-block; 
      
      &:hover {
        color: var(--activeLink);
      }
    }
  }
`

const MainContentBody = ({ event = {}, ...otherProps }) => {
  const { community = {} } = event || {}
  return (
    <StyledMainContent>
      <div className="event-workplace full-height">
        <div style={{ backgroundImage: `url(${event.featured_image || '/sample-bg.jpg'})` }}
             className="banner-image absolute-positioned">
          <div className="overlay"></div>
        </div>
        <div className="container">
          <div className="backstage-header">
            <h3>
              { event.title
                ? <Link to={genEventLink(event, community)}>{event.title}</Link>
                : <Link to={`${genEventLink(event)}/backstage/settings`}>Change Title</Link> }
            </h3>
          </div>
          <div className="app-container workplace full-height">
            <EventPageContent {...{event, ...otherProps}} />
          </div>
        </div>
      </div>
    </StyledMainContent>
  )
}

export default MainContentBody;
