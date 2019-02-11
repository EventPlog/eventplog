import React from 'react'
import styled, { css } from 'styled-components'
import { Select } from 'semantic-ui-react'
import { lighten} from 'polished'

import colors from 'js/styles/theme/colors'

const styles = css`
  background: ${lighten(0, colors.gray)} !important;
`

// for some reason this can't export when named 'formatOptions'
export const formatOptions = (options = []) => (
  options && options.length
    ? options.map(option => ({
        key: option,
        value: option,
        text: option,
      }))
    : []
)

const Input = ({className, ...props}) => (
  <Select className={className} {...props} />
)

export default styled(Input)`${styles}`
