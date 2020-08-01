const { DataTypes } = require('sequelize')

const db = require('../config/db')

const Subject = db.define('subject', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  }
})

module.exports = Subject