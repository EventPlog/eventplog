import React from 'react'

import styled from 'styled-components'

const StyledFullRow = styled.div`
  flex: 100%;
`
const FullRow = ({
  children,
  ...otherProps
}) => (
  <StyledFullRow {...otherProps}>
    {children}
  </StyledFullRow>
)

export default FullRow