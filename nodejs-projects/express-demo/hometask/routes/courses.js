const router = require('express').Router()
const { Types } = require('mongoose')

const { Category } = require('../models/Category')
const { Course, validateCourse } = require('../models/Course')

const { sendError } = require('../utils')

router.get('/', async (req, res) => {
  try{
    const courses = await Course.find()
  
    res.json({
      success: true,
      data: courses
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})
  
router.get('/:id', async (req, res) => {
  try{
    const course = await Course.findById(req.params.id)
  
    if(!course){
      res.status(404).send(sendError('Bunaqa kurs yo\'q'))
      return 0
    }
  
    res.send({
      success: true,
      data: course
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})
  
router.post('/', async (req, res) => {
  // validatsiya qilamz
  const { error } = validateCourse(req.body)
  
  if(error){
    // agar o'tmasa 400 qaytaramiz
    res.status(400).send(sendError(error.details[0].message))
    return 0
  }
  
  try{
    if(!Types.ObjectId.isValid(req.body.category)){
      res.status(404).send(sendError('Bunaqa kategorya yo\'q'))
      return 0
    }

    req.body.category = await Category.findById(req.body.category)

    if (!req.body.category){
      res.status(404).send(sendError('Bunaqa kategorya yo\'q'))
      return 0
    }

    const courses = await Course.insertMany([req.body])

    // uwa objectti qaytarvoramz
    res.status(201).send({
      success: true,
      data: courses[0]
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})
  
router.put('/:id', async (req, res) => {
  // bazadan qidiramz
  try {
    let course = await Course.findById(req.params.id)
  
    if(!course){
      // agar topilmasa 404 qaytaramz
      res.status(404).send(sendError('Bunaqa kurs yo\'q'))
      return 0
    }
    
    // agar topilsa validatsiya qilamz
    const { error } = validateCourse(req.body)

    if(error) {
      // agar o'tmasa 400 qaytaramz
      res.status(400).send(sendError(error.details[0].message))
      return 0
    }
    
    // agar o'tsa o'zgartirib qaytaramiz
    req.body.category = await Category.findById(req.body.category)
    await Course.findByIdAndUpdate(req.params.id, req.body)
    course = await Course.findById(req.params.id)
    res.send({
      success: true,
      data: course
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})
  
router.delete('/:id', async (req, res) => {
  try{
    // bazadan qidiramz
    let course = await Course.findById(req.params.id)
  
    if(!course){
      // agar topilmasa 404 qaytaramz
      res.status(404).send(sendError('Bunaqa kurs yo\'q'))
      return 0
    }
  
    course = await Course.findByIdAndDelete(req.params.id)
  
    res.send({
      success: true,
      data: course
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})

module.exports = router