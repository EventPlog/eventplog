import React from 'react'
import styled from 'styled-components'
import Button from 'js/components/shared/button'

import EventsSection from 'js/components/events/scenes/events/components/events-section'
import CommunitiesSection from 'js/components/events/scenes/events/components/communities-section'
import Sidebar from 'js/components/shared/sidebar'

const StyledEvent = styled.div`
  flex: 1;
  height: 30vh;
  margin-top: 100px
`

const Event = ({
  event,
  community,
  events_suggestions = [],
  communities_suggestions = []
}) => {
  return (
    <StyledEvent>
      <div className="banner">
        <div className="overlay" />
        <div className="content">
          <div className="title">
            Tech is In you
          </div>
          <div className="meta">
            <ul>
              <li>28th June, 2018</li>
              <li>3:00pm - 6:00pm</li>
            </ul>
            <ul>
              <li>213 people interested.</li>
            </ul>
            <Button>Go Backstage</Button>
          </div>
        </div>
      </div>
      <section className="main-body">
        <p className="event-description">
          Clear you calendars, it’s going down. his HTML file is a template. If you open it directly in the browser, you will see an empty page.
        </p>
        <p>
          "You can add webfonts, meta tags, or analytics to this file.&nbsp;
          The build step will place the bundled scripts into the {'<body>'} tag.&nbsp;
          To begin the development, run `npm start` or `yarn start`.&nbsp;
          To create a production bundle, use `npm run build` or `yarn build`.
        </p>

        <EventsSection title={`Because of your interest in ${community.name}`}
                       events={events_suggestions} />
      </section>

      <Sidebar title="Awesome communities">
        <CommunitiesSection {...{communities: communities_suggestions}} />
      </Sidebar>
    </StyledEvent>
  )
}

export default Event;