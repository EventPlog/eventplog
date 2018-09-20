import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  getTodoItems
} from './actions'

class EventUpdateContainer extends Component {
  state = { activeIndex: -1, event_checklist: {} }

  componentDidMount() {
    mixpanel.track('EVENT_CHECKLIST_PAGE_VIEW')
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
    mixpanel.track('EVENT_CHECKLIST_UPDATE')
    return this.props.updateEventChecklist(this.state.event_checklist)
                     .then(event_checklist => this.setState({event_checklist}))
  }

  getData() {
    // const {event} = this.props
    // this.props.getEventChecklist({event_id: event.id}).then(event_checklist => {
    //   this.setState({ event_checklist })
    // })
  }

  getProps = () => ({
    ...this.props,
    activeIndex: this.state.activeIndex,
    handleChange: this.handleChange,
    handleSubmit: this.handleSubmit,
    changeAccordion: this.changeAccordion,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {event_checklist} = state.event_checklists
  const { todo_items  } = ownProps
  const { loading, error } = event_checklist
  const { data = [] } = todo_items

  const pending = data ? data.filter(item => item.status == 'pending') : []
  const in_progress = data ? data.filter(item => item.status == 'in progress') : []
  const completed = data ? data.filter(item => item.status == 'completed') : []

  return {
    event_checklist,
    todo_items,
    loading,
    pending,
    in_progress,
    completed,
    error,
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getTodoItems
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventUpdateContainer))