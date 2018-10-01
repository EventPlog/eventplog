import webAPI from '../../src/js/utils/webAPI'
import App from 'js/app'
import Community from 'js/components/communities/scenes/community'
import Event from 'js/components/events/scenes/event'
import serialize from 'serialize-javascript'

const routes =  [
  {
    path: '/c/:id',
    exact: true,
    component: Community,
    fetchInitialData: (path = {}) => {
      return webAPI({path: `/api/v1/web/communities/${path.split('/').pop()}`})
        .then(community => (
          `
            <title>${community.title} - EventPlog</title>
            <meta property="og:title" content='${community.display_name} - EventPlog' />
            <meta property="og:description" content='${community.description}' />
            <meta property="og:image" content='${community.featured_image}' />
            <meta property="twitter:title" content='${community.display_name} - EventPlog' />
            <meta property="twitter:description" content='${community.description}' />
            <meta property="twitter:image" content='${community.featured_image}' />
            <script>window.__INITIAL_DATA__=${serialize({community})}</script>
          `
        ))
        .catch(err => {console.log(err); return ''})
    }
  },
  {
    path: '/c/:communtyId/e/:id',
    component: Event,
    fetchInitialData: (path = {}) =>
      webAPI({path: `/api/v1/web/events/${path.split('/').pop()}`})
        .then(event => (
          `
            <title>${event.title} - EventPlog</title>
            <meta property="og:title" content='${event.title} - EventPlog' />
            <meta property="og:description" content='${event.description}' />
            <meta property="og:image" content='${event.featured_image}' />
            <meta property="twitter:title" content='${event.title} - EventPlog' />
            <meta property="twitter:description" content='${event.description}' />
            <meta property="twitter:image" content='${event.featured_image}' />
            <script>window.__INITIAL_DATA__=${serialize({event})}</script>
          `
        ))
        .catch(err => {console.log(err); return ''})
  },
  {
    path: '*',
    component: App
  }
]

export default routes