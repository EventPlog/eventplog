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
    response: 'responses',
    member: 'members',
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
  if (!params) return {}
  const obj = {}
  params.split('&').forEach(param => {
    const [key, val] = param.split('=')
    obj[key] = decodeURI(val)
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

export const genCategoryLink = (category = {}) => (
  category && category.id
    ? `/cat/${category.slug || category.id}`
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

export const resizeImage = (imageUrl, size) => {
  const marker = 'dpr_auto'
  const insertIndex = imageUrl.indexOf(marker)

  const newUrl = (width, index) =>
    imageUrl.slice(0, index) + `/c_scale,w_${width}` + imageUrl.slice(index)

  switch(size) {
    case 'thumbnail':
      return insertIndex != -1 ? newUrl(300, insertIndex + marker.length) : imageUrl

    case 'medium':
      return insertIndex != -1 ? newUrl(600, insertIndex + marker.length) : imageUrl

    default:
      if (typeof size != 'number') return imageUrl
      return insertIndex != -1 ? newUrl(size, insertIndex + marker.length) : imageUrl
  }

}

export const splice = (startIndex, charsToReplace, str, strToInsert) => (
  str.slice(0, startIndex) + strToInsert + str.slice(startIndex + Math.abs(charsToReplace))
)

export const addDays = function(days, date = (new Date())) {
  var newDate = new Date(new Date(date).valueOf());
  newDate.setDate(newDate.getDate() + days);
  return newDate;
}

export const subtractDays = function(days, date = (new Date())) {
  var newDate = new Date(new Date(date).valueOf());
  newDate.setDate(newDate.getDate() - days);
  return newDate;
}
