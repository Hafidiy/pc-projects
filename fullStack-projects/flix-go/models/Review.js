const { Schema, model } = require('mongoose')

const Joi = require('joi')

const reviewSchema = new Schema({
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
    title: {
        type: String,
        required: true,
        min: 3
    },
    text: {
        type: String,
        required: true,
        min: 2
    },
    rate: {
        type: Number,
        required: true,
        default: 2.0,
        min: 0,
        max: 10
    },
    likes: [{
        ref: 'Users',
        type: Schema.Types.ObjectId,
    }],
    disLikes: [{
        ref: 'Users',
        type: Schema.Types.ObjectId,
    }],
    dateCreated: {
        type: Date,
        default: Date.now()
    }
})

const Review = model('Reviews', reviewSchema)

const validateReview = review => {
    const reviewSchema = {
        item: Joi.required(),
        author: Joi.required(),
        rate: Joi.number().min(0).max(10),
        title: Joi.string().required().min(3),
        text: Joi.string().required().min(2),
    }

    return  Joi.validate(review, reviewSchema)
}

module.exports = { Review, validateReview }