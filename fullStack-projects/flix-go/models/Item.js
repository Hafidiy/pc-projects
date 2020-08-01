const { model, Schema } = require('mongoose')

const Joi = require('joi')

const itemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    releaseYear: {
        type: String,
        required: true
    },
    runningTime: {
        type: String,
        required: true
    },
    quality: {
        type: String,
        enum: ['FullHD', 'HD', 'mp4', '3gp'],
        required: true
    },
    age: {
        type: String,
        required: true
    },
    countries: {
        type: [String],
        required: true
    },
    genres: {
        type: [String],
        required: true
    },
    cover: {
        type: String,
        required: true
    },
    uploadPhotos: {
        type: [String],
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    rates: {
        type: Number,
        default: 0
    },
    isBanned: {
        type: Boolean,
        default: false
    },
    createdDate: {
        type: Date,
        default: Date.now()
    },
    category: {
        type: String,
        enum: ['movie', 'tvseries'],
        required: true
    },
    movie: Object,
    comments: [{
        ref: 'Comments',
        type: Schema.Types.ObjectId
    }],
    reviews: [{
        ref: 'Reviews',
        type: Schema.Types.ObjectId
    }]
})

const Item = model('Items', itemSchema)

const validateAddItem = item => {
    const itemSchema = {
        cover: Joi.object().required(),
        title: Joi.string().required(),
        description: Joi.string().required(),
        releaseYear: Joi.string().required(),
        runningTime: Joi.string().required(),
        quality: Joi.string().required(),
        age: Joi.string().required(),
        category: Joi.string().required(),
        countries: Joi.array().items(Joi.string()).required(),
        genres: Joi.array().items(Joi.string()).required(),
        movie: Joi.allow(),
        uploadPhotos: Joi.array().items(Joi.object()).required(),
        photosLength: Joi.number().required(),
        seasonsLength: Joi.array().items(Joi.number()).allow(),
        comments: Joi.allow(),
        reviews: Joi.allow()
    }

    return Joi.validate(item, itemSchema)
}

const validateEditItem = item => {
    const itemSchema = {
        cover: Joi.required(),
        title: Joi.string().required(),
        description: Joi.string().required(),
        releaseYear: Joi.string().required(),
        runningTime: Joi.string().required(),
        quality: Joi.string().required(),
        age: Joi.string().required(),
        category: Joi.string().required(),
        countries: Joi.array().items(Joi.string()).required(),
        genres: Joi.array().items(Joi.string()).required(),
        movie: Joi.allow(),
        uploadPhotos: Joi.array().required(),
        photosLength: Joi.number().required(),
        seasonsLength: Joi.array().items(Joi.number()).allow(),
        comments: Joi.allow(),
        reviews: Joi.allow()
    }

    return Joi.validate(item, itemSchema)
}

module.exports = { Item, validateAddItem, validateEditItem }