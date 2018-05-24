import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'


const configureStore = () => {
  return createStore(
    rootReducer,
    compose.apply(null, getMiddleware())
  )
}

const getMiddleware = () => {
  let logger = createLogger();
  let middleware = applyMiddleware(thunk);

  if (process.ENV !== 'production') {
    middleware = applyMiddleware(thunk, logger);
  }

  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    middleware = [middleware, window.__REDUX_DEVTOOLS_EXTENSION__()]
  }

  return middleware;
};

export default configureStore;

