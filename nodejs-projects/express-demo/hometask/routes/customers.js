const router = require('express').Router()

const { Customer, validateCustomer } = require('../models/Customer')

const { sendError } = require('../utils')

router.get('/', async (req, res) => {
  try{
    const customers = await Customer.find()
  
    res.json({
      success: true,
      data: customers
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})
  
router.get('/:id', async (req, res) => {
  try{
    const customer = await Customer.findById(req.params.id)
  
    if(!customer){
      res.status(404).send(sendError('Bunaqa mijoz yo\'q'))
      return 0
    }
  
    res.send({
      success: true,
      data: customer
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})
  
router.post('/', async (req, res) => {
  // validatsiya qilamz
  const { error } = validateCustomer(req.body)
  
  if(error){
    // agar o'tmasa 400 qaytaramiz
    res.status(400).send(sendError(error.details[0].message))
    return 0
  }
  
  try{
    // agar o'tsa qo'shib qo'yamiz
    const customers = await Customer.insertMany([req.body])
  
    // uwa objectti qaytarvoramz
    res.status(201).send({
      success: true,
      data: customers[0]
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})
  
router.put('/:id', async (req, res) => {
  // bazadan qidiramz
  try {
    let customer = await Customer.findById(req.params.id)
  
    if(!customer){
      // agar topilmasa 404 qaytaramz
      res.status(404).send(sendError('Bunaqa mijoz yo\'q'))
      return 0
    }
    
    // agar topilsa validatsiya qilamz
    const { error } = validateCustomer(req.body)
    if(error) {
      // agar o'tmasa 400 qaytaramz
      res.status(400).send(sendError(error.details[0].message))
      return 0
    }
    
    // agar o'tsa o'zgartirib qaytaramiz
    await Customer.findByIdAndUpdate(req.params.id, req.body)
    customer = await Customer.findById(req.params.id)
    res.send({
      success: true,
      data: customer
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})
  
router.delete('/:id', async (req, res) => {
  try{
    // bazadan qidiramz
    let customer = await Customer.findById(req.params.id)
  
    if(!customer){
      // agar topilmasa 404 qaytaramz
      res.status(404).send(sendError('Bunaqa mijoz yo\'q'))
      return 0
    }
  
    customer = await Customer.findByIdAndDelete(req.params.id)
  
    res.send({
      success: true,
      data: customer
    })
  } catch(err){
    console.log('Error: ', err)
    res.status(500).send(sendError('Server xatosi'))
  }
})

module.exports = router