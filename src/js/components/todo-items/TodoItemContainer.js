import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  createTodoItem,
  updateTodoItem,
  createComment,
  updateComment,
} from './actions'

class TodoItemContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { todo_item: {} }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {todo_item: nextProps.todo_item}
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

  handleSubmit = (elementType) => {
    if (elementType == 'select') return Promise.resolve()
    return this.props.updateTodoItem(this.state.todo_item)
                     .then(todo_item => this.setState({todo_item}))
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    handleChange: this.handleChange,
    handleSubmit: this.handleSubmit,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {todo_items = {data: []} } = state.todo_items
  const {loading, error} = todo_items
  const todo_item = state.todo_items.todo_items.data.find(item => item.id == ownProps.match.params.id)

  return {
    todo_item,
    loading,
    error,
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createTodoItem,
    updateTodoItem,
    createComment,
    updateComment,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoItemContainer))