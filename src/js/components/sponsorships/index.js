import React from 'react'
import styled from 'styled-components'
import { Route, Switch, Redirect } from 'react-router-dom'
import createLoader from 'js/components/shared/loading/createLoadable'
import SteppedComponents from 'js/components/shared/stepped-components'

const StyledEvents = styled.div`

`

const SponsorshipOffer = createLoader(() =>
  import('./scenes/sponsorship-offer' /* webpackChunckName: "SponsorshipOffer"*/))

const SponsorshipPartner = createLoader(() =>
  import('./scenes/sponsorship-partner' /* webpackChunckName: "SponsorshipPartner"*/))

const SponsorshipReview = createLoader(() =>
  import('./scenes/sponsorship-review' /* webpackChunckName: "SponsorshipReview"*/))

const SponsorshipPayment = createLoader(() =>
  import('./scenes/sponsorship-payment' /* webpackChunckName: "SponsorshipPayment"*/))

const PartnerSteps = () => (
  <SteppedComponents loginRequired
                     lastStep={{link: '/', title: 'Back to home'}}
                     components={[
                       {title: 'Select package(s) to sponsor', component: SponsorshipOffer},
                       {title: 'Set organization and conditions', component: SponsorshipPartner},
                       {title: 'Review sponsorship order', component: SponsorshipReview},
                       {title: 'Make Payment', component: SponsorshipPayment},
                     ]}
  />
)

const Sponsors = () => {
  if (process.env.REACT_APP_SPONSORSHIP_ENABLED == 'false') return <Redirect to='/' />
  return(
    <Switch>
      <Route exact path="/" component={() => <p>Coming soon . . .</p>}/>
      <Route exact path="/e/:event_id/sponsors/new" component={PartnerSteps}/>

    </Switch>
  )
}

export default Sponsors