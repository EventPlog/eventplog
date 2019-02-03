import React from 'react'
import styled from 'styled-components'
import { Route, Switch} from 'react-router-dom'
import createLoader from 'js/components/shared/loading/createLoadable'

const StyledEvents = styled.div`

`

const PartnersList = createLoader(() =>
  import('./scenes/partners' /* webpackChunckName: "PartnersList"*/))

const Partner = createLoader(()=>
  import('./scenes/partner' /*webpackChunckName: "Partner"*/))

const NewPartner = createLoader(()=>
  import('./scenes/new-partner' /*webpackChunckName: "NewPartner"*/))

const Partners = ()=>{
  return(
    <Switch>
      <Route exact path="/" component={PartnersList}/>
      <Route exact path="/partners" component={PartnersList}/>
      <Route exact path="/partners/new" component={NewPartner}/>

      <Route exact path="/e/:event_id/partners" component={PartnersList}/>
      <Route exact path="/e/:event_id/partners/:id" component={Partner}/>

      <Route exact path="/c/:community_id/e/:event_id/partners" component={PartnersList}/>
      <Route exact path="/c/:community_id/e/:event_id/partners/:id" component={Partner}/>
    </Switch>
  )
}

export default Partners