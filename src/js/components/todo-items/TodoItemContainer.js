import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  getComments,
  createTodoItem,
  updateTodoItem,
  deleteTodoItem,
  createComment,
  updateComment,
} from './actions'

class TodoItemContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { todo_item: {} }
    this.handleChange = this.handleChange.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { community_id, event_id } = nextProps.match.params
    return {
      todo_item: nextProps.todo_item,
      link_back: `/communities/${community_id}/events/${event_id}/backstage/tasks`
    }
  }

  handleChange = (key, value, elementType) => {
    this.setState((state, props) => {
      let newState = {
        todo_item: {
          ...state.todo_item, [key]: value,
          recipient_type: 'User',
        }
      }
      if  (elementType == 'select') {
        props.updateTodoItem(newState.todo_item)
      }
      return newState
    })
  }

  handleCreate = () => {
    this.setState({loading: true})
    const payload = {
      ...this.state.todo_item,
      trackable_id: this.props.event_checklist.id,
      trackable_type: 'EventChecklist'
    }
    this.props.createTodoItem(payload).then(todo_item => {
      this.setState(() => ({todo_item, loading: false, success: 'Your todo item has been successfully created'}))
    }).catch(error => this.setState(() => ({error})))
  }

  handleDelete = () => {
    var confirmed = confirm('Are you sure you want to delete this task?')
    if (!confirmed) { return }
    this.props.deleteTodoItem({id: this.state.todo_item.id, deleted: true})
      .then(todo_item => this.props.history.push(this.state.link_back))
      .catch(error => this.setState(() => ({error})))
  }

  handleSubmit = (elementType) => {
    if (elementType == 'select') return Promise.resolve()
    return this.props.updateTodoItem(this.state.todo_item)
                     .then(todo_item => this.setState({todo_item}))
                     .catch(error => this.setState(() => ({error})))
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    handleChange: this.handleChange,
    handleSubmit: this.handleSubmit,
    handleCreate: this.handleCreate,
    handleDelete: this.handleDelete,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const { event_checklist } = state.event_checklists
  const {todo_items = {data: []} } = state.todo_items
  const {loading, error} = todo_items
  const todo_item = state.todo_items.todo_items.data.find(item => item.id == ownProps.match.params.id)

  return {
    todo_item,
    event_checklist,
    loading,
    error,
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getComments,
    createTodoItem,
    updateTodoItem,
    deleteTodoItem,
    createComment,
    updateComment,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoItemContainer))