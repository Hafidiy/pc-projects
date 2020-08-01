const { DataTypes } = require('sequelize')
const db = require('../config/db')

const User = db.define('user', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  name: DataTypes.STRING,
  age: DataTypes.INTEGER,
})

module.exports = User