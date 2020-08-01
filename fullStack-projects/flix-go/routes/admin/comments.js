const router = require('express').Router()

const { User } = require('../../models/User')
const { Item } = require('../../models/Item')
const { Comment, validateComment } = require('../../models/Comment')

const { sendError } = require('../../utils')

router.get('/', async (req, res) => {
  try{
    const comments = await Comment.find()

    res.json({
      success: true,
      data: comments
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})

router.get('/:id', async (req, res) => {
  try{
    const comment = await Comment.findOne({_id: req.params.id}, {})

    if(!comment){
      res.status(404).send(sendError('Not found'))
      return 0
    }

    res.json({
      success: true,
      data: comment
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})

router.post('/', async (req, res) => {
  const { error } = validateComment(req.body)

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

    const comments = await Comment.insertMany([req.body])

    await Item.findByIdAndUpdate(req.body.item, {
      $push: { comments: comments[0]._id }
    })

    await User.findByIdAndUpdate(req.body.author, {
      $push: { comments: comments[0]._id }
    })

    if (req.body.toReply) {
      await Comment.findByIdAndUpdate(req.body.toReply, {
        $push: { repliedComments: comments[0]._id }
      }) 
    }

    res.json({
        success: true,
        data: comments[0]
    })
  } catch(err) {
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi: ', err))
  }
})

router.delete('/:id', async (req, res) => {
  try{
    const comment = await Comment.findOne({_id: req.params.id}, {})

    if(!comment){
      res.status(404).send(sendError('Not found'))
      return 0
    }

    await Item.findByIdAndUpdate(comment.item, {
      $pull: { comments: req.params.id }
    })

    await User.findByIdAndUpdate(comment.author, {
      $pull: { comments: req.params.id }
    })

    await Comment.findByIdAndDelete(req.params.id)

    res.json({
      success: true,
      data: comment
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})

module.exports = router