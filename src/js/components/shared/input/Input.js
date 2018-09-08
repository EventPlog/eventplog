import React from 'react'
import styled, { css } from 'styled-components'
import { Input as SemanticInput } from 'semantic-ui-react'
import { lighten} from 'polished'

import colors from '../../../styles/theme/colors'

const styles = css`
  background: ${lighten(0, colors.gray)} !important;
  border-radius: 5px;
  border: none !important;
`

const Input = ({className, ...props}) => (
  <SemanticInput className={className} {...props} />
)

export default styled(Input)`${styles}`
