import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getEventPictures,
} from './actions'

class EventPicturesContainer extends Component {
  state = {loading: false, error: false}

  componentWillMount() {
    this.getData()
  }

  getData = () => {
    // if (this.props.event_pictures.meta) return

    this.setState({loading: true})
    const payload =  {
      picture : {
        trackable_id: this.props.event_discussion.id,
        trackable_type: 'EventDiscussion'
      }
    }
    this.props.getEventPictures(payload).then(res => {
      this.setState({loading: false})
    })
      .catch(error => this.setState({loading: false}))
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
  const { event_pictures = {}, loading, error } = state.event_pictures
  const { event = {} } = state.events
  const { event_discussion } = event

  return {
    event_pictures,
    loading,
    error,
    event,
    event_discussion
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getEventPictures,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPicturesContainer)
