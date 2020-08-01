const Transaction = require('../models/Transaction')

// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
exports.getTransactions = async (req, res, next) => {
  try{
    const transactions = await Transaction.find()

    res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    })

    return 0
  } catch(err) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    })

    return 0
  }
}

// @desc    Add transaction
// @route   POST /api/v1/transactions
// @access  Public
exports.addTransaction = async (req, res, next) => {
  try{
    const { text, amount } = req.body

    const transaction = await Transaction.insertMany({ text, amount })

    res.status(201).json({
      success: true,
      data: transaction[0]
    })

    return 0
  } catch(err){
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message)

      res.status(400).json({
        success: false,
        error: messages
      })

      return 0
    } else {
      res.status(500).json({
        success: false,
        error: 'Server Error'
      })
  
      return 0
    }
  }
}

// @desc    Delete transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteTransaction = async (req, res, next) => {
  try{
    let transaction = await Transaction.findById(req.params.id)

    if(!transaction){
      res.status(404).json({
        success: false,
        error: 'Transaction not found'
      })

      return 0
    }

    await Transaction.findByIdAndDelete(req.params.id)

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
}