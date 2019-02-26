
import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css'
import App from './app';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from '../registerServiceWorker';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { injectGlobal } from 'styled-components';
import colors from './styles/theme/variables'

injectGlobal`
  body {
    margin: 0;
    overflow-x: hidden;
	  font-family: 'proxima-nova', sans-serif;
    
  }
  
  
  *:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  ::selection {
    background: ${ colors.yellow };
  }
  
  ::-moz-selection {
    background: ${ colors.yellow };
  }
  
  p {
    line-height: 1.9rem;
  }
`;


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();