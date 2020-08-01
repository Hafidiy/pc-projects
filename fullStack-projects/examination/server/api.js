const route = require('express').Router()
const { Test } = require('./schema')

route.get('/', async (req, res) => {
  res.json(await Test.find())
})

route.post('/', async (req, res) => {
  res.json(await Test.insertMany(req.body))
})

route.get('/electronics', async (req, res) => {
  let tmp = await Test.find({subjectType: 'electronics'})

  if (req.query.limit) {
    let tests = []
    let numbers = [] 

    while (numbers.length < req.query.limit) {
      let tmpNum = parseInt(Math.random() * 1000) % tmp.length
      numbers.every(num => num !== tmpNum)
        ? numbers.push(tmpNum) : null
    }

    numbers.map(num => {
      tests.push(tmp[num])
    })

    res.json(tests)
    return 0
  }

  tmp.unshift(tmp.length)
  res.json(tmp)
})

route.get('/cybersecurity', async (req, res) => {
  let tmp = await Test.find({subjectType: 'cybersecurity'})

  if (req.query.limit) {
    let tests = []
    let numbers = [] 

    while (numbers.length < req.query.limit) {
      let tmpNum = parseInt(Math.random() * 1000) % tmp.length
      numbers.every(num => num !== tmpNum)
        ? numbers.push(tmpNum) : null
    }

    numbers.map(num => {
      tests.push(tmp[num])
    })

    res.json(tests)
    return 0
  }

  tmp.unshift(tmp.length)
  res.json(tmp)
})

route.get('/datastructures', async (req, res) => {
  let tmp = await Test.find({subjectType: 'datastructures'})

  if (req.query.limit) {
    let tests = []
    let numbers = [] 

    while (numbers.length < req.query.limit) {
      let tmpNum = parseInt(Math.random() * 1000) % tmp.length
      numbers.every(num => num !== tmpNum)
        ? numbers.push(tmpNum) : null
    }

    numbers.map(num => {
      tests.push(tmp[num])
    })

    res.json(tests)
    return 0
  }

  tmp.unshift(tmp.length)
  res.json(tmp)
})

route.get('/database', async (req, res) => {
  let tmp = await Test.find({subjectType: 'database'})

  if (req.query.limit) {
    let tests = []
    let numbers = [] 

    while (numbers.length < req.query.limit) {
      let tmpNum = parseInt(Math.random() * 1000) % tmp.length
      numbers.every(num => num !== tmpNum)
        ? numbers.push(tmpNum) : null
    }

    numbers.map(num => {
      tests.push(tmp[num])
    })

    res.json(tests)
    return 0
  }

  tmp.unshift(tmp.length)
  res.json(tmp)
})

route.get('/english', async (req, res) => {
  let tmp = await Test.find({subjectType: 'english'})

  if (req.query.limit) {
    let tests = []
    let numbers = [] 

    while (numbers.length < req.query.limit) {
      let tmpNum = parseInt(Math.random() * 1000) % tmp.length
      numbers.every(num => num !== tmpNum)
        ? numbers.push(tmpNum) : null
    }

    numbers.map(num => {
      tests.push(tmp[num])
    })

    res.json(tests)
    return 0
  }

  tmp.unshift(tmp.length)
  res.json(tmp)
})

module.exports = route