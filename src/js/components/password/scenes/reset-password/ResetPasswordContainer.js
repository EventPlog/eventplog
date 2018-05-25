import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

// utilities
import { mockResetPassword } from '../../actions'


export class JoinACommunityContainer extends Component {
  state = {}

  submitPassword = () => {
    const token = this.props.match ? this.props.match.params.token : null
    this.props.resetPassword(this.state.password, this.props.match.params.token)
  }

  render() {
    return this.props.children(this.props)
  }
}

const mapStateToProps = (state) => {
  return {communities: state.communities.communities}
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    resetPassword: mockResetPassword
  }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JoinACommunityContainer))
