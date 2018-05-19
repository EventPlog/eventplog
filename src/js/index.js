import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import '../scss/main.scss';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from '../registerServiceWorker';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    margin: 0;
    overflow-x: hidden;
	  font-family: 'proxima-nova', sans-serif;
    
  }
<<<<<<< HEAD

=======
  
  .app-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 50px;
  }
>>>>>>> b6d217665745c025b6df8ebc063cf56e4bd50828
`;


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();