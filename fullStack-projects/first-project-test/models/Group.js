const { DataTypes } = require('sequelize')

const db = require('../config/db')

const Group = db.define('group', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  }
})

module.exports = Group