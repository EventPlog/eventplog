// import App from 'js/app'
// import Community from 'js/components/communities/scenes/community'
// import Event from 'js/components/events/scenes/event'
const {
  fetchCommunityMeta,
  fetchEventMeta,
  fetchUserMeta,
} = require('./actions')

const routes =  [
  {
    path: '/c/:id',
    exact: true,
    // component: Community,
    fetchInitialData: fetchCommunityMeta,
  },
  {
    path: '/e/:id',
    // component: Event,
    fetchInitialData: fetchEventMeta
  },
  {
    path: '/e/:id/*',
    // component: Event,
    fetchInitialData: fetchEventMeta
  },
  {
    path: '/u/:id',
    // component: Event,
    fetchInitialData: fetchUserMeta
  },
  {
    path: '/u/:id/*',
    // component: Event,
    fetchInitialData: fetchUserMeta
  },
  {
    path: '*',
    // component: App
  }
]

module.exports = routes