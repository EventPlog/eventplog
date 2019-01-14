import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      document.querySelector('.pusher').scrollTop = 0;
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)