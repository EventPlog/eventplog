import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Auth from 'js/auth'

import { updatePendingInvitation, getInvitations, getPendingInvitations } from './actions'

class InvitationsContainter extends Component {

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.getUserPendingInvitation()
  }

  getUserPendingInvitation = () => {
    const {user, getPendingInvitations, user_pending_invitations } = this.props
    if (user_pending_invitations.length < 1) {
      getPendingInvitations({recipient_email: user.email, status: 'pending'})
    }
  }

  handleConfirm = (id, status) => {
    const { id: recipient_id } = this.props.user
    const invite = {id, status, recipient_id, recipient_type: 'User'}

    this.props.updatePendingInvitation(invite)
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    handleConfirm: this.handleConfirm,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const { invitation = {}, invitations = [], user_pending_invitations = [] } = state.invitations
  return {
    invitation,
    invitations,
    user_pending_invitations,
    user: Auth.currentUser(),
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getInvitations,
    getPendingInvitations,
    updatePendingInvitation,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InvitationsContainter))