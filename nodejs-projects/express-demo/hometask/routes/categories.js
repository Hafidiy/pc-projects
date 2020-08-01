const router = require('express').Router()

const { Category, validateCategory } = require('../models/Category')

const { sendError } = require('../utils')

router.get('/', async (req, res) => {
  try{
    const categories = await Category.find()
  
    res.json({
      success: true,
      data: categories
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})
  
router.get('/:id', async (req, res) => {
  try{
    const category = await Category.findById(req.params.id)
  
    if(!category){
      res.status(404).send(sendError('Bunaqa kategoriya yo\'q'))
      return 0
    }
  
    res.send({
      success: true,
      data: category
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})
  
router.post('/', async (req, res) => {
  // validatsiya qilamz
  const { error } = validateCategory(req.body)
  
  if(error){
    // agar o'tmasa 400 qaytaramiz
    res.status(400).send(sendError(error.details[0].message))
    return 0
  }
  
  try{
    // agar o'tsa qo'shib qo'yamiz
    const categories = await Category.insertMany([req.body])
  
    // uwa objectti qaytarvoramz
    res.status(201).send({
      success: true,
      data: categories[0]
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})
  
router.put('/:id', async (req, res) => {
  // bazadan qidiramz
  try {
    let category = await Category.findById(req.params.id)
  
    if(!category){
      // agar topilmasa 404 qaytaramz
      res.status(404).send(sendError('Bunaqa kategoriya yo\'q'))
      return 0
    }
    
    // agar topilsa validatsiya qilamz
    const { error } = validateCategory(req.body)
    if(error) {
      // agar o'tmasa 400 qaytaramz
      res.status(400).send(sendError(error.details[0].message))
      return 0
    }
    
    // agar o'tsa o'zgartirib qaytaramiz
    await Category.findByIdAndUpdate(req.params.id, req.body)
    category = await Category.findById(req.params.id)
    
    res.send({
      success: true,
      data: category
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})
  
router.delete('/:id', async (req, res) => {
  try{
    // bazadan qidiramz
    let category = await Category.findById(req.params.id)
  
    if(!category){
      // agar topilmasa 404 qaytaramz
      res.status(404).send(sendError('Bunaqa kategoriya yo\'q'))
      return 0
    }
  
    category = await Category.findByIdAndDelete(req.params.id)
  
    res.send({
      success: true,
      data: category
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})

module.exports = router