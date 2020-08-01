const { DataTypes } = require('sequelize')

const db = require('../config/db')

const Room = db.define('room', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  }
})

module.exports = Room