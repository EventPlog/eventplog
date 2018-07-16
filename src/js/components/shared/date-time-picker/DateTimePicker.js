import React from 'react'
import ReactDateTimePicker from 'js/lib/react-datetime-picker/src/entry.nostyle'
import DateTimePickerStyles from 'js/styles/thirdparty/date-time-picker-styles'
import styled, { css } from 'styled-components'

const Styles = styled.div`
  ${ DateTimePickerStyles }
  
  position: relative;
  
  .date-time-picker {
    width: 100%;
    
    > div {
      border: thin solid #aaa;
      width: 100%;
    }
    
    input {
      padding: 1px !important;
      border: 0 !important;
    }
  }
`

const DateTimePicker = React.forwardRef(({className, ...props}, ref) => (
  <Styles className={className}>
    <ReactDateTimePicker ref={ref} className={`${className} date-time-picker`} {...props} />
  </Styles>
))

export default DateTimePicker
