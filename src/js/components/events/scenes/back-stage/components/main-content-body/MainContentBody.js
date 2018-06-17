import React from 'react'
import styled from 'styled-components';

// internal components
import EventPageContent from './EventPageContent';
import { media } from 'js/styles/mixins'

// assets
import techIsInYou from 'img/tech_is_in_you.png'


const StyledMainContent = styled.div`
  display: flex;
  flex: 1;
  overflow-y: scroll;
  
  .event-workplace {
    position: relative;
    flex: 1;
  }
  
  .banner-image {
    height: 400px;
    position: absolute;
    width: 100%;
  }
  
  .container {
    background: transparent;
    position: relative; 
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    
    > * {
      width: 100%;
    }
  }
  
  .workplace {
    max-width: 800px;
    margin: auto;
    background: #fff;
    border-radius: 10px;
    
    > div {
      margin: 2rem 0;
    }
    
    ${
      media.phone`
       border-radius: 0;
      `
    }
  }
  
  .backstage-header {
    max-width: 800px;
    margin: auto;
    margin: 4rem auto 2rem;
    text-shadow: 1px 2px 4px #000;
    
    h3 {
      color: #fff;
      font-weight: 600; 
      padding: 0 2rem;
    
    }
  }
`

const MainContentBody = ({ event = {}, ...otherProps }) =>
  <StyledMainContent>
    <div className="event-workplace full-height">
      <div style={{ backgroundImage: `url(${event.featured_image || techIsInYou})` }}
           className="banner-image absolute-positioned">
        <div className="overlay"></div>
      </div>
      <div className="container">
        <div className="backstage-header">
          <h3>
            { event.title || 'Tech is in you' }
          </h3>
        </div>
        <div className="workplace full-height">
          <EventPageContent {...{event, ...otherProps}} />
        </div>
      </div>
    </div>
  </StyledMainContent>

export default MainContentBody;
