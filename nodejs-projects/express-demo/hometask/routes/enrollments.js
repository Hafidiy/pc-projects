const router = require('express').Router()
const { Types } = require('mongoose')

const { Course } = require('../models/Course')
const { Customer } = require('../models/Customer')
const { Enrollment, validateEnrollment } = require('../models/Enrollment')

const { sendError } = require('../utils')

router.get('/', async (req, res) => {
  try{
    const enrollments = await Enrollment.find()
      
    res.json({
      success: true,
      data: enrollments
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})

router.get('/:id', async (req, res) => {
  try{
    const enrollment = await Enrollment.findById(req.params.id)
      
    if(!enrollment){
      res.status(404).send(sendError('Bunaqa enrollment yo\'q'))
      return 0
    }
      
    res.send({
      success: true,
      data: enrollment
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})

router.post('/', async (req, res) => {
  // validatsiya qilamz
  const { error } = validateEnrollment(req.body)
  
  if(error){
    // agar o'tmasa 400 qaytaramiz
    res.status(400).send(sendError(error.details[0].message))
    return 0
  }
  
  try{
    if (!Types.ObjectId.isValid(req.body.customerId)){
      res.status(404).send(sendError('Bunaqa mijoz yo\'q'))
      return 0
    }

    req.body.customer = await Customer.findById(req.body.customerId)

    if (!req.body.customer){
      res.status(404).send(sendError('Bunaqa mijoz yo\'q'))
      return 0
    }

    if (!Types.ObjectId.isValid(req.body.courseId)){
      res.status(404).send(sendError('Bunaqa kurs yo\'q'))
      return 0
    }

    req.body.course = await Course.findById(req.body.courseId)

    if (!req.body.course){
      res.status(404).send(sendError('Bunaqa kurs yo\'q'))
      return 0
    }

    req.body.courseFee = req.body.customer.isVip
      ? req.body.course.fee - (0.2 * req.body.course.fee)
      : req.body.course.fee

    const enrollments = await Enrollment.insertMany([req.body])

    if(enrollments[0]){
      await Customer.findByIdAndUpdate(
        req.body.customerId,
        { bonusPoints: req.body.customer.bonusPoints + 1 }
      )
    }

    // uwa objectti qaytarvoramz
    res.status(201).send({
      success: true,
      data: enrollments[0]
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})

router.delete('/:id', async (req, res) => {
  try{
    // bazadan qidiramz
    let enrollment = await Enrollment.findById(req.params.id)
      
    if(!enrollment){
      // agar topilmasa 404 qaytaramz
      res.status(404).send(sendError('Bunaqa enrollment yo\'q'))
      return 0
    }
      
    enrollment = await Enrollment.findByIdAndDelete(req.params.id)
      
    res.send({
      success: true,
      data: enrollment
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})

module.exports = router