'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://localhost:3000"'
  BASE_API:'"http://192.168.8.158:8090/api"'
    // BASE_API: '"/api"'

})
