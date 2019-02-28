import React, { Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import Auth from 'js/auth/actions'
import Validator from 'js/utils/validator'
import { titleize, genEventLink } from 'js/utils'
import SlackService from 'js/utils/slackService'
import config from 'js/config'
import {
  updateGuest,
  deleteGuest,
  checkInByForm,
} from './actions'

import {
  getEvent,
  addEventToStore,
} from 'js/components/events/actions'

import {
  getQuestions,
  batchUpdateResponses,
} from 'js/components/questions/actions'

const emptyUser = {
  first_name: '',
  last_name: '',
  email: '',
  gender: 'Male'
}

const sendToSlack = (event, user) => {
  const slackPayload = {
    title: event.title,
    url: window.location.origin + genEventLink(event),
    prefixMsg: `${user.first_name} just RSVPed for `,
    channel: config.slack.guestsReportChannel,
    description: `
      Details
      Name: ${user.first_name} ${user.last_name} 
      `
  }
  SlackService.send(slackPayload)
}
class CheckInContainer extends Component {
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

  componentDidUpdate(prevProps) {
    const { recipient_id, recipient_type, category } = this.props
    if (recipient_id && recipient_id != prevProps.recipient_id) {
      this.getQuestions({ recipient_id, recipient_type, category })
    }
  }

  eventFetchedFromServer = () => (
    (!this.props.event ||
    !this.props.event.id) &&
    window.__INITIAL_DATA__ &&
    window.__INITIAL_DATA__.event
  )

  getData() {
  }


  handleChange = (key, value) => {
    this.setState({user: {
      ...this.state.user, [key]: value
    }})
  }

  handleStateChange = (key, value) => (
    this.setState({[key]: value})
  )

  getPayload = (question_responses) => {
    const { id, user, check_in_user} = this.state
    return {
      id, check_in_user,
      event_id: this.props.event.id || this.props.match.id,
      check_in: {id, question_responses}
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
      const successMsg = `${res.user ? titleize(res.user.display_name) : 'User'} has been checked in successfully.`

      this.setState({
        loading: false,
        sucess: successMsg,
        user: res
      })
      EVENTPLOG.toast.success({title: 'Success!', body: successMsg})
      this.props.showChildrenSuccess(successMsg)
    }).catch(e => {
      EVENTPLOG.toast.error({title: 'An error occured!', body: `Something prevented us from checking in ${user.display_name}`})
      this.setState({success: false})
    })
    mixpanel.track('GUEST_CHECK_IN_BUTTON_CLICKED')
  }

  handleSubmit = async (e) => {
    const validator = new Validator();
    const emailObject = this.props.questions.data
                      .find(question => question.id == 'email')

    const email = emailObject ? emailObject.response.body : ''

    if (!validator.validateEmail(email.trim())) {
      return this.setState({
        success: false,
        error: "Hmmm.. something doesn't seem quite right with the email.."
      })
    }

    this.setState({loading: true, error: false})

    const responses = this.props.questions.data &&
                     this.props.questions.data.map(question =>
                        ({...question.response, question_id: question.id}))

    this.props.checkInByForm(this.getPayload(responses))
      .then(res => {
        const { check_in_user } = this.state
        const { user = {} } = res || {}

        let successMsg = this.state.check_in_user
          ? `You've successfully checked in ${titleize(user.less_formal_name || 'an unnamed person. Lol!')}. Share this event on social media so your friends know where you are.`
          : `You've successfully registered ${titleize(user.less_formal_name || 'an unnamed person. Lol!')}. Click on register to register someone else.`

        successMsg = this.props.event.is_stakeholder
          ? successMsg
          : `You've successfully registered for ${this.props.event.title}`

        sendToSlack(this.props.event, user)
        this.props.handleSubmit && this.props.handleSubmit()

        EVENTPLOG.toast.success({title:"Success!!", body: successMsg})

        this.setState({
          success: successMsg,
          error: false,
          loading: false,
          user: emptyUser,
          guest: res
        })
      })
      .catch(error => {
        console.log(error)
        const errorMsg = 'An error occured. Please try again later.'
        EVENTPLOG.toast.error({title:"Error :(", body: error})

        this.setState({
          loading: false,
          error: errorMsg
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
      const successMsg = `${guest.user ? guest.user.display_name : 'User'} has been deleted successfully.`
      EVENTPLOG.toast.success({title: 'Success!', body: successMsg})
      this.props.showChildrenSuccess(successMsg)
    }).catch(err => {
      EVENTPLOG.toast.error({title: 'Error!', body: 'An error occured while deleting this guest. Please try again or contact support.'})
      this.setState({success: false})
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
  const { questions } = state.questions
  const { event= {} } = state.events

  return {
    questions,
    event: event.id ? event : ownProps.event
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getEvent,
    checkInByForm,
    updateGuest,
    deleteGuest,
    addEventToStore,
    getQuestions,
    batchUpdateResponses,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckInContainer))