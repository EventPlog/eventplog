import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class EventUpdateContainer extends Component {

  handleChange = (e) => {
    this.props.handleChange(e.target.name, e.target.value)
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    handleChange: this.handleChange,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventUpdateContainer))