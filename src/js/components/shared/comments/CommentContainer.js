import React, { Component} from 'react'

import { Auth } from 'js/auth'

class CommentContainer extends Component {
  constructor(props) {
    super(props)

    this.state = { comment: {} }
    this.updateComment = this.updateComment.bind(this)
  }

  componentDidMount() {
    this.setState({comment: this.props.comment})
  }

  handleChange = (key, value) => {
    this.setState({ comment: {...this.state.comment, [key]: value} })
  }

  createComment = () => {
    const { recipient_id, recipient_type, trackable_id, trackable_type } = this.props
    const comment = {...this.state.comment, recipient_id, recipient_type, trackable_id, trackable_type}
    return this.props.createComment(comment, this.props.parentComment).then(res => {
      this.setState({ comment: {body: ''} })
    })
  }

  updateComment = () => {
    return this.props.updateComment(this.state.comment, this.props.parentComment)
  }

  deleteComment = () => {
    var confirmed = confirm('Are you sure you want to delete this comment?')
    if (!confirmed) { return }
    const comment = {...this.state.comment, deleted: true}
    return this.props.updateComment(comment, this.props.parentComment)
  }

  getProps = () => ({
    ...this.state,
    ...this.props,
    handleChange: this.handleChange,
    createComment: this.createComment,
    updateComment: this.updateComment,
    deleteComment: this.deleteComment,
    current_user: Auth.currentUser(),
  })

  render () {
    return this.props.children(this.getProps())
  }
}

export default CommentContainer
