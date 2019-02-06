import React from 'react'
import styled, { css } from 'styled-components'
import {TextArea} from 'semantic-ui-react'

const styles = css`
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  
  &::placeholder {
    color: #ccc;
  }
`

const TextAreaComponent = React.forwardRef(({
  className,
  placeholder,
  children,
  ...otherProps
}, ref) => (
  <TextArea ref={ref} className={className} placeholder={placeholder} {...otherProps}>
    {children}
  </TextArea>
))
export default styled(TextAreaComponent)`${styles}`


