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
    person: 'people'
  }
  return number = 1 ? word : knownWords[word]
}

