// external
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

/// utilities
import { createCommunity, mockCreateCommunity } from '../../actions'

export class CommunityContainer extends Component {
  state = {
    community: {name: ''},
    error: false,
    communityCreated: false
  }

  handleChange = (key, value) => {
    this.setState({community: {...this.state.community, [key]: value} })
  }

  submitCommunity = () => {
    this.setState({ loading: true })
    this.props.createCommunity({community: this.state.community})
      .then(community => {
        this.setState({community, loading: false, communityCreated: true})
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
    createCommunity
  }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommunityContainer))
