const route = require('express').Router()
const Gig = require('../models/Gig')
const { Op } = require('sequelize')

// Get gig list
route.get('/', (req, res) => {
  Gig.findAll()
    .then(gigs => res.render('gigs', { gigs }))
    .catch(err => {
      console.log('Error: ', err)
      res.send('I am sorry')
    })
})

// Display add gig form
route.get('/add', (req, res) => res.render('add'))

// Add a gig
route.post('/add', async (req, res) => {
  let { title, technologies, budget, description, contact_email } = req.body
  let errors = []

  // Validation Fields
  if(!title) errors.push({ text: 'Please add a title' })
  if(!technologies) errors.push({ text: 'Please add some technologies' })
  if(!description) errors.push({ text: 'Please add a description' })
  if(!contact_email) errors.push({ text: 'Please add a contact email' })

  if(errors.length > 0) {
    res.render('add', {
      errors,
      title,
      technologies,
      budget,
      description,
      contact_email
    })
  } else {
    if(!budget){
      budget = 'Unknown'
    } else {
      budget = `$${budget}`
    }

    technologies = technologies.toLowerCase().replace(/, /g, ',')

    // Insert into table
    Gig.create({
      title,
      technologies,
      description,
      budget,
      contact_email
    })
      .then(gig => {
        res.redirect('/gigs')
      })
      .catch(err => {
        console.log('Error: ', err)
        res.send('I am sorry')
      })
  }
})

// Search for gigs
route.get('/search', (req, res) => {
  let { term } = req.query

  term = term.toLowerCase()

  Gig.findAll({ where: { technologies: {[Op.like]: '%' + term + '%'} } })
    .then(gigs => res.render('gigs', { gigs }))
    .catch(err => console.log('Error: ', err))
})

module.exports = route