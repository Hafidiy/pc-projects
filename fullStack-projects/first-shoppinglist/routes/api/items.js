const route = require('express').Router()
const auth = require('../../middleware/auth')

// Item model
const Item = require('../../models/Item')

// @route   GET api/items
// @desc    GET All items
// @access  Public
route.get('/', async (req, res) => {
  const item = await Item.find().sort({ date: -1 })

  res.json(item)
})

// @route   POST api/items
// @desc    Create an Item
// @access  Private
route.post('/', auth, async (req, res) => {
  const newItem = new Item({
    name: req.body.name
  })

  const item = await newItem.save()

  res.json(item)
})

// @route   DELETE api/items
// @desc    Delete an Item
// @access  Private
route.delete('/:id', auth, async (req, res) => {
  try{
    const item = await Item.deleteOne({_id: req.params.id})
    res.json({success: true})
  } catch(err){
    res.status(404).json({success: false})
  }
})

module.exports = route