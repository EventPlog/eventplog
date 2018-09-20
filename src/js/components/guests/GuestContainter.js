import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Auth from 'js/auth/actions'
import Validator from 'js/utils/validator'
import {
  updateGuest,
  deleteGuest,
  checkInByForm,
} from './actions'

const emptyUser = {
  first_name: '',
  last_name: '',
  email: '',
  gender: 'Male'
}

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

  handleCheckIn = () => {
    this.setState({loading: true})
    const { event_id, user } = this.props.guest
    const payload = {
      check_in_user: true,
      event_id,
      check_in: user
    }
    this.props.checkInByForm(payload).then(res => {
      const successMsg = `${res.user ? res.user.display_name : 'User'} has been checked in successfully.`

      this.setState({
        loading: false,
        sucess: successMsg,
        user: res
      })
      this.props.showChildrenSuccess(successMsg)
    })
    mixpanel.track('GUEST_CHECK_IN_BUTTON_CLICKED')
  }

  handleSubmit = async (e) => {
    const validator = new Validator();
    if (!validator.validateEmail(this.state.user.email.trim())) {
      return this.setState({error: "Hmmm.. something doesn't seem quite right with the email.."})
    }
    this.setState({loading: true})
    let res = await this.props.checkInByForm(this.getPayload())
    if (res) {
      const { user, check_in_user } = this.state
      const successMsg = this.state.check_in_user
        ? `You've successfully checked in ${user.first_name || 'an unnamed person. Lol!'}. Here's a clean form so you can check in another person.`
        : `You've successfully registered ${user.first_name || 'an unnamed person. Lol!'}. Here's a clean form so you can register another person.`

      this.setState({
        success: successMsg,
        error: false,
        loading: false,
        user: emptyUser,
        guest: res
      })
    }
    mixpanel.track('GUEST_REGISTER_BY_FORM')
    if (this.state.check_in_user) {
      mixpanel.track('GUEST_CHECK_IN_BY_FORM')
    }
  }

  handleDelete = () => {
    var confirmed = confirm('Are you sure you want to delete this guest?')
    if (!confirmed) { return }
    const { guest } = this.props
    this.props.deleteGuest(guest.id).then(res => {
      this.props.showChildrenSuccess(`${guest.user ? guest.user.display_name : 'User'} has been deleted successfully.`)
    })
    mixpanel.track('GUEST_DELETE_BUTTON_CLICKED')
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
    handleCheckIn: this.handleCheckIn,
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