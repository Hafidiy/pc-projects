const Sequelize = require('sequelize')
const db = require('../config/database')

const Gig = db.define('gig', {
  title: {
    type: Sequelize.STRING
  },
  technologies: {
    type: Sequelize.STRING
  },
  budget: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  contact_email: {
    type: Sequelize.STRING
  }
})

module.exports = Gig