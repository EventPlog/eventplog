import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// ---------- Internal -----------
import { getCart } from './actions'
import Auth from 'js/auth'

class CartContainer extends Component {
  state = {loading: false, error: false}

  componentDidMount() {
    this.getData()
    mixpanel.track('CART_INDEX_PAGE_VIEW')
  }

  getData() {
    this.getCart()
  }

  getCart = (e, meta = {}) => {
    this.setState({ loading: true })

    const { per_page = 10 } = this.props.cart.meta || {}

    this.props.getCart({
      per_page,
      page: meta.activePage || 1,
    }).finally(res => this.setState({ loading: false}))
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    getCart: this.getCart,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const {cart = {}} = state.cart
  const { event = {}} = state.events

  return {
    cart,
    event,
    currentUser: Auth.currentUser(),
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCart,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)
