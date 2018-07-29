import { Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Auth from 'js/auth'

import { getGuests, searchGuests } from './actions'

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

  handleSearch = (e) => {
    if (!(e.keyCode == 13 || e.charCode == 13)) return
    const payload = {
      event_id: this.props.event.id,
      search_query: e.target.value,
      per_page: 25,
      page: 1,
    }
    this.props.searchGuests(payload)
  }

  handleConfirm = (id, status) => {
    const invite = {id, status}

    this.props.updatePendingGuest(invite).then(res => {
      this.setState({success: 'You have successfully confirmed.'})
    })
  }

  showChildrenSuccess = (success) => {
    this.setState({success})
  }

  getProps = () => ({
    ...this.state,
    ...this.props,
    handleConfirm: this.handleConfirm,
    getGuests: this.getGuests,
    handleSearch: this.handleSearch,
    showChildrenSuccess: this.showChildrenSuccess,
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
    searchGuests,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GuestsContainter))