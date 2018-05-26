import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getEvents } from '../actions'
import Auth from '../../../auth/actions'

class MainContentContainer extends Component {
  constructor(props) {
    super()
    this.fetchEvents(props)
  }

  fetchEvents(props){
    try {
      const {events} = props
      if(events && events.length > 0) return
      props.getEvents(Auth.currentUser().id).then((res = {}) => {
        if (!res.user_events || (res.user_events.length == 0 && res.communities_events.length == 0)) {
          return props.history.push('/communities/join-a-community')
        }
      });
    }
    catch(err) {
      console.log(err)
    }
  }

  render () {
    return this.props.children({ ...this.props })
  }
}

const mapStateToProps = (state, ownProps) => {
  return {events: {} || state.events}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getEvents
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContentContainer))