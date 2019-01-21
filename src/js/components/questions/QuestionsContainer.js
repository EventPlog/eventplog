// external
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

/// utilities
import Auth from 'js/auth'
import checkEqual from 'js/utils/checkEqual'

import {
  getQuestions,
  batchUpdateQuestions,
} from './actions'


let draggedItem = null;

export class QuestionsContainer extends Component {
  state = {
    question: {
    },
    error: false,
    slug_check: {}
  }

  draggedItem = null

  componentDidMount(props) {
    this.getData()
    this.allowNext()
  }

  componentDidUpdate(prevProps) {
    if (!checkEqual(prevProps.questions, this.props.questions)) {
      this.setState({ questions: this.props.questions })
    }
  }

  handleChange = (key, value) => {
    this.setState({ event: {...this.state.event, [key]: value}})
  }

  allowNext = (goToNext) => {
    this.props.allowNext && this.props.allowNext(true)
  }

  getData() {
    this.getQuestions()
  }

  onDragStart = (e, question, index) => {
    this.draggedItem = this.state.questions.data[index]
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };

  onDragOver = (e, question, index) => {
    e.preventDefault()
    const draggedOverItem = this.state.questions.data[index];
    // const { draggedItem } = this.state

    // if the item is dragged over itself, ignore
    if (!this.draggedItem || !draggedOverItem ||
        (this.draggedItem.id === draggedOverItem.id)) {
      return;
    }

    // filter out the currently dragged item
    let data = this.state.questions.data.filter(item => item !== this.draggedItem);

    // add the dragged item after the dragged over item
    data.splice(index, 0, this.draggedItem);

    this.setState({ questions: {...this.state.questions, data } });
  };

  onDragEnd = () => {
    this.draggedItem = null;

    const payload = this.state.questions.data
                    .map((question, index) =>
                          ({id: question.id, serial_no: index}))
    this.props.batchUpdateQuestions({ questions: payload })
      // .then(questions => this.setState({ questions }))
  };


  getQuestions = () => {
    const { event = {}, recipient_id, recipient_type } = this.props
    const payload = {
      event_id: event.id,
      recipient_id, recipient_type
    }
    this.props.getQuestions(payload)
      .then(questions => this.setState({ questions }))
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    handleChange: this.handleChange,
    onDragStart: this.onDragStart,
    onDragOver: this.onDragOver,
    onDragEnd: this.onDragEnd,
  })

  render() {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const { event = {} } = state.events
  const { questions } = state.questions

  return {
    event,
    questions,
    currentUser: Auth.currentUser(),
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getQuestions,
    batchUpdateQuestions,
  }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionsContainer))
