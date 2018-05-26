import React from 'react'
import styled from 'styled-components';

// internal components
import EventPageContent from './EventPageContent';

// assets
import techIsInYou from '../../../../../../img/tech_is_in_you.png'


const StyledMainContent = styled.div`
  flex: 1;
  height: 100vh;
`

const MainContentBody = ({ event = {}, ...otherProps }) =>
  <StyledMainContent>
    <div className="event-workplace full-height">
      <div style={{ backgroundImage: `url(${event.featured_image || techIsInYou})` }}
           className="banner-image absolute-positioned"/>
      <div className="overlay">
      </div>
      <div className="event-workplace-holder full-height absolute-positioned">
        <div className="container full-height">
          <div className="title">
            { event.title }
          </div>
          <EventPageContent {...{event, ...otherProps}} />
        </div>
      </div>
    </div>
  </StyledMainContent>

export default MainContentBody;
