const fs = require('fs')
const path = require('path')

const route = require('express').Router()

const Person = require('../models/Person')

route.get('/:id/:which/download', async (req, res) => {
  let result = await Person.findOne({ _id: req.params.id })

  const pathUrl = path.join(__dirname, '..', 'public', result[req.params.which])

  res.download(pathUrl)
})

route.post('/', async (req, res) => {
  const { id, which } = req.body
  
  let tmpFile = req.body.file
  let data = tmpFile.slice(tmpFile.indexOf(',') + 1)
  let ext = tmpFile.slice(17, tmpFile.indexOf(';'))
  
  let fileId = Date.now()
  let fileName = `${fileId}.${ext}`
  let fileUrl = `uploads/${fileName}`
  let filePath = path.join(__dirname, '..', 'public', 'uploads', fileName)

  fs.writeFile(filePath, data, 'base64', async (err, written) => {
    if (err){
      console.log('Pidaraz narsa: ', err)
      res.status(502).json({msg: 'Try later!'})
      return 0
    }

    let updObj = {[which]: fileUrl}
    
    let result = await Person.findByIdAndUpdate(id, updObj)

    if (!result){
      res.status(502).json({msg: 'Try later!!?'})
      return 0
    }

    result = await Person.findOne({ _id: result._id })

    res.json(result)
  })
})

route.patch('/', async (req, res) => {
  const { id, which } = req.body

  let result = await Person.findOne({ _id: id })

  fs.unlink(
    path.join(__dirname, '..', 'public', result[which]),
    async (err) => {
      if (err) res.json(err)

      let tmpFile = req.body.file
      let data = tmpFile.slice(tmpFile.indexOf(',') + 1)
      let ext = tmpFile.slice(17, tmpFile.indexOf(';'))
      
      let fileId = Date.now()
      let fileName = `${fileId}.${ext}`
      let fileUrl = `uploads/${fileName}`
      let filePath = path.join(__dirname, '..', 'public', 'uploads', fileName)

      fs.writeFile(filePath, data, 'base64', async (err, written) => {
        if (err) res.status(502).json({msg: 'Try later!'})

        let updObj = {[which]: fileUrl}
        
        result = await Person.findByIdAndUpdate(id, updObj)

        if (!result) res.status(502).json({msg: 'Try later!'})

        result = await Person.findOne({ _id: result._id })

        res.json(result)
      })
    }
  )
})

route.delete('/', async (req, res) => {
  const { id, which } = req.body

  let result = await Person.findByIdAndUpdate(id, {[which]: null})

  fs.unlink(
    path.join(__dirname, '..', 'public', result[which]),
    async (err) => {
      if (err) res.json(err)

      result = await Person.findOne({ _id: result._id })
      res.json(result)
    }
  )

})

module.exports = route