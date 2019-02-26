import React from 'react'
import { Link } from 'react-router-dom'

//========= INTERNAL ==========
import Button from 'js/components/shared/button'
import Loading from 'js/components/shared/loading'
import Modal from 'js/components/shared/modal'
import BannerPage from 'js/components/shared/banner-page'
import { genEventLink } from 'js/utils'
import createLoader from 'js/components/shared/loading/createLoadable'

const RegistrationForm = createLoader(() =>
  import('js/components/guests/scenes/show-rsvp-questions' /* webpackChunkName: "RegistrationForm" */), 'RegistrationForm')

export const generateTitle = (event = {}) => {
  return (
    <Link to={genEventLink(event)}>
      {event.title}
    </Link>
  )
}

class RegistrationButton extends React.Component {
  state = {showModal: this.props.showForm}

  setShowModal = (modalState) => this.setState({showModal: modalState})

  render() {
    const {className: btnClass, showForm, event} = this.props
    const { showModal } = this.state

    const setShowModal = this.setShowModal
    if (!(event && event.needs_sponsorship)) return ''

    return (
      <Modal
        trigger={
        ({className, ...props}) =>
          <Button {...props} className={`img-btn ${className} ${btnClass}`}>
            Register
          </Button>
      } >
        {
          ({handleOpen, handleClose, modalOpen}) => {

            const handleCloseModal = () => {
              setShowModal(false)
              handleClose()
            }

            showModal && !modalOpen && handleOpen()

            return (
              <div>
                {
                  event && event.id
                    ? <Modal.Content>
                      <BannerPage title={generateTitle(event)}
                                  bannerImage={event.featured_image}>
                        <RegistrationForm event={event}
                                          handleSubmit={handleCloseModal}
                                          handleClose={handleCloseModal} />
                      </BannerPage>
                    </Modal.Content>
                    : <Loading />
                }
              </div>
            )
          }
        }
      </Modal>
    )
  }
}

export default RegistrationButton
