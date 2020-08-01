const { DataTypes } = require('sequelize')
const db = require('../config/db')

const Book = db.define('book', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING
  },
  author: DataTypes.STRING,
  body: DataTypes.TEXT,
  isPublished: DataTypes.BOOLEAN
})

module.exports = Book