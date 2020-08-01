const { countFiles } = require('../models/FileCount')

const addFile = async fileName => {
    const file = await countFiles.findOne({ fileName: fileName })

    if(file) {
        await countFiles.findOneAndUpdate({ fileName: fileName }, {
            $set: { fileCount: file.fileCount + 1 }
        })
        return false
    } else {
        await countFiles.insertMany([{ fileName, fileCount: 1 }])
        return true
    }
}

const removeFile = async fileName => {
    let file = await countFiles.findOne({ fileName: fileName })

    if(file){
        if(file.fileCount === 1) {
            await countFiles.findOneAndDelete({ fileName: fileName })
            return true
        } else {
            await countFiles.findOneAndUpdate({ fileName: fileName }, {
                $set: { fileCount: file.fileCount - 1 }
            })
            return false
        }
    }

    return false
}

module.exports = { addFile, removeFile }