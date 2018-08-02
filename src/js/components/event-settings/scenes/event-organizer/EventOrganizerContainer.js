import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateEventOrganizer } from '../../actions'

class EventOrganizerContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = (key, value, elementType) => {
    this.setState({[key]: value}, () => {
      if (elementType != 'select') return
      this.handleSubmit()
    })
  }

  handleSubmit = (elementType) => {
    if (elementType == 'select') return Promise.resolve()
    const organizer = {...this.state, id: this.props.organizer.id}
    this.props.updateEventOrganizer(organizer)
      .catch(err => {this.setState({error: err})})
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    handleChange: this.handleChange,
    handleSubmit: this.handleSubmit
  })

  render () {
    return this.props.children(this.getProps())
  }
}


const mapStateToProps = (state, ownProps) => {
  return {event: state.events.event}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateEventOrganizer,
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(EventOrganizerContainer)
