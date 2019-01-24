import express from 'express';
import compression from 'compression'

// internal
import serverRenderer from './middleware/renderer';
import Loadable from 'react-loadable'
import sslRedirect from 'heroku-ssl-redirect'

const PORT = process.env.PORT || 9000
const path = require('path');


// initialize the application
const app = express();
const router = express.Router();

// enable compression
app.use(compression())

// root (/) should always serve our server rendered page
// router.use('^/$', serverRenderer);

if (process.env.NODE_ENV == 'production' && process.env.TURN_ON_SSL_REDIRECT) {
  // enable ssl redirect
  app.use(sslRedirect());
}

// other static resources should just be served as they are
router.use(express.static(
  path.resolve(__dirname, '..', 'build'),
  { maxAge: '30d' },
));

// tell the app to use the above rules
router.get('*', serverRenderer);
app.use(router);

Loadable.preloadAll().then(() => {
  // start the app
  app.listen(PORT, (error) => {
    if (error) {
      return console.log('something bad happened', error);
    }

    console.log("listening on " + PORT + "...");
  });
});