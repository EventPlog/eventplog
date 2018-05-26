import Config from '../config';
import fetch from 'isomorphic-fetch';
import Auth from '../auth/actions'

const requestPath = (path, method, data = {}) => {
  if (method === 'GET' && data.length > 0) {
    return path + '?' + encodeURIComponent(JSON.stringify(data));
  }
  return path;
};

const requestBody = (data, method) => {
  return method === 'GET' ?
    null : JSON.stringify(data);
};

/**
* @return {Object} Headers containing auth details
*/
export function requestHeaders() {
  return new Headers({
    'Authorization': `Bearer ${Auth.user_token}`,
    'Content-Type': 'application/json'
  });
}

/**
* @param {String} path: eg '/questions'
* @param {String} method: eg 'POST'
* @param {Object} data: eg {id: 1}
* @return {Object} fetch: to be used in views that check for success or failure
*/
export default function processRequest(path, method, data = {}) {
  let url = Config.host + requestPath(path, method, data);
  return fetch(url, {
    method  : method,
    headers : requestHeaders(),
    mode    : 'cors',
    cache   : 'default',
    body    : requestBody(data, method)
  })
  .then(async(response) => {
    if (response.ok) return response.json()
    let message  = await response.json()
    throw(message)
  })
  .catch(err => {
    throw (err);
  });
}
