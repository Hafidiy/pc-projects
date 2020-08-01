const { model, Schema } = require('mongoose')

const countFilesSchema = new Schema({
    fileName: String,
    fileCount: Number
})

const countFiles = model('countFiles', countFilesSchema)

module.exports = { countFiles }