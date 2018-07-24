import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Auth from 'js/auth/actions'
import Validator from 'js/utils/validator'
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

  getPayload = () => {
    const { id, user, check_in_user} = this.state
    return {
      id, check_in_user,
      event_id: this.props.event.id,
      check_in: {id, ...user}
    }
  }


  handleSubmit = async (e) => {
    const validator = new Validator();
    if (!validator.validateEmail(this.state.user.email)) {
      return this.setState({error: 'There seem to be an error on this form. Please cross-check.'})
    }
    this.setState({loading: true})
    let res = await this.props.checkInByForm(this.getPayload())
    if (res) {
      this.setState({
        success: true,
        error: false,
        loading: false,
        user: this.state.user
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