import React, { Component } from 'react'
import styled from 'styled-components'
import { CreateEvent, CreateUser } from './steps'
import TmnCaptionedWrapper from '../../shared/tmn-captioned-wrapper'
import LeadsHeader from '../leads-header'

const StyledLeadsCreation = styled.div`
`


class LeadsCreation extends Component {
  render() {
    const steps = [
      {name: 'StepOne', component: <CreateEvent/>},
      {name: 'StepTwo', component: <CreateUser/>},
    ];
    const menu = [
      {text: 'I have an account >', url: '/login'}
    ]
    const { lead } = this.props.location.state ? this.props.location.state : {}
    const defaultTitle = "Click to change to your event title"
    return (
      <StyledLeadsCreation>
        <LeadsHeader menu={menu} />
        <TmnCaptionedWrapper title={lead && Boolean(lead.title) ? lead.title : defaultTitle} >
          <CreateEvent/>
        </TmnCaptionedWrapper>
      </StyledLeadsCreation>
    )
  }
}

export default LeadsCreation
