import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { checkInByForm } from '../actions'
import Auth from '../../../auth/actions'

class CheckInFormContainer extends Component {
  state = {
    user: {},
    success: false,
    loading: false,
    feedback_url: ''
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
    let res = await this.props.checkInByForm(this.props.event.id, this.state.user)
    if (res) {
      this.setState({
        success: true,
        loading: false,
        feedback_url: res.feedback_url
      })
    }
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
    checkInByForm,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckInFormContainer)