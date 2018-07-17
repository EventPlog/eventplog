import React, { Component} from 'react'

import { Auth } from 'js/auth'

class AnnouncementContainer extends Component {
  constructor(props) {
    super(props)

    this.state = { announcement: {} }
    this.updateAnnouncement = this.updateAnnouncement.bind(this)
  }

  componentDidMount() {
    this.setState({announcement: this.props.announcement})
  }

  handleChange = (key, value) => {
    this.setState({ announcement: {...this.state.announcement, [key]: value} })
  }

  createAnnouncement = () => {
    const { recipient_id, recipient_type, trackable_id, trackable_type } = this.props
    const announcement = {...this.state.announcement, recipient_id, recipient_type, trackable_id, trackable_type}
    return this.props.createAnnouncement(announcement, this.props.parentAnnouncement).then(res => {
      this.setState({ announcement: {body: ''} })
    })
  }

  updateAnnouncement = () => {
    return this.props.updateAnnouncement(this.state.announcement, this.props.parentAnnouncement)
  }

  deleteAnnouncement = () => {
    var confirmed = confirm('Are you sure you want to delete this announcement?')
    if (!confirmed) { return }
    const announcement = {...this.state.announcement, deleted: true}
    return this.props.updateAnnouncement(announcement, this.props.parentAnnouncement)
  }

  getProps = () => ({
    ...this.state,
    ...this.props,
    handleChange: this.handleChange,
    createAnnouncement: this.createAnnouncement,
    updateAnnouncement: this.updateAnnouncement,
    deleteAnnouncement: this.deleteAnnouncement,
    current_user: Auth.currentUser(),
  })

  render () {
    return this.props.children(this.getProps())
  }
}

export default AnnouncementContainer
