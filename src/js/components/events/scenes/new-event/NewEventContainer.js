// external
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

/// utilities
import { createEvent, mockCreateEvent } from '../../actions'
import {getUserCommunities, mockGetUserCommunities,getCommunity} from '../../../communities/actions'


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
    searchQuery:'',
    selected: null,
    isModalOpen: false,
  }

  componentWillMount(props) {
    this.getData()
  }

  handleChange = (e) => {
    this.setState({ event: {...this.state.event, [e.target.name]: e.target.value}})
  }

  onSelectChange=(e)=>{
    this.setState({ selected: e.target.value});
  }

  onSearchChange = (e, data) => {
    console.log(e.target.searchQuery)
    this.setState({ searchQuery: e.target.searchQuery });
  }

  onCloseModal=(e)=>{
    this.setState({isModalOpen:false})
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
    mockGetUserCommunities: this.mockGetUserCommunities,
    getCommunity:getCommunity,
    onSearchChange: this.onSearchChange,
    onSelectChange:this.onSelectChange,
    onCloseModal: this.onCloseModal
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
    mockGetUserCommunities,
    getCommunity
  }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventContainer))
