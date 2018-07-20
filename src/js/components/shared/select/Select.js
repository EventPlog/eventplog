import React from 'react'
import styled, { css } from 'styled-components'
import { Select } from 'semantic-ui-react'
import { lighten} from 'polished'

import colors from '../../../styles/theme/colors'

const styles = css`
  background: ${lighten(0, colors.gray)} !important;
`

const Input = ({className, ...props}) => (
  <Select className={className} {...props} />
)

export default styled(Input)`${styles}`
