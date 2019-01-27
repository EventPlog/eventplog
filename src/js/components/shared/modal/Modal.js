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
`
const ModalComponent = ({ className = '', style, children, ...otherProps }) => (
  <Modal className={className}
         style={{ margin: 'auto', marginTop: 'auto', ...style }}
         {...otherProps}>
    {children}
  </Modal>
)

export default styled(ModalComponent)`${ModalStyles}`