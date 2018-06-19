import { css } from 'styled-components'

export default css `
  .react-calendar {
      width: 350px;
      max-width: 100%;
      background: white;
      border: 1px solid #a0a096;
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.125em;
  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
  }
  .react-calendar button {
      margin: 0;
      border: 0;
      outline: none;
  }
  .react-calendar button:enabled:hover {
      cursor: pointer;
  }
  .react-calendar__navigation {
      height: 44px;
      margin-bottom: 1em;
  }
  .react-calendar__navigation button {
      min-width: 44px;
      background: none;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
      background-color: #e6e6e6;
  }
  .react-calendar__navigation button[disabled] {
      background-color: #f0f0f0;
  }
  .react-calendar__month-view__weekdays {
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;
      font-size: .75em;
  }
  .react-calendar__month-view__weekdays__weekday {
      padding: .5em;
  }
  .react-calendar__month-view__weekNumbers {
      font-weight: bold;
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: .75em;
      padding: calc(1em) calc(0.66666667em);
  }
  .react-calendar__month-view__days__day--weekend {
      color: red;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
      color: #969696;
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
      padding: 2em .5em;
  }
  .react-calendar__tile {
      max-width: 100%;
      text-align: center;
      padding: .75em .5em;
      background: none;
  }
  button.react-calendar__tile:disabled {
      background-color: #f0f0f0;
  }
  button.react-calendar__tile:enabled:hover,
  button.react-calendar__tile:enabled:focus {
      background-color: #e6e6e6;
  }
  .react-calendar__tile--hasActive {
      background: #76baff;
  }
  button.react-calendar__tile--hasActive:enabled:hover,
  button.react-calendar__tile--hasActive:enabled:focus {
      background: #a9d4ff;
  }
  .react-calendar__tile--active {
      background: #006edc;
      color: white;
  }
  button.react-calendar__tile--active:enabled:hover,
  button.react-calendar__tile--active:enabled:focus {
      background: #1087ff;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
      background-color: #e6e6e6;
  }
`