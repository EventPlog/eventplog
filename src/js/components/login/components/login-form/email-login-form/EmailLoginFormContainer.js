import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Auth from '../../../../../auth/actions'
import { withRouter } from 'react-router-dom'

class LoginFormContainer extends Component {
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
    this.props.loginByEmail(this.state.user)
      .then(res => {
        window.location.replace('/')
      })
      .catch(err => {
        console.log(err.message)
        this.setState({loading: false, error: err.error})
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
    loginByEmail: Auth.loginByEmail
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer))
