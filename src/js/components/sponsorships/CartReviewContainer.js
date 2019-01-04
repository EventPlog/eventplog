import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// ============== INTERNAL ==============
import { genEventLink } from 'js/utils'
import Auth from 'js/auth'
import SlackService from 'js/utils/slackService'

import {
  updateViewCount,
} from './actions'

import {
  addItemToCart,
  removeItemFromCart,
} from 'js/components/cart/actions'

import {
  getEvent,
  addEventToStore,
  createComment,
  updateComment,
  getComments,
} from 'js/components/events/actions'

import {
  getBrowserName,
  getDeviceType,
} from 'js/utils/browserCheck'

class CartContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleChange = this.handleChange.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  componentDidMount() {
    this.getData()
    this.allowNext()
    this.alertSlack()
  }

  allowNext = () => {
    const { allowNext, cart } = this.props
    let cartItemPresent = cart.data && cart.data.length > 0
    allowNext && allowNext(cartItemPresent)
  }

  alertSlack() {
    const { sponsorship, event, total } = this.props
    const payload = {
      id: sponsorship.id,
      title: event.title,
      description: `${sponsorship.partner.name} wants to sponsor ${event.title} a total amount of ${total}`,
      url: `${process.env.REACT_APP_EVENTPLOG_API}/sponsorship/${sponsorship.id}`
    }
    SlackService.send(payload)
  }

  getData() {
  }

  handleChange = (key, value, elementType) => {
    this.setState((state, props) => {
      let newState = {
        sponsorship_offer_item: {
          ...state.sponsorship_offer_item, [key]: value,
        }
      }
      return newState
    })
  }

  handleEdit = () => {
    this.setState({editing: true})
  }

  handleCreate = () => {
    this.setState({loading: true})
    const { sponsorship_offer_item } = this.state
    const payload = {
      sponsorship_offer_item: {
        ...sponsorship_offer_item,
        sponsorship_offer_id: this.props.sponsorship_offer.id
      }
    }
    this.props.createCart(payload).then(sponsorship_offer_item => {
      this.setState(() => ({
        sponsorship_offer_item: {},
        loading: false,
        error: false,
        success: 'A sponsorship offer has been successfully added.'
      }))
    }).catch(error => this.setState(() => ({error, loading: false})))

    mixpanel.track('EVENT_RESOURCES_CREATE', {
      sponsorship_type: this.state.sponsorship_offer_item.sponsorship_type
    })
  }

  handleDelete = () => {
    var confirmed = confirm('Are you sure you want to delete this sponsorship_offer_item?')
    if (!confirmed) { return }
    this.props.deleteCart({id: this.state.sponsorship_offer_item.id, deleted: true})
      .then(sponsorship_offer_item => {
        this.setState(() => ({
          sponsorship_offer_item,
          loading: false,
          editing: false,
          success: 'Your sponsorship_offer_item has been successfully deleted'}))
      })
      .catch(error => this.setState(() => ({error, loading: false})))

    mixpanel.track('EVENT_RESOURCES_DELETE', {
      sponsorship_type: this.state.sponsorship_offer_item.sponsorship_type
    })
  }

  handleUpdate = (elementType) => {
    this.setState({loading: true})

    mixpanel.track('EVENT_RESOURCES_UPDATE', {
      sponsorship_type: this.state.sponsorship_offer_item.sponsorship_type
    })

    return this.props.updateCart({sponsorship_offer_item: this.state.sponsorship_offer_item})
      .then(sponsorship_offer_item => this.setState({editing: false, loading: false, error: false}))
      .catch(error => this.setState(() => ({error, loading: false})))
  }

  handleViewCount = () => {
    const { currentUser = {}, recipient_id, recipient_type } = this.props
    this.props.updateViewCount({
      user_id: currentUser.id,
      user_agent: getBrowserName(),
      device_type: getDeviceType(),
      recipient_id: this.state.sponsorship_offer_item.id,
      recipient_type: 'Cart'
    })
  }

  handleAddToCart = () => {
    this.props.addItemToCart(this.state.sponsorship_offer_item)
      .then(success => this.handleChange('addedToCart', true))
  }

  handleRemoveFromCart = () => {
    this.props.removeItemFromCart(this.state.sponsorship_offer_item)
      .then(success => this.handleChange('addedToCart', false))
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    handleChange: this.handleChange,
    handleUpdate: this.handleUpdate,
    handleCreate: this.handleCreate,
    handleDelete: this.handleDelete,
    handleViewCount: this.handleViewCount,
    handleAddToCart: this.handleAddToCart,
    handleRemoveFromCart: this.handleRemoveFromCart
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const { event = {} } = state.events
  const {
    sponsorship = {},
  } = state.sponsorships

  const { event_id, id } = ownProps.match.params

  const { cart } = state.cart

  const subTotal = cart.data && cart.data.reduce(((sum, item) => parseFloat(sum) + parseFloat(item.amount)), 0)
  const vat = 0.05 * subTotal
  const total = subTotal + vat

  return {
    event,
    sponsorship,
    cart,
    subTotal,
    vat,
    total,
    currentUser: Auth.currentUser(),
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateViewCount,
    getEvent,
    addEventToStore,
    addItemToCart,
    removeItemFromCart,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartContainer))