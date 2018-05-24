// external
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

/// utilities
import { submitEmail, mockSubmitEmail } from '../../actions'

export class ForgotPasswordContainer extends Component {
  state = {email: ''}

  handleChange = ({name, value}: e.target) => this.setState({[name]: value})

  submitEmail = () => {
    this.props.submitEmail(this.state.email, this.props.token)
  }

  getProps = () => ({
    token: this.props.token,
    email: this.state.email,
    handleChange: this.handleChange,
    submitEmail: this.submitEmail,
  })

  render() {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  let token = ownProps.match ? ownProps.match.params.token : null
  return {token}
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    submitEmail: mockSubmitEmail
  }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordContainer))
