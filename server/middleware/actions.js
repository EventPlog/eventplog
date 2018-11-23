import webAPI from '../../src/js/utils/webAPI'
import serialize from 'serialize-javascript'

export const fetchUserMeta = ({ path, params = {} }) => {
  return webAPI({path: `/api/v1/web/users/${params.id.split('-').pop()}`})
    .then(user => (
      `
        <title>${user.display_name} ${user.occupation ? `- ${user.occupation}` : ''}</title>
        <meta property="og:title" content="${user.display_name} ${user.occupation ? `- ${user.occupation}` : ''}" />
        <meta name="description" content="${user.bio || ''} - EventPlog" />
        <meta property="og:description" content="${user.bio || ''}" />
        <meta property="og:image" content="${user.avatar_url}" />
        <meta property="og:url" content="https://eventplog.com${path}">
        <meta property="twitter:title" content="${user.display_name} - EventPlog" />
        <meta property="twitter:description" content="${user.bio || ''}" />
        <meta property="twitter:image" content="${user.avatar_url}" />
        <link rel="canonical" href="https://eventplog.com${path}">
        <script>window.__INITIAL_DATA__=${serialize({user})}</script>
      `
    ))
    .catch(err => {console.log(err); return ''})
}

export const fetchCommunityMeta = ({ path, params = {} }) => {
  return webAPI({path: `/api/v1/web/communities/${params.id}`})
    .then(community => (
      `
        <title>${community.title} - EventPlog</title>
        <meta property="og:title" content="${community.display_name} - EventPlog" />
        <meta name="description" content="${community.description || ''} - EventPlog" />
        <meta property="og:description" content="${community.description || ''}" />
        <meta property="og:image" content="${community.featured_image}" />
        <meta property="og:url" content="https://eventplog.com${path}">
        <meta property="twitter:title" content="${community.display_name} - EventPlog" />
        <meta property="twitter:description" content="${community.description || ''}" />
        <meta property="twitter:image" content="${community.featured_image}" />
        <link rel="canonical" href="https://eventplog.com${path}">
        <script>window.__INITIAL_DATA__=${serialize({community})}</script>
      `
    ))
    .catch(err => {console.log(err); return ''})
}

export const fetchEventMeta = ({ path,  params = {} }) => {
  return webAPI({path: `/api/v1/web/events/${params.id}`})
    .then(event => (
      `
        <title>${event.title} - EventPlog</title>
        <meta property="og:title" content="${event.title} - EventPlog" />
        <meta name="description" content="${event.description || ''} - EventPlog" />
        <meta property="og:description" content="${event.description || ''}" />
        <meta property="og:image" content="${event.featured_image}" />
        <meta property="og:url" content="https://eventplog.com${path}">
        <meta property="twitter:title" content="${event.title} - EventPlog" />
        <meta property="twitter:description" content="${event.description || ''}" />
        <meta property="twitter:image" content="${event.featured_image}" />
        <link rel="canonical" href="https://eventplog.com${path}">
        <script>window.__INITIAL_DATA__=${serialize({event})}</script>
        <script type="application/ld+json">
          {
            "@context": "http:\/\/schema.org",
            "@type": "Event",
            "@id":"#event",
            "name": "${event.title}",
            "url": "https://eventplog.com${path}",
            "startDate": "${event.start_time}",
            "location": {
              "@type": "Place",
              "name": "${event.venue}"
            },
            "image": [
              "${event.featured_image}"
             ],
            "description": "${event.description}",
            "endDate": "${event.end_time}",
            "offers": {
              "@type": "Offer",
              "url": "https://eventplog.com${path}",
              "price": "0",
              "priceCurrency": "NGN"
            }
          }
          </script>
      `
    ))
    .catch(err => {
      console.log(err);
      return ''
    })
}

