import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from "react-router-dom"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import configureStore from '../../src/js/store/configureStore'

// import our main App component
import App from '../../src/js/app';

const path = require("path");
const fs = require("fs");

export default (req, res, next) => {
  const store = configureStore()
  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end()
    }

    const markup = renderToString(
      <StaticRouter location={req.url}>
        <Provider store={store}>
          <App />
        </Provider>
      </StaticRouter>
    )

    // render the app as a string
    // const html = ReactDOMServer.renderToString(<App />);

    // inject the rendered app into our html and send it
    return res.send(
      htmlData.replace(
        '<div id="root"></div>',
        `<div id="root">${markup}</div>`
      )
    );
  });
}