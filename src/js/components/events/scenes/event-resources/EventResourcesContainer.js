import React, { Component} from 'react'

class DiscussionContainer extends Component {
  state = {loading: false, error: false}


  getProps = () => ({
    ...this.props,
    ...this.state,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

export default DiscussionContainer
