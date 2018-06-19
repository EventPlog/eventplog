import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import TermsAndConditionsPage from './TermsAndConditionsPage'

const StyledTermsAndConditions = styled.div`
display: flex;
margin: 50px 100px;
`

const TermsAndConditions = () => (
  <StyledTermsAndConditions>
  <Switch>
    <Route exact path="/privacy-policy" component={TermsAndConditions}/>
    <Route exact path="/terms-and-conditions" component={TermsAndConditionsPage} />
  </Switch>
</StyledTermsAndConditions>
)

export default TermsAndConditions