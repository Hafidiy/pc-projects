const { DataTypes } = require('sequelize')

const db = require('../config/db')

module.exports = db.define('transaction', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  text: {
    type: DataTypes.STRING
  },
  amount: {
    type: DataTypes.NUMBER
  }
})