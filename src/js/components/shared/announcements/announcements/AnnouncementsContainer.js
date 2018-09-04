import React, { Component} from 'react'
import Auth from 'js/auth'

class AnnouncementsContainer extends Component {
  constructor(props) {
    super(props)
    this.getAnnouncements = this.getAnnouncements.bind(this)
  }

  getAnnouncements = (e, meta) => {
    const { per_page } = this.props.announcements.meta || {}
    const { recipient_type, recipient_id } = this.props
    return this.props.getAnnouncements({
      per_page,
      page: meta.activePage,
      recipient_id,
      recipient_type
    })
  }

  getProps = () => ({
    ...this.props,
    getAnnouncements: this.getAnnouncements,
    current_user: Auth.currentUser(),
  })

  render () {
    return this.props.children(this.getProps())
  }
}

export default AnnouncementsContainer
