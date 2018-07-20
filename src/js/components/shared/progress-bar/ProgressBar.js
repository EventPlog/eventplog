import React, { Component } from 'react'
import { Button, Progress } from 'semantic-ui-react'

class ProgressBar extends Component {
  state = { percent: 33 }

  increment = () =>
    this.setState({
      percent: this.state.percent >= 100 ? 0 : this.state.percent + 20,
    })

  render() {
    return (
      <div>
        <Progress percent={this.props.percent} indicating progress />
      </div>
    )
  }
}

export default ProgressBar
