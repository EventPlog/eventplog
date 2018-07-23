import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { inviteOrganizers, deleteInvitation } from '../../actions'
import Validator from 'js/utils/validator'

class EventOrganizersContainer extends Component {
  state = { recipient_emails: '' }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = () => {
    const recipient_emails = this.state.recipient_emails.replace(' ', '').split(',')
    const trackable_id = this.props.event.id
    const trackable_type = 'Event'
    const invite = {recipient_emails, trackable_id, trackable_type}

    const data = recipient_emails.map(email => ({email}))
    const validator = new Validator();
    const invalidEmail = recipient_emails.find(email => !validator.validateEmail(email.trim()))
    if (invalidEmail) {
      return this.setState({error: 'One or more emails are invalid. Please cross-check.'})
    }

    this.setState({loading: true, error: null})
    this.props.inviteOrganizers(invite).then(res => {
      this.setState({loading: false, recipient_emails: ''})
    })
  }

  handleDelete = (id) => {
    var confirmed = confirm('Are you sure you want to delete this invitation?')
    if (!confirmed) { return }
    const invitation = {id, deleted: true}
    return this.props.deleteInvitation(invitation)
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    handleChange: this.handleChange,
    handleSubmit: this.handleSubmit,
    handleDelete: this.handleDelete,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  return {event: state.events.event}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    inviteOrganizers,
    deleteInvitation,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventOrganizersContainer))