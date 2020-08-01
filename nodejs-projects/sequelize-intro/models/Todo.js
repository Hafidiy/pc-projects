const { DataTypes } = require('sequelize')
const db = require('../config/db')

const Todo = db.define('todo', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  title: DataTypes.STRING,
  completed: DataTypes.BOOLEAN,
  userId: DataTypes.STRING,
})

module.exports = Todo