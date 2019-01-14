import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import checkEqual from 'js/utils/checkEqual'
import {
  createQuestion,
  updateQuestion,
  deleteQuestion
} from './actions'

class QuestionContainer extends Component {
  state = {
    question: {}
  }

  componentWillMount() {
    this.setState({ question: this.getInitialQuestion() })
  }

  componentDidUpdate(prevProps) {
    if (this.props.question.id && this.props.question.id != prevProps.question.id) {
      this.setState({question: this.props.question})
    }
  }

  getInitialQuestion() {
    const { question = {} } = this.props
    return question.body ? question : this.defaultQuestion
  }

  defaultQuestion = {
    body: '',
    question_type: 'short_text',
    recipient_id: this.props.recipient_id,
    recipient_type: this.props.recipient_type,
    category: this.props.category,
  }

  getQuestion = () => {
    const { question, match = {} } = this.props
    if (question && question.id) return
    this.props.getQuestion(match.params && match.params.id)
  }

  componentDidMount() {
    this.getData();
  }

  handleChange = (key, value) => {
    this.setState({question: {...this.state.question, [key]: value}})
  }

  handleOptionChange = (e, options) => {
    this.handleChange('options', [...options, { body: e.target.value }])
    e.target.value = ''
  }

  createQuestion = () => {
    this.setState({ loading: true, error: false })
    const { id, ...question } = this.state.question
    this.props.createQuestion(question).then(question => {
      this.setState({question: this.defaultQuestion, loading: false})
    })
      .catch(error => this.setState({loading: false, error}))
  }

  updateQuestion = () => {
    this.setState({ loading: true, error: false })
    this.props.updateQuestion(this.state.question).then(question => {
      this.setState({question: {...question, editing: false}, loading: false})
    })
      .catch(error => this.setState({loading: false, error}))
  }

  deleteQuestion = (question = {}) => {
    var confirmed = confirm('Are you sure you want to delete this question?')
    if (!confirmed) { return }
    this.setState({ loading: true, error: false })
    const id = question.id || this.state.question.id
    this.props.deleteQuestion({ id }).then(question => {
      this.setState({loading: false})
    })
      .catch(error => this.setState({loading: false, error}))
  }

  getData() {
    // this.getQuestion()
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    handleChange: this.handleChange,
    createQuestion: this.createQuestion,
    updateQuestion: this.updateQuestion,
    deleteQuestion: this.deleteQuestion,
    handleOptionChange: this.handleOptionChange,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    question: ownProps.question || state.question || {}
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createQuestion,
    updateQuestion,
    deleteQuestion,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionContainer))