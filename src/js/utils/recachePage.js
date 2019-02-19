import fetch from './webAPI'

const recachePage = (path = '') => {
  const payload = {
    "prerenderToken": process.env.REACT_APP_PRERENDER_TOKEN,
    "url": `${window.location.origin}/${path}`
  }
  fetch({
    url: process.env.REACT_APP_PRERENDER_URL,
    path: '/',
    method: 'POST',
    data: payload
  }).catch(e => {
    console.log(e)
  })
}

export default recachePage