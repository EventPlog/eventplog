import Config from '../config';
import fetch from 'isomorphic-fetch';
import Auth from '../auth/actions'
import { serialize } from 'js/utils'

const requestPath = (path, method, data = {}) => {
  if (method === 'GET' && Object.keys(data).length > 0) {
    return path + '?' + serialize(data);
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
export function requestHeaders(presetHeaders, uploadOp) {
  if (presetHeaders.none) return {}
  if (Object.keys(presetHeaders).length > 0) return presetHeaders
  let headers =  {
    'Authorization': `Bearer ${Auth.user_token}`,
    'Access-Control-Allow-Origin': '*'
  }
  if(!uploadOp) headers['Content-Type'] = 'application/json';

  return new Headers(headers)
}

/**
* @param {String} url: eg 'http://example.com'
* @param {String} path: eg '/questions'
* @param {Object} headers: eg '{Content-Type: json}'
* @param {String} method: eg 'POST'
* @param {Object} data: eg {id: 1}
* @param {Boolean} uploadOp: true/false
* @return {Object} fetch: to be used in views that check for success or failure
*/
export default function processRequest({url, path, headers = {}, method = 'GET', data = {}, uploadOp = false}) {
  let requestUrl = url || Config.host + requestPath(path, method, data);
  return fetch(requestUrl, {
    method  : method,
    headers : requestHeaders(headers, uploadOp),
    mode    : 'cors',
    cache   : 'default',
    body    : uploadOp ? data : requestBody(data, method)
  })
  .then(async(response) => {
    if (response.ok && response.json) return response.json()
    let message  = await response.json()
    throw(message || response.status)
  })
  .catch(err => {
    throw (err);
  });
}
