import Config from '../config';
import fetch from 'isomorphic-fetch';
import Auth from '../auth/actions'

const requestPath = (path, method, data = {}) => {
  if (method === 'GET' && Object.keys(data).length > 0) {
    return path + '?' + serialize(data);
  }
  return path;
};

const serialize = function(obj) {
  let str = [];
  for (let p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

const requestBody = (data, method) => {
  return method === 'GET' ?
    null : JSON.stringify(data);
};

/**
* @return {Object} Headers containing auth details
*/
export function requestHeaders(uploadOp) {
  let headers =  {
    'Authorization': `Bearer ${Auth.user_token}`,
    'Access-Control-Allow-Origin': '*'
  }
  if(!uploadOp) headers['Content-Type'] = 'application/json';

  return new Headers(headers)
}

/**
* @param {String} path: eg '/questions'
* @param {String} method: eg 'POST'
* @param {Object} data: eg {id: 1}
* @param {Boolean} uploadOp: true/false
* @return {Object} fetch: to be used in views that check for success or failure
*/
export default function processRequest(path, method, data = {}, uploadOp = false) {
  let url = Config.host + requestPath(path, method, data);
  return fetch(url, {
    method  : method,
    headers : requestHeaders(uploadOp),
    mode    : 'cors',
    cache   : 'default',
    body    : uploadOp ? data : requestBody(data, method)
  })
  .then(async(response) => {
    if (response.ok) return response.json()
    let message  = await response.json()
    throw(message || response.status)
  })
  .catch(err => {
    throw (err);
  });
}
