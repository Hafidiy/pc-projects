const express = require('express')
const crypto = require('crypto')
const path = require('path')
const mongoose = require('mongoose')
const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage')

const app = express()

app.use(express.json())
app.set('view engine', 'ejs')

const MongoURI = 'mongodb://localhost/gridfs-intro'

const conn = mongoose.createConnection(MongoURI. {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

let gfs
conn.once('open', () => {
  gfs = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'uploads'
  })
})

const storage = new GridFsStorage({
  url: MongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err)
        }
        const filename = buf.toString('hex') + path.extname(file.originalname)
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        }
        resolve(fileInfo)
      })
    })
  }
})

const upload = multer({
  storage
})

app.get('/', (req, res) => {
  if(!gfs){
    const error = 'Kutilmagan xato yuz berdi'
    console.log(error)
    res.send(error)
    process.exit(0)
  }
  gfs.find().toArray((err, files) => {
    if(!files || files.length === 0){
      return res.render('index', {
        files: false
      })
    } else {
      const f = files.map(file => {
        if(file.contentType === 'image/png' || file.contentType === 'image/jpeg'){
          file.isImage = true
        } else {
          file.isImage = false
        }
        return file
      }).sort((a, b) => {
        return (
          new Date(b['uploadDate']).getTime() - new Date(a['uploadDate']).getTime()
        )
      })

      return res.render('index', {
        files: f
      })
    }
  })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on ${PORT}`))