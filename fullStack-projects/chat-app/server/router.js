const route = require('express').Router()

route.get('/', (req, res) => {
  res.send('Server is app and running')
})

module.exports = route