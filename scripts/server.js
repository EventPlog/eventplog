require('newrelic')
const express = require('express');
const compression = require('compression')
const path = require('path');
const app = express();
const cors = require('cors')
const sslRedirect = require('heroku-ssl-redirect');
const serverRenderer = require('../server/middleware/renderer');

const port = process.env.PORT || 9000

// enable compression
app.use(compression())

// enable ssl redirect
app.use(sslRedirect());

app.use(cors())
app.use(express.static(path.join(__dirname, '..', 'build')));


app.get('*', serverRenderer);
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, '..','build', 'index.html'));
// });

app.listen(port);
