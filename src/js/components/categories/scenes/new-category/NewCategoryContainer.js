// external
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

/// utilities
import {
  createCategory,
  checkForValidSlug,
} from '../../actions'

export class CategoryContainer extends Component {
  state = {
    category: {name: ''},
    error: false,
    categoryCreated: false
  }

  handleChange = (key, value) => {
    this.setState({category: {...this.state.community, [key]: value} })
  }

  submitCategory = () => {
    this.setState({ loading: true })
    this.props.createCategory({community: this.state.community})
      .then(category => {
        this.setState({category, loading: false, communityCreated: true})
      })
      .catch(error => this.setState({loading: false, error}))
  }

  checkForValidSlug = () => {
    this.setState({slug_check: {loading: true}})

    this.props.checkForValidSlug(this.state.category.slug).then(res => {
      this.setState({slug_check: !res.slug ? {valid: true} : {error: 'Slug not available'}})
    }).catch(error => this.setState({slug: {error}}))

    mixpanel.track('COMMUNITY_SLUG_CHANGE')
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    token: this.props.token,
    handleChange: this.handleChange,
    submitCategory: this.submitCommunity,
    checkForValidSlug: this.checkForValidSlug,
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
    createCategory,
    checkForValidSlug
  }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryContainer))
