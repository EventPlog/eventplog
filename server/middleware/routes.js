import App from 'js/app'
import Community from 'js/components/communities/scenes/community'
import Event from 'js/components/events/scenes/event'
import { fetchCommunityMeta, fetchEventMeta } from './actions'

const routes =  [
  {
    path: '/c/:id',
    exact: true,
    component: Community,
    fetchInitialData: fetchCommunityMeta,
  },
  {
    path: '/e/:id',
    component: Event,
    fetchInitialData: fetchEventMeta
  },
  {
    path: '/e/:id/register',
    component: Event,
    fetchInitialData: fetchEventMeta
  },
  {
    path: '/e/:id/*',
    component: Event,
    fetchInitialData: fetchEventMeta
  },
  {
    path: '*',
    component: App
  }
]

export default routes