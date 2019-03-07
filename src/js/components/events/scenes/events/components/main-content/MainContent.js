import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import { darken } from 'polished'

//======== Internal Components =========
import ContentSection from 'js/components/shared/v2/content-section'
import HomepageEventsSection from 'js/components/events/scenes/events/components/events-section/HomepageEventsSection'
import EventsSection from 'js/components/events/scenes/events/components/events-section'
import Sidebar from 'js/components/shared/v2/sidebar'
import { media } from 'js/styles/mixins'

const styles = css`
  width: 100%;

  .ui.tab {
    box-shadow: none;
    border: 0;
    padding: 1rem 0;
    
    .pagination.secondary.menu {
       display: inline-flex;
    }
  }
  
  .content-header {
    margin: 0;
    letter-spacing: 0.01rem;
    
    ${
      media.phone`
        margin: 0;
      `
    } 
  }

  .events_container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .content-panel {
    flex: 1;

    h5.content-header {
      margin-top: 2rem;
    }
  }

  .title {
    color: ${props => props.theme.activeLink};
  }
  
  .sidebar-holder {
    flex: 2;
    max-width: 350px;
  }
  
  .body-holder {
    flex: 5;
  }
`

export const MainContent = ({
  events = {},
  past_events = {},
  getPastEvents,
  attendEvent,
  getEvents,
  communities_suggestions = {},
  followCommunity,
  className,
  activeIndex,
}) => {
  const shouldShowSeeMore = communities_suggestions && communities_suggestions.data

  return (
    <div className={className}>
      <ContentSection>
        <ContentSection.Body className="body-holder">
          <div className="events_container">
            <HomepageEventsSection title="Upcoming Events"
                                   getEvents={getEvents}
                                   events={events} />
          </div>    
        </ContentSection.Body>
        <ContentSection.Sidebar className="sidebar-holder">
          <Sidebar.Communities {...{communities: communities_suggestions, followCommunity}}>

            { shouldShowSeeMore &&
            <Link to="/communities">
              <div className="see-more">
                See more communities <span><Icon name="angle right" /></span>
              </div>
            </Link>
            }
          </Sidebar.Communities>
        </ContentSection.Sidebar>
      </ContentSection>

      <ContentSection>
        <ContentSection.Body className="body-holder">
          <div className="events_container">
            <EventsSection key="user-past-events-section"
                          title="Past"
                          events={past_events}
                          getEvents={getPastEvents}
                          attendEvent={attendEvent} />
          </div>    
        </ContentSection.Body>
        <ContentSection.Sidebar className="sidebar-holder">
          <Sidebar.Communities {...{communities: communities_suggestions, followCommunity}}>

            { shouldShowSeeMore &&
              <Link to="/communities">
                <div className="see-more">
                  See more communities <span><Icon name="angle right" /></span>
                </div>
              </Link>
            }
          </Sidebar.Communities>
        </ContentSection.Sidebar>
      </ContentSection>

    </div>
  )
}

export default styled(MainContent)`${styles}`