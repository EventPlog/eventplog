import React from 'react'

//=========== INTERNAL ===========
import createLoader from 'js/components/shared/loading/createLoadable'
import SteppedComponents from 'js/components/shared/stepped-components'
import { genEventLink } from 'js/utils'

const NewEvent = createLoader(() =>
  import('js/components/events/scenes/new-event' /* webpackChunkName: "Presentations" */), 'FeedbackForm')

const ChangeBannerImage = createLoader(() =>
  import('../change-banner-image' /* webpackChunkName: "Presentations" */), 'FeedbackForm')

const SetupRSVPQuestions = createLoader(() =>
  import('../setup-rsvp-questions' /* webpackChunkName: "Presentations" */), 'FeedbackForm')

const SponsorshipOffer = createLoader(() =>
  import('js/components/sponsorships/scenes/sponsorship-offer' /* webpackChunkName: "Presentations" */), 'FeedbackForm')


const NewEventSteps = ({ event = {}, newEvent, updateState }) => (
  <SteppedComponents loginRequired
                     lastStep={{link: genEventLink(event), title: 'Go to Event'}}
                     components={[
                       {title: 'Create your event', component: NewEvent, props: {newEvent, updateState} },
                       {title: 'Choose a display image', component: ChangeBannerImage},
                       {title: 'Setup RSVP questions (optional)', component: SetupRSVPQuestions},
                       {title: 'Add sponsorship details (optional)', component: SponsorshipOffer},
                     ]}
  />
)

export default NewEventSteps