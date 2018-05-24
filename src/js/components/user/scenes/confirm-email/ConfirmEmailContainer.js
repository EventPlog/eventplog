import React, { Component } from 'react'
import { confirmEmail } from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'


export class ConfirmEmailContainer extends Component {
  state = {
    confirmed: false
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let token = nextProps.match ? nextProps.match.params.token : null
    return({ token })
  }

  componentDidMount() {
    this.confirmToken();
  }

  confirmToken = () => {
    let token = this.props.match ? this.props.match.params.token : null
    if (!token) return
    this.props.confirmEmail({token})
  }

  confirmed = () => this.props.status === 'confirmed'

  getProps = () => ({
    confirmed: this.confirmed,
    status: this.props.status,
    token: this.state.token,
  })

  render() {
    if (this.confirmed()) {
      setTimeout(() => {
        return this.props.history.push({
          pathname: '/login',
          state: {flash_msg: "Your email confirmation was successful. Logging you in in a sec ..."}
        })
      }, 2000)
    }


    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state) => {
  return {status: state.users.confirmedStatus}
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    confirmEmail
  }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConfirmEmailContainer))
