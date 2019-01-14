import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// ============== INTERNAL ==============
import { genEventLink } from 'js/utils'
import Auth from 'js/auth'

import {
  getSponsorshipOfferItem,
  createSponsorshipOfferItem,
  updateSponsorshipOfferItem,
  deleteSponsorshipOfferItem,
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

const defaultSponsorshipOfferItem = {
  sponsorship_offer_item_type: 'ebook', category: 'sponsorship_offer_item',
}

class SponsorshipOfferItemContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { sponsorship_offer_item: {
      sponsorship_type: 'any',
      slots_available: 1,
      editing: false,
    } }
    this.handleChange = this.handleChange.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  componentDidMount() {
    this.getData()
  }

  eventFetchedFromServer = () => (
    (!this.props.event ||
    !this.props.event.id) &&
    window.__INITIAL_DATA__ &&
    window.__INITIAL_DATA__.event
  )

  static getDerivedStateFromProps(nextProps, prevState) {
    const { event, newSponsorshipOfferItem } = nextProps
    if (newSponsorshipOfferItem) return
    return {
      sponsorship_offer_item: nextProps.sponsorship_offer_item || defaultSponsorshipOfferItem,
      link_back: `${genEventLink(event, event.community)}`
    }
  }

  getData() {
    const { event = {}, match} = this.props

    if ((this.props.sponsorship_offer_item && this.props.sponsorship_offer_item.id) || !match.params.id) {
      return
    }

    this.getSponsorshipOfferItem()

    if (event.id) {
      return
    }

    if(this.eventFetchedFromServer()) {
      const event = window.__INITIAL_DATA__.event
      this.setState({loading: false, event})
      this.props.addEventToStore(event)
      return
    }

    this.setState({loading: true})

    this.props.getEvent(match.params.event_id)
      .then(event => {
        this.setState({loading: false, event})
      })
      .catch(error => {
        this.setState({loading: false, error})
      })
  }

  getSponsorshipOfferItem = (event = {}, meta = {}) => {

    // likely in an event page. No need to retrieve sponsorship_offer_item
    if (!this.props.match.params.event_id) return

    this.setState({ loading: true })
    this.props.getSponsorshipOfferItem(this.props.match.params.id)
      .then(sponsorship_offer_item => this.setState({ sponsorship_offer_item, loading: false }))
      .catch(error => this.setState({ error, loading: false }))
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
    this.props.createSponsorshipOfferItem(payload).then(sponsorship_offer_item => {
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
    this.props.deleteSponsorshipOfferItem({id: this.state.sponsorship_offer_item.id, deleted: true})
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

    return this.props.updateSponsorshipOfferItem({sponsorship_offer_item: this.state.sponsorship_offer_item})
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
      recipient_type: 'SponsorshipOfferItem'
    })
  }

  handleAddToCart = () => {
    this.props.addItemToCart(this.state.sponsorship_offer_item)
      .then(success => {
        this.handleChange('addedToCart', true)
        this.props.allowNext()
      })
  }

  handleRemoveFromCart = () => {
    this.props.removeItemFromCart(this.state.sponsorship_offer_item)
      .then(success => {
        this.handleChange('addedToCart', false)
        this.props.allowNext()
      })
  }

  getProps = () => ({
    ...this.props,
    ...this.state,
    handleChange: this.handleChange,
    handleUpdate: this.handleUpdate,
    handleCreate: this.handleCreate,
    handleEdit: this.handleEdit,
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
  const { cart = {data: []} }  = state.cart
  const {
    sponsorship_offer = {},
    sponsorship_offer_items = {data: []}
  } = state.sponsorships

  const { event_id, id } = ownProps.match.params

  // don't fetch the sponsorship_offer_item if it exists in store
  // use sponsorship_offer_item if it exists as standalone
  let { sponsorship_offer_item }  = state.sponsorships
  if (event_id && (!sponsorship_offer_item || !sponsorship_offer_item.id)) {
    sponsorship_offer_item = sponsorship_offer_items.data.find(sp => sp.id == id) || {}
  }

  const addedToCart = ownProps.sponsorship_offer_item && cart.data &&
                      cart.data
                        .find(item =>
                          item.id === ownProps.sponsorship_offer_item.id
                        )

  return {
    event,
    addedToCart,
    sponsorship_offer,
    sponsorship_offer_item,
    comments: (sponsorship_offer_item || {}).comments,
    recipient_id: event.id,
    recipient_type: 'Event',
    currentUser: Auth.currentUser(),
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getSponsorshipOfferItem,
    createSponsorshipOfferItem,
    updateSponsorshipOfferItem,
    deleteSponsorshipOfferItem,
    updateViewCount,
    getEvent,
    addEventToStore,
    addItemToCart,
    removeItemFromCart,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SponsorshipOfferItemContainer))