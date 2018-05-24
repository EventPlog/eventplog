import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Auth from '../../../../../auth/actions'
import { withRouter } from 'react-router-dom'

class SignupFormContainer extends Component {
  state = {
    user: {},
    loading: false
  }

  handleChange = (e, label ) => {
    const {value, name, innerText} = e.target
    this.setState({user: {
      ...this.state.user,
      [name || label]: Boolean(value) ? value : innerText
    }})
  }

  handleSubmit = async (e) => {
    this.setState({loading: true})

    this.props.signupByEmail(this.state.user)
      .then(res => {
        this.props.history.push('/user/confirm')
      })
      .finally(err => {
        this.setState({loading: false})
      })
  }

  componentWillMount(props) {
    if (Auth.currentUser) this.setState({user: Auth.currentUser})
  }

  getStateAndActions = () => ({
    ...this.props,
    ...this.state,
    handleChange: this.handleChange,
    handleSubmit: this.handleSubmit,
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
    signupByEmail: Auth.signupByEmail
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupFormContainer))