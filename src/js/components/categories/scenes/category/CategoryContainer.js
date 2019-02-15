import React, { Component} from 'react'
import { withRouter, matchPath } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  getCategory,
  updateCategory,
  followCategory,
  unFollowCategory,
  getCategoriesSuggestions,
  checkForValidSlug,
  updateViewCount,
  addCategoryToStore,
} from '../../actions'

import {
  getBrowserName,
  getDeviceType,
} from 'js/utils/browserCheck'

import { secureAction } from 'js/auth/actions'
import { getSlugFromHostName } from 'js/utils'
import Auth from 'js/auth'


class CategoryContainer extends Component {
  state = {category: {}, slug_check: {}}

  componentDidMount(props) {
    this.getData()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {category: nextProps.category}
  }

  componentDidUpdate(props, prevProps) {
    if (props.match.url !== this.props.match.url) {
      this.getData()
    }
  }

  handleChange = (e, attr) => {
    var elAttr = attr && attr.name ? attr : e
    this.setState({
      category: {
        ...this.state.category,
        [elAttr.name]: elAttr.value
      }
    })
  }

  handleSubmit = () => {
    this.setState({ loading: true })
    this.props.updateCategory(this.state.category)
      .then(category => {
        const updateVerb = this.state.category.id ? 'updated' : 'created'
        this.setState({category,
          loading: false, error: false,
          categoryCreated: true,
          success: `You've successfully ${updateVerb} this category.`})
      })
      .catch(error => this.setState({loading: false, success: false, error}))
  }

  getParams = () => {
    return (matchPath(this.props.location.pathname, '/c/:category_id/e/:id') || this.props.match).params
  }

  categoryFetchedFromServer = () => (
    (!this.props.category ||
    !this.props.category.id) &&
    window.__INITIAL_DATA__ &&
    window.__INITIAL_DATA__.category
  )

  getData() {
    const {category_id, id} = this.getParams()
    const sureCategoryId = category_id || id

    // don't bother fetching if within an event
    if (category_id && id && id != 'new') return

    if(this.categoryFetchedFromServer()) {
      this.props.addCategoryToStore(window.__INITIAL_DATA__.category)
      this.updateViewCount()
      return
    }

    if(!this.props.category || !this.props.category.id || !(this.props.category.id == sureCategoryId || this.props.category.slug == sureCategoryId)) {
      this.props.getCategory(sureCategoryId, this.props.slug)
        .then(category => {
          this.setState({loading: false, category})
          this.updateViewCount()
        })
        .catch(error => this.setState({loading: false, error}))
    }
  }

  checkForValidSlug = () => {
    if (this.props.category.slug == this.state.category.slug) { return }
    this.setState({slug_check: {loading: true}})

    this.props.checkForValidSlug(this.state.category.slug).then(res => {
      this.setState({slug_check: !res.slug ? {valid: true} : {error: 'Slug not available'}})
    }).catch(error => this.setState({slug: {error}}))

    mixpanel.track('COMMUNITY_SLUG_CHANGE')
  }

  buildFollowableParams = (category) => ({
      followable_id: category.id,
      followable_type: 'Category'
  })

  updateViewCount = () => {
    const { currentUser = {} } = this.props
    this.props.updateViewCount({
      user_id: currentUser.id,
      user_agent: getBrowserName(),
      device_type: getDeviceType(),
      recipient_id: this.state.category.id,
      recipient_type: 'Category'
    })
    mixpanel.track('COMMUNITY_PAGE_VIEW')
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    handleChange: this.handleChange,
    handleSubmit: this.handleSubmit,
    checkForValidSlug: this.checkForValidSlug,
    buildFollowableParams: this.buildFollowableParams,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {category = {}, categories = [], categories_suggestions} = state.categories

  return {
    activeLink: category.link_color,
    category,
    currentUser: Auth.currentUser(),
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCategory,
    getCategoriesSuggestions,
    checkForValidSlug,
    updateViewCount,
    addCategoryToStore,
    updateCategory: secureAction(updateCategory),
    followCategory: secureAction(followCategory),
    unFollowCategory: secureAction(unFollowCategory),
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryContainer))