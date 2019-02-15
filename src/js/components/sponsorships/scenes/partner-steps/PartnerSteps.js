import React from 'react'
import styled from 'styled-components'

//========== INTERNAL ===========
import BannerPage from 'js/components/shared/banner-page'
import createLoader from 'js/components/shared/loading/createLoadable'
import SteppedComponents from 'js/components/shared/stepped-components'

const SponsorshipOffer = createLoader(() =>
  import('../sponsorship-offer' /* webpackChunckName: "SponsorshipOffer"*/))

const SponsorshipPartner = createLoader(() =>
  import('../sponsorship-partner' /* webpackChunckName: "SponsorshipPartner"*/))

const SponsorshipReview = createLoader(() =>
  import('../sponsorship-review' /* webpackChunckName: "SponsorshipReview"*/))

const SponsorshipPayment = createLoader(() =>
  import('../sponsorship-payment' /* webpackChunckName: "SponsorshipPayment"*/))

const PartnerSteps = ({ event }) => (
  <BannerPage title={event.title} bannerImage={event.featured_image}>
    <SteppedComponents loginRequired
                       lastStep={{link: '/', title: 'Back to home'}}
                       components={[
                         {title: 'Select package(s) to sponsor', component: SponsorshipOffer},
                         {title: 'Set organization and conditions', component: SponsorshipPartner},
                         {title: 'Review sponsorship order', component: SponsorshipReview},
                         {title: 'Make Payment', component: SponsorshipPayment},
                       ]}
    />
  </BannerPage>
)

export default PartnerSteps
