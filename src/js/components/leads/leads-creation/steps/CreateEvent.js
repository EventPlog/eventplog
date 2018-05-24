import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  mockUpdateTeamMembers as updateTeamMembers,
  mockUpdateOrganizer as updateOrganizer
} from '../../actions'
import RegisterTeamMembers from './register-team-members'
import RegisterOrganizer from './register-organizer'
import { withRouter } from 'react-router-dom'

import {
  Icon,
  Step,
  Progress
} from 'semantic-ui-react'

class StepExampleAttached extends Component {
  state = {step: 1}

  getStateAndHelpers = () => {
    return {
      incrementStep: () => this.setState({step: this.state.step + 1}),
      decrementStep: () => this.setState({step: this.state.step + 1})
    }
  }

  render() {
    return (
      <div>
        <Step.Group stackable='tablet'>
          <Step active={this.state.step === 1}>
            <Icon name='truck'/>
            <Step.Content>
              <Step.Title>Bring Team members in</Step.Title>
              <Step.Description>
                Add people you're working with.
              </Step.Description>
            </Step.Content>
          </Step>

        </Step.Group>

      </div>
    )
  }
}


const StyledForm = styled.form`
  width: 100%;
  
  > .ui.form .field .ui.button.default {
    background: var(--gray);
    color: var(--activeLink);
    border: 1px solid var(--activeLink);
    
    &:hover {
      background: var(--activeLink);
      color: var(--gray);
    
  }
`

class CreateEvent extends Component {
  state = {
    teamMembers: '',
    step: 1,
    organizer: {}
  }

  changeNewLead = (key, value) => this.setState({[key]: value })

  handleSubmitChange = (key) => {
    const { [key]: value } = this.state
    const { lead } = this.props
    this.props.updateTeamMembers(lead.id, {[key]: value})
  }

  changeOrganizer = (key, value) => {
    this.setState({organizer: {...this.state.organizer, [key]: value}})
  }

  registerOrganizer = async () => {
    const { organizer } = this.state
    const { lead } = this.props
    let event = await this.props.updateOrganizer(lead.id, organizer)
    this.props.history.push('/events', {state: { event }});
  }

  submitTeamMembers = () => {
    const { teamMembers } = this.state
    const { lead } = this.props
    this.props.updateTeamMembers(lead.id, teamMembers)
    this.setState({step: 2})
  }

  changeStep = (cb) => {
    return {
      step: cb(this.state.step)
    }
  }

  getPropsAndActions = () => ({
    handleChange: this.changeNewLead,
    changeStep: this.changeStep,
  })

  renderCurrentStep = () => (
    this.state.step === 1
      ? <RegisterTeamMembers {...this.getPropsAndActions()}
        handleSubmit={this.submitTeamMembers} />
      : <RegisterOrganizer handleChange={this.changeOrganizer}
                           changeStep={this.changeStep}
                           handleSubmit={this.registerOrganizer} />
  )

  render() {
    const { lead, step } = this.state

    return (
      <StyledForm>
        <Progress value={step} total={2} />
        {this.renderCurrentStep()}
      </StyledForm>
    )
  }
}

const mapStateToProps = (state) => ({
  lead: state.lead
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateTeamMembers,
    updateOrganizer
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateEvent))