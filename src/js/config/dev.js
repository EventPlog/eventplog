import common from './common'
export default {
  ...common,
  host: process.env.REACT_APP_EVENTPLOG_API || 'https://techmeetupsng-backend-staging.herokuapp.com'
}