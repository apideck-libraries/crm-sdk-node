
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./node.cjs.production.min.js')
} else {
  module.exports = require('./node.cjs.development.js')
}
