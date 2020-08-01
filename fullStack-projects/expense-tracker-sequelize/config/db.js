const { Sequelize } = require('sequelize')

module.exports = new Sequelize('expense-tracker', 'postgres', '2000', {
  host     : 'localhost',
  dialect  : 'postgres'
})