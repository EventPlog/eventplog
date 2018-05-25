// external
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

/// utilities
import { submitEmail, mockSubmitEmail } from '../../actions'

export class ForgotPasswordContainer extends Component {
  state = {
    email: '',
    error: false,
    emailSubmitted: false
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitEmail = () => {
    this.setState({ loading: true })
    this.props.submitEmail({email: this.state.email}).then(res => {
      this.setState({loading: false, emailSubmitted: true})
    })
      .catch(error => this.setState({loading: false, error}))
  }

  getProps = () => ({
    ...this.state,
    token: this.props.token,
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
    submitEmail
  }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordContainer))
