const { model, Schema } = require('mongoose')

const movieSchema = new Schema({
    src: {
        type: String,
        required: true
    }
})

const tvSeriesSchema = new Schema({
    seasons: [{
        seasonTitle: {
            type: String,
            required: true
        },
        seasonInfo: {
            type: String,
            required: true
        },
        episodes: [{
            episodeTitle: {
                type: String,
                required: true
            },
            airDate: {
                type: String,
                required: true
            },
            src: {
                type: String,
                required: true
            }
        }]
    }]
})

const Movie = model('Movies', movieSchema)
const TvSeries = model('Tvseries', tvSeriesSchema)

module.exports = { Movie, TvSeries }