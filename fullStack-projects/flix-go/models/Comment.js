const { Schema, model } = require('mongoose')

const Joi = require('joi')

const commentSchema = new Schema({
    item: {
        ref: 'Items',
        type: Schema.Types.ObjectId,
        required: true
    },
    author: {
        ref: 'Users',
        type: Schema.Types.ObjectId,
        required: true
    },
    text: {
        type: String,
        required: true,
        min: 2
    },
    likes: [{
        ref: 'Users',
        type: Schema.Types.ObjectId,
    }],
    disLikes: [{
        ref: 'Users',
        type: Schema.Types.ObjectId,
    }],
    toReply: {
        type: Schema.Types.ObjectId
    },
    repliedComments: [{
        ref: 'Comments',
        type: Schema.Types.ObjectId
    }],
    dateCreated: {
        type: Date,
        default: Date.now()
    }
})

const Comment = model('Comments', commentSchema)

const validateComment = comment => {
    const commentSchema = {
        item: Joi.required(),
        author: Joi.required(),
        text: Joi.string().required().min(2),
        toReply: Joi.string()
    }

    return  Joi.validate(comment, commentSchema)
}

module.exports = { Comment, validateComment }