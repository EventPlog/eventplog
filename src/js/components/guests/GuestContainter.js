import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Auth from 'js/auth/actions'
import { getValueOnChange } from 'js/utils/formHelpers'
import {
  updateGuest,
  deleteGuest,
  checkInByForm
} from './actions'

class GuestContainter extends Component {
  state = {
    id: null,
    user: {},
    check_in_user: false,
    success: false,
    loading: false,
    feedback_url: ''
  }

  handleChange = (key, value) => {
    this.setState({user: {
      ...this.state.user, [key]: value
    }})
  }

  handleStateChange = (key, value) => (
    this.setState({[key]: value})
  )

  handleSubmit = async (e) => {
    this.setState({loading: true})
    const { id, user, check_in_user} = this.state
    const payload = {
      id, check_in_user,
      event_id: this.props.event.id,
      check_in: {id, ...user}
    }
    let res = await this.props.checkInByForm(payload)
    if (res) {
      this.setState({
        success: true,
        loading: false,
        user: id ? user : user,
      })
    }
  }

  handleDelete = () => {
    var confirmed = confirm('Are you sure you want to delete this guest?')
    if (!confirmed) { return }
    return this.props.deleteGuest(this.props.guest.id)
  }

  componentWillMount(props) {
    if (Auth.currentUser) this.setState({user: Auth.currentUser})
  }

  getStateAndActions = () => ({
    ...this.props,
    ...this.state,
    handleChange: this.handleChange,
    handleSubmit: this.handleSubmit,
    handleStateChange: this.handleStateChange,
    handleDelete: this.handleDelete,
  })

  render () {
    return this.props.children(this.getStateAndActions())
  }
}

const mapStateToProps = (state, ownProps) => {
  return {event: state.events.event}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    checkInByForm,
    updateGuest,
    deleteGuest,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestContainter)