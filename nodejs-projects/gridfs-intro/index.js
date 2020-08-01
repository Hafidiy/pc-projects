const path = require('path')
const multer = require('multer')
const crypto = require('crypto')
const express = require('express')
const mongoose = require('mongoose')
const Grid = require('gridfs-stream')
const methodOverride = require('method-override')
const GridFsStorage = require('multer-gridfs-storage')

const app = express()

// Middleware
app.use(express.json())
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')

// MongoURI
const mongoURI = 'mongodb://localhost/nodeGrid'

// Create mongo connection
const conn = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// Init gfs 
let gfs

conn.once('open', () => {
  // Init Stream
  gfs = Grid(conn.db, mongoose.mongo)
  gfs.collection('uploads')
})

// Create Store engine
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if(err) {
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

const upload = multer({ storage })

// @route GET /
// @desc  Loads form
app.get('/', (req, res) => {
  gfs.files.find().toArray((err, files) => {
    // Check if files
    if (!files || files.length === 0) {
      res.render('index', {files: false})
    } else {
      files.map(file => {
        if(file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
          file.isImage = true
        } else {
          file.isImage = false
        }
      })
      res.render('index', {files})
    }
  })
})

// @route POST /upload
// @desc  Uploads file to DB
app.post('/upload', upload.single('file'), (req, res) => {
  // res.json({file: req.file})
  res.redirect('/')
})

// @route  GET /files
// @desc   Display all files in JSON
app.get('/files', (req, res) => {
  gfs.files.find().toArray((err, files) => {
    // Check if files
    if(!files || files.length === 0){
      return res.status(404).json({ err: 'No files exist' })
    }

    // Files exist
    return res.json(files)
  })
})

// @route  GET /files/:filename
// @desc   Display single file object
app.get('/files/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if(!file || file.length === 0){
      return res.status(404).json({
        err: 'No file exists'
      })
    }

    // File exists
    return res.json(file)
  })
})

// @route  GET /image/:filename
// @desc   Display Image
app.get('/image/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if(!file || file.length === 0){
      return res.status(404).json({
        err: 'No file exists'
      })
    }

    // Check if image
    if(file.contentType === 'image/jpeg' || file.contentType === 'image/png'){
      // Read output to browser
      const readstream = gfs.createReadStream(file.filename)
      readstream.pipe(res)
    } else {
      res.status(404).json({
        err: 'Not an image'
      })
    }
  })
})

// @route DELETE /files/:id
// @desc  Delete file
app.delete('/files/:id', (req, res) => {
  gfs.remove({_id: req.params.id, root: 'uploads'}, (err, gridStore) => {
    if(err){
      return res.status(404).json({err})
    }

    res.redirect('/')
  })
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server started on ${PORT}`))