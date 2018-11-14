export const addHttp = (url) => {
  if (url.match(/^htt(p|ps):\/\//)) {
    return url;
  }
  return "http://" + url;
}

export const validDate = (input) => {
  const _date = new Date(input)
  return _date.getDate().toString() !== 'NaN' ? _date : new Date()
}

export const pluralize = (word, number = 1) => {
  const knownWords = {
    person: 'people',
    follower: 'followers',
    event: 'events',
    comment: 'comments',
    view: 'views',
    resource: 'resources',
  }
  return number == 1 ? word : (knownWords[word] || word)
}

export const titleize = (word = '') => (
  !!word ? word[0].toUpperCase() + word.substr(1).toLowerCase() : ''
)

export const serialize = function(obj) {
  let str = [];
  for (let p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

export const paramsToObj = (params) => {
  const obj = {}
  params.split('&').forEach(param => {
    const [key, val] = param.split('=')
    obj[key] = val
  })
  return obj
}

export const getSlugFromHostName = (hostname, knownSubs) => {
  const sub = hostname.substr(0, hostname.indexOf('.'))
  if (!sub) return false
  if(knownSubs.split(',').find(s => s == sub)) return false
  return sub
}

export const genEventLink = (event = {}, community = {}) => {
  return `/e/${event.slug || event.id}`
  if (community && community.id) {
    return `/c/${community.slug || community.id}/e/${event.slug || event.id}`
  }
}

export const genCommunityLink = (community = {}) => (
  community && community.id
  ? `/c/${community.slug || community.id}`
  : ''
)

export const genUserProfileLink = (user = {}) => (
  user.id && user.less_formal_name
    ? `/u/${removeSpecialChars(user.less_formal_name)}-${user.id}`
    : '#'
)
export const getUserAvatar = (user = {}) => (
  user.avatar_url || '/sample-avatar.png'
)

export const removeSpecialChars = (str = '') => (
  str.replace(/[^a-zA-Z\d\-]/g, '').toLowerCase()
)