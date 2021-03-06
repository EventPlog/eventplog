import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import TermsAndConditionsPage from './TermsAndConditionsPage'
import PrivacyPolicy from './PrivacyPolicy'
import {media} from '../../styles/mixins'

const StyledTermsAndConditions = styled.div`
`
const Legal = () => (
  <StyledTermsAndConditions>
  <Switch>
    <Route exact path="/legal/privacy-policy" component={PrivacyPolicy}/>
    <Route exact path="/legal/terms-and-conditions" component={TermsAndConditionsPage} />
  </Switch>
</StyledTermsAndConditions>
)
export default Legal