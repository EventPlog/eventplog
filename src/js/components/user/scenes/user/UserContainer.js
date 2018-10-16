import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import checkEqual from 'js/utils/checkEqual'
import Auth from 'js/auth'
import { paramsToObj, genEventLink } from 'js/utils'
import { secureAction, setUserInCookie } from 'js/auth/actions'

import {
  getUser,
  updateUser,
  confirmEmail,
} from '../../actions'

import {
  updateViewCount
} from 'js/components/events/actions'

import {
  getBrowserName,
  getDeviceType,
} from 'js/utils/browserCheck'

class EventContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {user: {}}
    this.imagePlaceholderRef = React.createRef()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.imagePlaceholderRef = React.createRef()
  }

  componentWillMount() {
    this.getData()
  }

  componentDidUpdate(props, prevProps) {
    if (!checkEqual(props.match.params, this.props.match.params)) {
      this.getData()
    }
  }

  handleChange = (key, value) => {
    const user = this.state.user && this.state.user.id
                    ? this.state.user
                    : this.props.user
    this.setState({user: {...user, [key]: value }})
  }

  handleSubmit = () => {
    this.setState({loading: true})
    const {commuity, ...others} = this.state.user
    return this.props.updateUser(this.state.user).then(user => {
      this.state.user.id
        ? mixpanel.track('USER_CREATE')
        : mixpanel.track('USER_UPDATE')
      this.setState({user, loading: false})
      setUserInCookie({...Auth.currentUser(), ...user})
      // until we find a better way to refresh the user info from cookie
      window.location.reload()
    })
      .catch(error => this.setState({error, loading: false}))
  }

  userFetchedFromServer = () => (
    (!this.props.user ||
        !this.props.user.id) &&
        window.__INITIAL_DATA__ &&
        window.__INITIAL_DATA__.user
  )

  setUserToCurrent() {
    this.setState({user: this.props.currentUser})
  }

  getData() {
    const { currentUser, isLoggedIn, match } = this.props
    const { id } = match.params

    if (isLoggedIn && !id) return this.setUserToCurrent()

    const userId = id.split('-').pop()
    if (isLoggedIn && userId == currentUser.id) {
      return this.setUserToCurrent()
    }

    this.setState({loading: true})

    if(this.userFetchedFromServer()) {
      const user = window.__INITIAL_DATA__.user
      this.setState({loading: false, user})
      this.props.addEventToStore(user)
      this.updateViewCount()
      return
    }

    if (!this.props.user || !this.props.user.id || this.props.user.id != id) {
      this.props.getUser({user_id: userId})
        .then(user => {
          this.setState({loading: false, error: false, user})
          this.updateViewCount()
        })
        .catch(error => this.setState({loading: false, error}))
    }
  }

  updateViewCount = () => {
    const { currentUser = {} } = this.props
    this.props.updateViewCount({
      user_id: currentUser.id,
      user_agent: getBrowserName(),
      device_type: getDeviceType(),
      recipient_id: this.state.user.id,
      recipient_type: 'Event'
    })
    mixpanel.track('EVENT_PAGE_VIEW')
  }

  getParams = () => {
    return {...paramsToObj(this.props.location.search.substr(1))}
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    ...this.getParams(),
    handleChange: this.handleChange,
    handleSubmit: this.handleSubmit,
    imagePlaceholderRef: this.imagePlaceholderRef,
    attendEvent: this.attendEvent,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {user = {}} = state.users
  return {
    user,
    currentUser: Auth.currentUser(),
    isLoggedIn: Auth.isLoggedIn,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateUser,
    getUser,
    confirmEmail,
    updateViewCount,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventContainer))