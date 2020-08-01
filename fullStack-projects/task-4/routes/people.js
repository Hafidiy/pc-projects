const fs = require('fs')
const path = require('path')
const route = require('express').Router()

const Person = require('../models/Person')

route.get('/', async (req, res) => {
  let tmp = await Person.find()

  res.json(tmp)
})

route.get('/:name', async (req, res) => {
  let result = await Person.find({
    name: {
      $regex: new RegExp(req.params.name)
    }
  })
  res.json(result)
})

route.post('/', async (req, res) => {
  let result = await Person.insertMany([req.body])
  result = result[0]

  res.json(result)
})

route.delete('/', async (req, res) => {
  let result = await Person.findOne({ _id: req.body.id })

  if(result.passport){
    fs.unlink(
      path.join(__dirname, '..', 'public', result['passport']),
      async (err) => {
        if(err) res.json(err)
      }
    )
  }

  if(result.degree){
    fs.unlink(
      path.join(__dirname, '..', 'public', result['degree']),
      async (err) => {
        if(err) res.json(err)
      }
    )
  }

  if(result.soldier){
    fs.unlink(
      path.join(__dirname, '..', 'public', result['soldier']),
      async (err) => {
        if(err) res.json(err)
      }
    )
  }
  
  await Person.findOneAndDelete({ _id: req.body.id })

  res.json({msg: 200})
})

module.exports = route