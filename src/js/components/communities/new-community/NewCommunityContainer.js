// external
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

/// utilities
import { createCommunity, mockCreateCommunity } from '../actions'

export class CommunityContainer extends Component {
  state = {
    community: {name: ''},
    error: false,
    communityCreated: false
  }

  handleChange = (e) => {
    this.setState({community: {[e.target.name]: e.target.value} })
  }

  submitCommunity = () => {
    this.setState({ loading: true })
    this.props.createCommunity(this.state.community).then(res => {
      this.setState({loading: false, communityCreated: true})
    })
      .catch(error => this.setState({loading: false, error}))
  }

  getProps = () => ({
    ...this.state,
    token: this.props.token,
    handleChange: this.handleChange,
    submitCommunity: this.submitCommunity,
  })

  render() {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  let token = ownProps.match ? ownProps.match.params.token : null
  return {token}
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    createCommunity: mockCreateCommunity
  }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommunityContainer))
