import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import TermsAndConditionsPage from './TermsAndConditionsPage'

const StyledTermsAndConditions = styled.div`
display: flex;
margin: 50px 100px;
`

const TermAndConditions = () => (
  <StyledTermsAndConditions>
  <Switch>
    <Route exact path="/" render={() => <div>Coming Soon...</div>}/>
    <Route exact path="/terms-and-conditions" component={TermsAndConditionsPage} />
  </Switch>
</StyledTermsAndConditions>
)

export default TermAndConditions