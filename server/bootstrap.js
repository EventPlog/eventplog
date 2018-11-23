require('dotenv')
process.env.NODE_ENV = process.env.NODE_ENV || 'production'
process.env.NODE_PATH = 'src'
require('../config/env');

require('ignore-styles');

require('babel-register')({
  ignore: [ /(node_modules)/ ],
  presets: ['es2015', 'react-app'],
  plugins: [
    'syntax-dynamic-import',
    'dynamic-import-node',
    'react-loadable/babel'
  ]
});


require('./index');