require('newrelic')
const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 9000

app.use(express.static(path.join(__dirname, '..', 'build')));

app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https') {
    res.redirect(`https://${req.header('host')}${req.url}`)
  } else {
    next();
  }
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '..','build', 'index.html'));
});

app.listen(port);