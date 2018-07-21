import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Auth from 'js/auth'

import { getGuests } from './actions'

class GuestsContainter extends Component {

  componentDidMount() {
    this.getData();
  }

  getData() {
    const { getGuests, event} = this.props
    getGuests({event_id: event.id, per_page: 25, page: 1})
  }

  getGuests = (e, meta) => {
    const { per_page } = this.props.guests.meta || {}
    const params = {
      per_page,
      page: meta.activePage,
      event_id: this.props.event.id,
    }
    this.props.getGuests(params)
  }

  handleConfirm = (id, status) => {
    const invite = {id, status}

    this.props.updatePendingGuest(invite)
  }

  getProps = () => ({
    ...this.state,
    ...this.props,
    handleConfirm: this.handleConfirm,
    getGuests: this.getGuests,
  })

  render () {
    return this.props.children(this.getProps())
  }
}

const mapStateToProps = (state, ownProps) => {
  const { guest = {}, guests = [] } = state.guests
  const {event} = state.events
  return {
    ...ownProps,
    guest,
    guests,
    event
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getGuests,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GuestsContainter))