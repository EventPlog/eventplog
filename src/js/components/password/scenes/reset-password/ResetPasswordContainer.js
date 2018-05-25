// external
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

/// utilities
import { resetPassword } from '../../actions'

export class ForgotPasswordContainer extends Component {
  state = {
    password: '',
    error: false,
    passwordChanged: false
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  resetPassword = () => {
    this.setState({ loading: true })
    const payload = {
      password: this.state.password,
      token: this.props.token
    }
    this.props.resetPassword(payload).then(res => {
      this.setState({loading: false, passwordChanged: true})
    })
      .catch(error => this.setState({loading: false, error}))
  }

  getProps = () => ({
    ...this.state,
    token: this.props.token,
    handleChange: this.handleChange,
    resetPassword: this.resetPassword,
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
    resetPassword
  }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordContainer))
