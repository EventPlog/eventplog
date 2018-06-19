import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import TermsAndConditionsPage from './TermsAndConditionsPage'
import {media} from '../../styles/mixins'

const StyledTermsAndConditions = styled.div`
margin: 50px 100px;
  ${
    media.phone`
      margin: 10px 20px;
    `
  }
`

const TermsAndConditions = () => (
  <StyledTermsAndConditions>
  <Switch>
    <Route exact path="/privacy-policy" component={TermsAndConditionsPage}/>
    <Route exact path="/terms-and-conditions" component={TermsAndConditionsPage} />
  </Switch>
</StyledTermsAndConditions>
)

export default TermsAndConditions