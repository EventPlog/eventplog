import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getEventDiscussion,
  getComments,
  createComment,
  updateComment,
} from './actions'

import Auth from 'js/auth'

class DiscussionContainer extends Component {
  state = {loading: false, error: false}

  componentWillMount() {
    this.getData()
  }

  getData = () => {
    if (this.props.event_discussion.id) return

    this.setState({loading: true})
    this.props.getEventDiscussion(this.props.event.id).then(res => {
      this.setState({loading: false})
    })
      .catch(error => this.setState({loading: false, error: 'Could not load discussions.'}))
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const { event_discussion, loading, error } = state.event_discussions
  const { event = {} }  = state.events

  return {
    event_discussion,
    loading,
    error,
    event,
    isLoggedIn: Auth.isLoggedIn,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getComments,
    createComment,
    updateComment,
    getEventDiscussion,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscussionContainer)
