import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import checkEqual from 'js/utils/checkEqual'
import {
  createQuestion,
  updateQuestion,
  deleteQuestion,
  updateQuestionInStore,
} from './actions'

class QuestionResponseContainer extends Component {
  state = { question: {} }

  componentWillMount() {
    this.setState({ question: this.props.question })
  }

  componentDidUpdate(prevProps) {
    if (this.props.question.id && this.props.question.id != prevProps.question.id) {
      this.setState({question: this.props.question})
    }
  }


  getQuestion = () => {
    const { question, match = {} } = this.props
    if (question && response.id) return
    this.props.getQuestion(match.params && match.params.id)
  }

  componentDidMount() {
    this.getData();
  }

  handleChange = (updates, updateProp) => {
    const { response } = this.state.question
    this.setState({
      question: {
        ...this.state.question,
        response: {...response, ...updates}
      }
    }, () => {
      if (updateProp) this.props.updateQuestionInStore(this.state.question)
    })
  }

  handleOptionChange = (e, options) => {
    this.handleChange('options', [...options, { body: e.target.value }])
    e.target.value = ''
  }

  handleBlur = () => {
    this.props.updateQuestionInStore(this.state.question)
  }

  createQuestion = () => {
    this.setState({ loading: true, error: false })
    const payload = {...this.state.response, question_id: this.props.question.id}
    this.props.createQuestion(response).then(response => {
      this.setState({response, loading: false})
    })
      .catch(error => this.setState({loading: false, error}))
  }

  batchUpdateResponses = () => {
    this.setState({ loading: true, error: false })
    this.props.batchUpdateResponses(responses).then(responses => {
    })
      .catch(error => this.setState({loading: false, error}))
  }

  deleteQuestion = (question = {}) => {
    var confirmed = confirm('Are you sure you want to delete this response?')
    if (!confirmed) { return }
    this.setState({ loading: true, error: false })
    const id = response.id || this.state.response.id
    this.props.deleteQuestion({ id }).then(response => {
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
    handleBlur: this.handleBlur,
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
    updateQuestionInStore,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionResponseContainer))