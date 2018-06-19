import { css } from 'styled-components'

export default css`
  .react-datetime-picker {
    display: inline-flex;
    position: relative;
  }
  .react-datetime-picker,
  .react-datetime-picker *,
  .react-datetime-picker *:before,
  .react-datetime-picker *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-datetime-picker--disabled {
    background-color: #f0f0f0;
    color: #6d6d6d;
  }
  .react-datetime-picker__button {
    display: flex;
    border: thin solid gray;
  }
  .react-datetime-picker__button__input {
    min-width: calc(4px + (4px * 3) +  3.24em  +  0.434em);
    flex-grow: 1;
    display: flex;
    padding: 0 2px;
    align-items: baseline;
  }
  .react-datetime-picker__button__input__divider {
    padding: 1px 0;
  }
  .react-datetime-picker__button__input__input {
    min-width: calc(4px +  0.54em);
    height: 100%;
    position: relative;
    padding: 1px;
    border: 0;
    background: none;
    -moz-appearance: textfield;
  }
  .react-datetime-picker__button__input__input::-webkit-outer-spin-button,
  .react-datetime-picker__button__input__input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .react-datetime-picker__button__input__input:invalid {
    background: rgba(255, 0, 0, 0.1);
  }
  .react-datetime-picker__button__input__input--hasLeadingZero {
    min-width: calc(4px +  1.08em);
    margin-left: -0.54em;
    padding-left: calc(1px +  0.54em);
  }
  .react-datetime-picker__button__icon {
    border: 0;
    background: transparent;
    padding: 4px 6px;
  }
  .react-datetime-picker__button__icon:enabled {
    cursor: pointer;
  }
  .react-datetime-picker__button__icon:enabled:hover svg g,
  .react-datetime-picker__button__icon:enabled:focus svg g {
    stroke: #0078d7;
  }
  .react-datetime-picker__button__icon:disabled svg g {
    stroke: #6d6d6d;
  }
  .react-datetime-picker__button__icon svg {
    display: inherit;
  }
  .react-datetime-picker__calendar,
  .react-datetime-picker__clock {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
  }
  .react-datetime-picker__calendar--closed,
  .react-datetime-picker__clock--closed {
    display: none;
  }
  .react-datetime-picker__calendar {
    width: 350px;
    max-width: 100vw;
  }
  .react-datetime-picker__calendar .react-calendar {
    border-width: thin;
  }
  .react-datetime-picker__clock {
    width: 200px;
    height: 200px;
    max-width: 100vw;
    padding: 25px;
    background-color: white;
    border: thin solid #a0a096;
  }
`
