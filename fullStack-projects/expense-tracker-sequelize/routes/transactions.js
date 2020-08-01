const router = require('express').Router()

const Joi = require('joi')
const uuid = require('uuid')

const Transaction = require('../models/Transaction')

const validateTransaction = transaction => {
  const transactionSchema = {
    text: Joi.string().required().min(3),
    amount: Joi.number().required()
  }
  return Joi.validate(transaction, transactionSchema)
}


// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
router.get('/', async (req, res) => {
  try{
    let transactions = await Transaction.findAll()

    res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    })

    return 0
  } catch(err){
    res.status(500).json({
      success: false,
      error: 'Server Error'
    })
  }
})

// @desc    Post a transaction
// @route   POST /api/v1/transactions
// @access  Public
router.post('/', async (req, res) => {
  const { text, amount } = req.body

  const { error } = validateTransaction(req.body)

  if(error) {
    res.status(400).send(error.details[0].message)
    return 0
  }

  try{
    await Transaction.sync()
    const transaction = await Transaction.create({ id: uuid.v4(), text, amount })

    res.status(201).json(transaction)
  } catch(err){
    res.status(500).json({
      success: false,
      error: 'Server Error'
    })
  }

  return 0
})

// @desc    Delete a transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
router.delete('/:id', async (req, res) => {
  try{
    let transaction = await Transaction.findByPk(req.params.id)

    if(!transaction){
      res.status(404).json({
        success: false,
        error: 'Transaction not found'
      })

      return 0
    }

    await Transaction.destroy({ where: { id: req.params.id } })

    res.status(200).json({
      success: true,
      data: {}
    })
  } catch(err){
    res.status(500).json({
      success: false,
      error: 'Server Error'
    })

    return 0
  }
})

module.exports = router