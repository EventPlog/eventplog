import React from 'react'
import styled, { css } from 'styled-components'
import DatePicker from 'react-datepicker'
import dtpStyles from './react-dtp.css'

const Styles = styled.div`
  ${ dtpStyles }
  
  position: relative;
  
  .date-time-picker {
    width: 100%;
  }
  
  .react-datepicker__input-container {
    width: 100%;
  }
  
  .react-datepicker-wrapper {
    width: 100%;
  }
  
`

const DateTimePicker = React.forwardRef(({className, ...props}, ref) => (
  <Styles className={className}>
    <DatePicker
      showTimeSelect
      {...props}
      ref={ref} className={`${className} date-time-picker`}
      todayButton={"Today"}
      dateFormat="MMMM d, yyyy h:mm aa" />
  </Styles>
))

export default DateTimePicker
