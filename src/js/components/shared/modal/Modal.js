import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import styled, {css} from 'styled-components'
import { media } from 'js/styles/mixins'

const ModalStyles = css`
  .content-header {
    padding: 1rem 1rem 0.5rem;
  }
  
  .hidden-xs {
    ${
      media.phone`
        display: none;
      `
    }
  } 
  
  .btn-close {
    padding: 1rem;
    margin: 1rem;
  }
`

class ModalComponent extends React.Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  getProps = () => ({
    ...this.props,
    ...this.state,
    handleOpen: this.handleOpen,
    handleClose: this.handleClose
  })

  render() {
    const {
      className = '',
      style,
      handleClose,
      children,
      trigger: Trigger,
      ...otherProps
    } = this.props

    return (
      <Modal className={className}
             open={this.state.modalOpen}
             trigger={<Trigger onClick={this.handleOpen} />}
             onClose={handleClose || this.handleClose}
             style={{ margin: 'auto', marginTop: 'auto', ...style }}
             {...otherProps}>
        {typeof children == 'function'
          ? children(this.getProps())
          : children
        }
      </Modal>
    )
  }
}

ModalComponent.Header = Modal.Header
ModalComponent.Content = Modal.Content
ModalComponent.Footer = Modal.Footer
ModalComponent.Actions = Modal.Actions

export default styled(ModalComponent)`${ModalStyles}`