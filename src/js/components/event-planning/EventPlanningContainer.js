import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Auth from 'js/auth'

import {
  getEventChecklist,
  updateEventChecklist,
} from './actions'

class EventUpdateContainer extends Component {
  state = { activeIndex: -1, event_checklist: {} }

  componentWillMount() {
    this.getData()
  }

  changeAccordion = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }


  handleChange = (key, value) => {
    this.setState({event_checklist: {
      ...this.state.event_checklist, [key]: value
    }})
  }

  handleSubmit = () => {
    return this.props.updateEventChecklist(this.state.event_checklist)
                     .then(event_checklist => this.setState({event_checklist}))
  }

  getData() {
    const {event} = this.props
    this.props.getEventChecklist({event_id: event.id}).then(event_checklist => {
      this.setState({ event_checklist })
    })
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    handleChange: this.handleChange,
    handleSubmit: this.handleSubmit,
    changeAccordion: this.changeAccordion,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const { event_checklist } = state.event_checklists
  const { loading, error } = event_checklist
  const { todo_items = [] } = state.todo_items
  return {
    event_checklist,
    loading,
    error,
    todo_items,
    user: Auth.currentUser(),
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getEventChecklist,
    updateEventChecklist
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventUpdateContainer))