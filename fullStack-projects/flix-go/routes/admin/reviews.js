const router = require('express').Router()

const { User } = require('../../models/User')
const { Item } = require('../../models/Item')
const { Review, validateReview } = require('../../models/Review')

const { sendError } = require('../../utils')

router.get('/', async (req, res) => {
  try{
    const reviews = await Review.find()

    res.json({
      success: true,
      data: reviews
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})

router.get('/:id', async (req, res) => {
  try{
    const review = await Review.findOne({_id: req.params.id}, {})

    if(!review){
      res.status(404).send(sendError('Not found'))
      return 0
    }

    res.json({
      success: true,
      data: review
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})

router.post('/', async (req, res) => {
  const { error } = validateReview(req.body)

  if(error) {
    res.status(400).send(sendError(error.details[0].message))
    return 0
  }

  try{
    const item = await Item.findById(req.body.item)

    if(!item){
      res.status(404).send(sendError('Item not found'))
      return 0
    }

    const author = await User.findById(req.body.author)

    if(!author){
      res.status(404).send(sendError('Author not found...'))
      return 0
    }

    const reviews = await Review.insertMany([req.body])

    await Item.findByIdAndUpdate(req.body.item, {
      $push: { reviews: reviews[0]._id }
    })

    await User.findByIdAndUpdate(req.body.author, {
      $push: { reviews: reviews[0]._id }
    })

    res.json({
        success: true,
        data: reviews[0]
    })
  } catch(err) {
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi: ', err))
  }
})

router.delete('/:id', async (req, res) => {
  try{
    const review = await Review.findOne({_id: req.params.id}, {})

    if(!review){
      res.status(404).send(sendError('Not found'))
      return 0
    }

    await Item.findByIdAndUpdate(review.item, {
      $pull: { reviews: req.params.id }
    })

    await User.findByIdAndUpdate(review.author, {
      $pull: { reviews: req.params.id }
    })

    await Review.findByIdAndDelete(req.params.id)

    res.json({
      success: true,
      data: review
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})

module.exports = router