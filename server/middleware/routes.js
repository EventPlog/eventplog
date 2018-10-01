import webAPI from '../../src/js/utils/webAPI'
import App from 'js/app'
import Community from 'js/components/communities/scenes/community'
import Event from 'js/components/events/scenes/event'
import serialize from 'serialize-javascript'

const description = 'Accountable, learning-based events designed to meet your goals.'

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
            <meta property="og:title" content="${community.display_name} - EventPlog" />
            <meta name="description" content="${community.description || description} - EventPlog" />
            <meta property="og:description" content="${community.description || description}" />
            <meta property="og:image" content="${community.featured_image}" />
            <meta property="twitter:title" content="${community.display_name} - EventPlog" />
            <meta property="twitter:description" content="${community.description || description}" />
            <meta property="twitter:image" content="${community.featured_image}" />
            <link rel="canonical" href="https://eventplog.com${path}">
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
            <meta property="og:title" content="${event.title} - EventPlog" />
            <meta name="description" content="${event.description || description} - EventPlog" />
            <meta property="og:description" content="${event.description || description}" />
            <meta property="og:image" content="${event.featured_image}" />
            <meta property="twitter:title" content="${event.title} - EventPlog" />
            <meta property="twitter:description" content="${event.description || description}" />
            <meta property="twitter:image" content="${event.featured_image}" />
            <link rel="canonical" href="https://eventplog.com${path}">
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