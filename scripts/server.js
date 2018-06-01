require('newrelic')
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')

const port = process.env.PORT || 9000

app.use(cors())
app.use(express.static(path.join(__dirname, '..', 'build')));

/* Redirect http to https */
app.get('*', function(req,res,next) {
  if(req.headers['x-forwarded-proto'] != 'https' && process.env.NODE_ENV === 'production')
    res.redirect('https://'+req.hostname+req.url)
  else
    next() /* Continue to other routes if we're not redirecting */
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '..','build', 'index.html'));
});

app.listen(port);