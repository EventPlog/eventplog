import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { confirmOrganizer } from './actions'

class InvitationContainer extends Component {

  getPendingInvitation = () => {
    if (this.props.pending_invitation.length > 0)
    this.props.getPendingInvitation()
  }

  componentDidMount() {
    this.getData();
  }

  handleConfirm = (id, status) => {
    const invite = {id: this.props.invitation.id, status}

    this.props.confirmOrganizer(invite).then(res => {
      this.setState({invitationBarHidden: true})
    })
  }

  getData() {
    this.getPendingInvitation()
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    handleConfirm: this.handleConfirm,
    handleDelete: this.handleDelete,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    pending_invitation: state.invitations.pending_invitation || []
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    confirmOrganizer,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InvitationContainer))