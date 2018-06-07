import React from 'react'
import styled from 'styled-components'
import { lighten} from 'polished'

import colors from '../../../../styles/theme/colors'



const StyledInput = styled.input`
  background: ${lighten(0.42, colors.grayLight)} !important;
  border: none !important;
`

const Input = (props) => (
  <StyledInput {...props} />
)

export default Input
