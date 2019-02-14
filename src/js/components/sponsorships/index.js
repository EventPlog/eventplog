import React from 'react'
import styled from 'styled-components'
import { Route, Switch, Redirect } from 'react-router-dom'
import PartnerSteps from './scenes/partner-steps'

const StyledEvents = styled.div`

`

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