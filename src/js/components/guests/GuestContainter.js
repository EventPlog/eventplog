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

import {
  getEvent,
  addEventToStore,
} from 'js/components/events/actions'

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

  componentDidMount() {
    this.getData()
  }

  eventFetchedFromServer = () => (
    (!this.props.event ||
    !this.props.event.id) &&
    window.__INITIAL_DATA__ &&
    window.__INITIAL_DATA__.event
  )

  getData() {
    const { event = {}, match} = this.props
    if (event.id || !match.params.id) return

    if(this.eventFetchedFromServer()) {
      const event = window.__INITIAL_DATA__.event
      this.setState({loading: false, event})
      this.props.addEventToStore(event)
      return
    }

    this.setState({loading: true})

    this.props.getEvent(match.params.id)
      .then(event => {
        this.setState({loading: false})
      })
      .catch(error => {
        this.setState({loading: false, error})
      })
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
      event_id: this.props.event.id || this.props.match.id,
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
      return this.setState({
        success: false,
        error: "Hmmm.. something doesn't seem quite right with the email.."
      })
    }
    this.setState({loading: true, error: false})
    this.props.checkInByForm(this.getPayload())
      .then(res => {
        const { user, check_in_user } = this.state
        let successMsg = this.state.check_in_user
          ? `You've successfully checked in ${user.first_name || 'an unnamed person. Lol!'}. Here's a clean form so you can check in another person.`
          : `You've successfully registered ${user.first_name || 'an unnamed person. Lol!'}. Here's a clean form so you can register another person.`

        successMsg = this.props.event.is_stakeholder
          ? successMsg
          : `You've successfully registered for ${this.props.event.title}`

        this.setState({
          success: successMsg,
          error: false,
          loading: false,
          user: emptyUser,
          guest: res
        })
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: 'An error occured. Please try again later.'
        })
      })

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
    getEvent,
    checkInByForm,
    updateGuest,
    deleteGuest,
    addEventToStore
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestContainter)