import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, MemoryRouter, matchPath } from "react-router-dom"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import configureStore from '../../src/js/store/configureStore'
import Loadable from 'react-loadable'

// import our main App component
import App from '../../src/js/app';

const path = require("path");
const fs = require("fs");

import manifest from '../../build/asset-manifest.json';

// const extractAssets = (assets, chunks) => Object.keys(assets)
//   .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
//   .map(k => assets[k]);
//
// // then, after Loadable.Capture
// console.log(extractAssets(manifest, modules));

export default (req, res, next) => {
  const store = configureStore()
  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end()
    }

    const modules = [];

    const markup = renderToString(
      <Loadable.Capture report={m => modules.push(m)}>
        <StaticRouter location={req.url}>
          <Provider store={store}>
            <App />
          </Provider>
        </StaticRouter>
      </Loadable.Capture>
    )
    // render the app as a string
    // const html = ReactDOMServer.renderToString(<App />);

    // inject the rendered app into our html and send it
    return res.send(
      htmlData.replace(
        // /(<div id="root">(.|\n)*?<\/div>/,
        /<div id="root">(.|\n)*?<\/div>/,
        `<div id="root" class="check">${markup}</div>`
      )
    );
  });
}