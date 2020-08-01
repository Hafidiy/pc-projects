const { DataTypes } = require('sequelize')

const db = require('../config/db')

const Teacher = db.define('teacher', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  }
})

module.exports = Teacher