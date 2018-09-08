import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { inviteOrganizers, deleteInvitation } from '../../actions'
import Validator from 'js/utils/validator'

class EventOrganizersContainer extends Component {
  state = {
    recipient_emails: '',
    role: 'admin',
    description: ''
  }

  handleChange = (key, value) => {
    this.setState({[key]: value})
  }

  handleSubmit = () => {
    const recipient_emails = this.state.recipient_emails.replace(' ', '').split(',')
    const trackable_id = this.props.event.id
    const trackable_type = 'Event'
    const details = `{"role": "${this.state.role}"}`
    const description = this.state.description
    const invite = {description, recipient_emails, details, trackable_id, trackable_type}

    const data = recipient_emails.map(email => ({email}))
    const validator = new Validator();
    const invalidEmail = recipient_emails.find(email => !validator.validateEmail(email.trim()))
    if (invalidEmail) {
      return this.setState({loading: false, error: 'One or more emails are invalid. Please cross-check.'})
    }

    this.setState({loading: true, success: true, error: false})
    this.props.inviteOrganizers(invite).then(res => {
      this.setState({
        loading: false,
        success: 'Your invitation(s) have been successfully sent',
        recipient_emails: ''
      })
    }).catch(error => this.setState({error, loading: false}))
  }

  handleDelete = (id) => {
    var confirmed = confirm('Are you sure you want to delete this invitation?')
    if (!confirmed) { return }
    this.setState(() => ({loading: true}))
    const invitation = {id, deleted: true}
    return this.props.deleteInvitation(invitation).then(res => {
      this.setState(() => ({loading: false, success: 'The invitation has been successfully deleted.'}))
    })
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
  const { organizers = [], volunteers = {} } = state.organizers
  return {
    organizers,
    volunteers,
    events: state.events
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    inviteOrganizers,
    deleteInvitation,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventOrganizersContainer))