const path = require('path')
const multer = require('multer')

// Set Image Storage Engine
const storageImage = multer.diskStorage({
    destination: '../public/uploads/images',
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

// Set Video Storage Engine
const storageVideo = multer.diskStorage({
    destination: path.join(__dirname, '..', 'public', 'uploads', 'videos'),
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

// Init Upload Image
const uploadImage = multer({
    storage: storageImage,
    limit: {fileSize: 10000},
    fileFilter: function(req, file, cb){
        checkFileTypeImage(file, cb)
    }
}).single('image')

// Init Upload Video
const uploadVideo = multer({
    storage: storageVideo,
    limit: {fileSize: 3 * Math.pow(2, 30)},
    fileFilter: function(req, file, cb){
        checkFileTypeVideo(file, cb)
    }
}).single('video')

// Check File Type Image
function checkFileTypeImage(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLocaleLowerCase())
    // Check mine
    const mimetype = filetypes.test(file.mimetype)

    if(mimetype && extname){
        return cb(null, true)
    } else{
        cb('Error: Images Only!')
    }
}

// Check File Type Video
function checkFileTypeVideo(file, cb) {
    // Allowed ext
    const filetypes = /mp4|mov|avi|flv|hdv|webm|3gp/
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLocaleLowerCase())
    // Check mine
    const mimetype = filetypes.test(file.mimetype)

    if(mimetype && extname){
        return cb(null, true)
    } else{
        cb('Error: Videos Only!')
    }
}

module.exports = { uploadImage, uploadVideo }