import React from 'react'
import styled from 'styled-components'

const StyledTextArea = styled.textarea`
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  
  &::placeholder {
    color: #ccc;
  }
`

const TextArea = ({
  className,
  placeholder,
  children,
  ...otherProps
}) => (
  <StyledTextArea className={className} placeholder={placeholder} {...otherProps}>
    {children}
  </StyledTextArea>
)

export default TextArea