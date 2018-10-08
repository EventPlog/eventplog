// external
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

/// utilities
import { createEvent, mockCreateEvent } from '../../actions'
import {getUserCommunities, mockGetUserCommunities} from '../../../communities/actions'


export class EventContainer extends Component {
  state = {
    event: {
      title: '',
      start_time: new Date(),
      end_time: new Date(),
      community_id: this.props.community.id,
      visibility_status: 'public_event',
    },
    error: false,
    eventCreated: false,
  }

  componentWillMount(props) {
    this.getData()
  }

  handleChange = (e) => {
    this.setState({ event: {...this.state.event, [e.target.name]: e.target.value}})
  }

  submitEvent = () => {
    this.setState({ loading: true })
    this.props.createEvent(this.state.event).then(event => {
      this.setState({event, loading: false, eventCreated: true})
    })
      .catch(error => this.setState({loading: false, error}))
  }

  getData() {
    //this.props.getUserCommunities()
    this.props.mockGetUserCommunities({})  
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    handleChange: this.handleChange,
    submitEvent: this.submitEvent,
    userCommunities:this.userCommunities,
    mockGetUserCommunities: this.mockGetUserCommunities
  })

  render() {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const { community = {}, user_communities = {}} = state.communities
  return { 
    community, 
    user_communities 
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    createEvent,
    getUserCommunities,
    mockGetUserCommunities
  }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventContainer))
