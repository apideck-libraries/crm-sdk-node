
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./apideck.cjs.production.min.js')
} else {
  module.exports = require('./apideck.cjs.development.js')
}
