import React from 'react'
import { Redirect } from 'react-router-dom'
import styled, { css } from 'styled-components'

//======== Internal Components =========
import EventsSection from 'js/components/events/scenes/events/components/events-section'
import { media } from 'js/styles/mixins'

const generateTitle = (toggleShowEventToSponsor) => (
  <div className="header">
    Upcoming Events
    <Form>
      <Form.Field>
        <Checkbox checked={visibility_status == 'public_event'}
                  onClick={(e, attr) =>
                        handleChange('visibility_status',
                                      attr.checked ? 'public_event' : 'private_event' ) }
                  label='Make this event public' />
      </Form.Field>
    </Form>

  </div>
)
const UserEvents = ({
  events = {},
  past_events = {},
  getEvents,
  getPastEvents,
  attendEvent,
  currentUser,
  slug,
  community,
  search = ''
}) => {

  // redirect when no user event unless already redirected
  if (
    currentUser &&
    !slug &&
    (!community || !community.id) &&
    !events.loading &&
    !events.error &&
    events.data &&
    events.data.length == 0 &&
    search.indexOf('activeIndex') == -1
  ) {
    {/*return <Redirect to="/events?activeIndex=1" />*/}
  }

  return (
    <div>
      <EventsSection key="user-upcoming-events-section"
                     title="Upcoming" {...{events, getEvents, attendEvent }} />
      <EventsSection key="user-past-events-section"
                     title="Past"
                     events={past_events}
                     getEvents={getPastEvents}
                     attendEvent={attendEvent} />

    </div>
  )
}

export default UserEvents