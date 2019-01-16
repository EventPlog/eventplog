import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import styled, {css} from 'styled-components'

const ModalStyles = css`
`
const ModalComponent = ({ className = '', style, children, ...otherProps }) => (
  <Modal className={className}
         style={{ margin: 'auto', marginTop: 'auto', ...style }}
         {...otherProps}>
    {children}
  </Modal>
)

export default styled(ModalComponent)`${ModalStyles}`