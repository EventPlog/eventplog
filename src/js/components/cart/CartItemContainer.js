import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  getCartItem,
  createCartItem,
  updateCartItem,
  deleteCartItem,
  updateViewCount,
} from './actions'

import { getPresentations } from 'js/components/presentations/actions'
import { genEventLink } from 'js/utils'
import Auth from 'js/auth'

import {
  getBrowserName,
  getDeviceType,
} from 'js/utils/browserCheck'

const defaultCartItem = {
  cart_item_type: 'ebook', category: 'cart_item',
}

class CartItemContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart_item: {
        editing: false,
        cart_item_type: 'ebook', category: 'cart_item',
      },
      showPresentationsOptions: !props.requester || (props.requester && !props.requester.recipient_id)
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { event } = nextProps
    return {
      cart_item: nextProps.cart_item || defaultCartItem,
      link_back: `${genEventLink(event, event.community)}`
    }
  }

  componentDidMount() {
    if (
      this.props.editCartItem &&
      this.state.showPresentationsOptions
    ) {
      this.fetchPresentations()
    }
  }

  handleChange = (key, value, elementType) => {
    this.setState((state, props) => {
      let newState = {
        cart_item: {
          ...state.cart_item, [key]: value,
        }
      }
      if  (elementType == 'select') {
        // props.updateCartItem(newState.cart_item)
      }
      return newState
    })
  }

  handleEdit = () => {
    this.setState({editing: true})
  }

  handleCreate = () => {
    this.setState({loading: true})
    const payload = {
      ...this.state.cart_item,
      ...this.props.requester,
      trackable_id: this.props.event.id,
      trackable_type: 'Event'
    }
    this.props.createCartItem(payload).then(cart_item => {
      this.setState(() => ({
        cart_item: {},
        loading: false,
        error: false,
        success: 'Your cart_item has been successfully added.'
      }))
    }).catch(error => this.setState(() => ({error, loading: false})))

    mixpanel.track('EVENT_RESOURCES_CREATE', {
      cart_item_type: payload.cart_item_type
    })
  }

  handleDelete = () => {
    var confirmed = confirm('Are you sure you want to delete this cart_item?')
    if (!confirmed) { return }
    this.props.deleteCartItem({id: this.state.cart_item.id, deleted: true})
      .then(cart_item => {
        this.setState(() => ({
          cart_item,
          loading: false,
          editing: false,
          success: 'Your cart_item has been successfully deleted'}))
      })
      .catch(error => this.setState(() => ({error, loading: false})))

    mixpanel.track('EVENT_RESOURCES_DELETE', {
      cart_item_type: this.state.cart_item.cart_item_type
    })
  }

  handleUpdate = (elementType) => {
    this.setState({loading: true})
    this.props.updateCartItem(this.state.cart_item)
      .then(cart_item => this.setState({cart_item, editing: false, loading: false}))

      .catch(error => this.setState(() => ({error, loading: false})))

    mixpanel.track('EVENT_RESOURCES_UPDATE', {
      cart_item_type: this.state.cart_item.cart_item_type
    })
  }

  handleViewCount = () => {
    const { currentUser = {}, recipient_id, recipient_type } = this.props
    this.props.updateViewCount({
      user_id: currentUser.id,
      user_agent: getBrowserName(),
      device_type: getDeviceType(),
      recipient_id: this.state.cart_item.id,
      recipient_type: 'CartItem'
    })
  }

  fetchPresentations = () => {
    this.setState({loading: true})
    const { event } = this.props
    this.props.getPresentations({
      per_page: 50,
      page: 1,
      presentation: {
        event_id: event.id
      }
    }).then(presentations => this.setState({
      loading: false,
    })).catch(error => this.setState({ loading: false, error }))
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    handleChange: this.handleChange,
    handleUpdate: this.handleUpdate,
    handleCreate: this.handleCreate,
    handleEdit: this.handleEdit,
    handleDelete: this.handleDelete,
    handleViewCount: this.handleViewCount
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const { event = {} } = state.events
  const { cart_item = {}} = state.cart

  return {
    event,
    recipient_id: event.id,
    recipient_type: 'Event',
    cart_item,
    currentUser: Auth.currentUser(),
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCartItem,
    createCartItem,
    updateCartItem,
    deleteCartItem,
    updateViewCount,
    getPresentations,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartItemContainer))