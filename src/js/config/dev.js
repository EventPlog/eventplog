import common from './common'
export default {
  ...common,
  host: process.env.REACT_APP_EVENTPLOG_API || 'http://localhost:8080'
}