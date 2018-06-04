require('newrelic')
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')
const sslRedirect = require('heroku-ssl-redirect');

const port = process.env.PORT || 9000

// enable ssl redirect
app.use(sslRedirect());

app.use(cors())
app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '..','build', 'index.html'));
});

app.listen(port);