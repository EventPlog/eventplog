import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'

class CommentsContainer extends Component {
  getComments = (e, meta) => {
    const { per_page } = this.props.comments.meta || {}
    const { recipient_type, recipient_id } = this.props
    return this.props.getComments({
              per_page,
              page: meta.activePage,
              comment: { recipient_id, recipient_type }
            })
  }

  getProps = () => ({
    ...this.props,
    getComments: this.getComments,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

export default withRouter(CommentsContainer)
