const { Sequelize } = require('sequelize')

module.exports = new Sequelize('codegig', 'postgres', '2000', {
  host: 'localhost',
  dialect: 'postgres'
})