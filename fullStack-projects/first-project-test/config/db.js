const { Sequelize } = require('sequelize')

const db = new Sequelize('lms-test', 'postgres', '2000', {
  host:     'localhost',
  dialect:  'postgres'
})

module.exports = db