import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from "react-router-dom"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import configureStore from '../../src/js/store/configureStore'
import Loadable from 'react-loadable'
import routes from './routes'

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

    const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}

    const promise = activeRoute.fetchInitialData
      ? activeRoute.fetchInitialData(matchPath(req.url, activeRoute.path))
      : Promise.resolve()

    // return res.send(htmlData)
    promise.then(data => {
      const context = { data }

      /*
      const markup = renderToString(
        <Loadable.Capture report={m => modules.push(m)}>
          <StaticRouter location={req.url}>
            <Provider store={store}>
              <App />
            </Provider>
          </StaticRouter>
        </Loadable.Capture>
      )
      */
      // render the app as a string
      // const html = ReactDOMServer.renderToString(<App />);

      // inject the rendered app into our html and send it
      /*
      htmlData = htmlData.replace(
        /<div id="root">(.|\n)*?<\/div>/,
        `<div id="root" class="check">${'d'}</div>`
      )
      */

      let htmData = htmlData.replace(
        '<head>',
        `<head>${data || ''}`
      )

      htmData = htmData.replace(
        /<\/head>/,
        `${data || ''}</head>`
      )

      return res.send(
        htmData
      );

    }).catch(e => {
      console.log(e)
      next
    })

  });
}