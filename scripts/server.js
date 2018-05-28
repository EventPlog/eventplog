require('newrelic')
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')

const port = process.env.PORT || 9000

app.use(cors())
app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '..','build', 'index.html'));
});

app.listen(port);