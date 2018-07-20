import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  getTodoItems
} from './actions'

class EventUpdateContainer extends Component {
  state = { activeIndex: -1, event_checklist: {} }

  componentWillMount() {
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
  const { todo_items = {data: []} } = ownProps
  const { loading, error } = event_checklist

  const pending = todo_items.data.filter(item => item.status == 'pending')
  const in_progress = todo_items.data.filter(item => item.status == 'in progress')
  const completed = todo_items.data.filter(item => item.status == 'completed')

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