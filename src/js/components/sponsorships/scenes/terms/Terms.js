import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

import ModalComponent from 'js/components/shared/modal'
import ContentEditable from 'js/components/shared/content-editable'
import ReactMarkdown from 'react-markdown'
import styled, { css } from 'styled-components'

const styledTerms = css`
  .description {
    width: 100%;
  }
`
class Terms extends React.Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleAccept = () => {
    this.props.handleAccept()
    this.handleClose()
  }

  handleReject = () => {
    this.props.handleReject()
    this.handleClose()
  }
  render() {
    const {
      terms,
      title,
      canEdit,
      handleChange,
      handleSubmit,
      children,
      className,
    } = this.props

    return (
      <ModalComponent className={className}
                      trigger={<span onClick={this.handleOpen}>{children}</span>}
                      open={this.state.modalOpen}
                      onClose={this.handleClose}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content image scrolling>
          <Modal.Description>
            <ContentEditable propName="organizer_terms"
                             type="textarea"
                             rows="10"
                             style={{minHeight: '60vh'}}
                             canEdit={canEdit}
                             defaultValue={terms}
                             onChange={handleChange}
                             onSubmit={handleSubmit}>
              <ReactMarkdown source={terms} />
            </ContentEditable>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleClose}>
            <Icon name='close' /> Cancel
          </Button>
          <Button onClick={this.handleReject}>
            I don't accept
          </Button>
          <Button onClick={this.handleAccept} primary>
            I accept
          </Button>
        </Modal.Actions>
      </ModalComponent>
    )
  }
}

export default styled(Terms)`${styledTerms}`