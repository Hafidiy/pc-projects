const { DataTypes } = require('sequelize')

const db = require('../config/db')

const Student = db.define('student', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  firstName: DataTypes.STRING,
  middleName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  age: DataTypes.NUMBER,
  avatar: DataTypes.STRING,
  passportCopy: DataTypes.STRING,
  course: DataTypes.STRING,
  department: DataTypes.STRING,
  departmentGroup: DataTypes.STRING,
  gender: DataTypes.STRING,
  shiftType: DataTypes.STRING,
  paymentType: DataTypes.STRING
})

module.exports = Student