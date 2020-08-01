const { uploadImage, uploadVideo } = require('./multer')
const { transporter, mailOptions } = require('./nodemailer')
const { addFile, removeFile } = require('./fileCount')
const { isArrSame, filterNotSame, checkTvSeriesSame } = require('./arrUtils')
const { sendError } = require('./sendError')

module.exports = { 
    addFile,
    isArrSame,
    filterNotSame,
    checkTvSeriesSame,
    sendError,
    removeFile,
    uploadImage,
    uploadVideo,
    transporter,
    mailOptions,
}