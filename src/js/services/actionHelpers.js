import webAPI from '../utils/webAPI';
import Validator from '../utils/validator';
// import { receiveError } from './errorActions';

const baseActions = ({
  requestType,
  receiveType,
  failType
}) => {
  return {
    request: (data) => {
      return {
        type: requestType,
        payload: { data }
      }
    },
    receive: (data) => {
      return {
        type: receiveType,
        payload: data
      }
    },
    fail: (error) => {
      return {
        type: failType,
        payload: error
      }
    }
  }
}

const handleApiCall = ({
  actions,
  data,
  errorMessage,
  caller,
  route,
  requestMethod,
  cb,
  uploadOp = false
}) => {
  return (dispatch) => {
    let validationOptions = {};
    if (data) {
      // Object.keys(data).forEach(dataKey => {
      //   validationOptions[dataKey] = {
      //     required: true
      //   }
      // });
    }

    let validator = new Validator(data, validationOptions);
    const {isValid, concatenatedErrors} = validator.validateAllInputs();
    dispatch(actions.request(data))
    if (isValid) {
      return webAPI(route, requestMethod, data, uploadOp)
        .then(response => {
          if (response.error) {
            console.log(response.error)
            dispatch(actions.fail(response.errors))
            // errorMessage && dispatch(receiveError(errorMessage, caller))
          } else {
            if (cb) {
              dispatch(actions.receive(cb(response)))
            } else {
              dispatch(actions.receive(response))
            }
            return response;
          }
        })
        .catch((error = {}) => {
          // dispatch(actions.fail(error))
          console.log(error)
          dispatch(actions.fail(`${errorMessage} ${error.error}`))
          throw(error.error || errorMessage)
          // errorMessage && dispatch(receiveError(errorMessage, caller))
        });
    } else {
      console.log(concatenatedErrors)
      dispatch(actions.fail(concatenatedErrors))
      return Promise.reject(concatenatedErrors)
      // errorMessage && dispatch(receiveError(concatenatedErrors, caller))
    }
  }
}

export {
  handleApiCall,
  baseActions
}