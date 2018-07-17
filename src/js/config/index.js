if (process.env.NODE_ENV == 'development') {
  module.exports = require('./dev')
}
else if (process.env.NODE_ENV == 'staging') {
  module.exports = require('./staging')
}
else {
  module.exports = require('./prod')
}
