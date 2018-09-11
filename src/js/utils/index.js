export const addHttp = (url) => {
  if (!url.match("~^(?:f|ht)tps?://~i", url)) {
    url = "http://" + url;
  }
  return url;
}

export const validDate = (input) => {
  const _date = new Date(input)
  return _date.getDate().toString() !== 'NaN' ? _date : new Date()
}

export const pluralize = (word, number) => {
  const knownWords = {
    person: 'people',
    follower: 'followers',
    event: 'events'
  }
  return number == 1 ? word : knownWords[word]
}

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

