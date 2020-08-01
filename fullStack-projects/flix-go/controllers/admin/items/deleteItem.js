const fs = require('fs')
const path = require('path')

const { Item } = require('../../../models/Item')
const { User } = require('../../../models/User')
const { Comment } = require('../../../models/Comment')
const { Review } = require('../../../models/Review')

const { sendError, removeFile } = require('../../../utils')

const deleteItem = async (req, res, next) => {
    try{
        const opts = {
            path: 'comments reviews',
            select: 'author text'
        }

        const item = await Item.findById(req.params.id).populate(opts)

        if(!item){
            res.status(404).send(sendError('Not found'))
            return 0
        }

        const coverResult = await removeFile(item.cover.replace('/uploads/images/', ''))

        if(!coverResult){
            await coverNotWorks(req, res, item, callbackFunc)
            return 0
        }

        await coverWorks(req, res, item, callbackFunc)
    } catch(err){
        console.log('Error: ', err)
        res.status(500).send(sendError('Server xatosi'))
    }
}

async function coverWorks (req, res, item, cb) {
    fs.unlink(
        path.join(__dirname, '..', '..', 'public', item.cover),
        async (errCover) => {
            if (errCover) {
                console.log('Error: ', errCover)
                res.status(500).send(sendError('Server xatosi'))
                return 0
            }

            if(item.category === 'movie'){
                const movieResult = await removeFile(item.movie.src.replace('/uploads/videos/', ''))

                if(!movieResult){
                    await movieNotWorks(req, res, item, cb)
                    return 0
                }

                await movieWorks(req, res, item, cb)
            } else {
                await TvSeriesFunc(req, res, item, cb)
            }
        }
    )
}

async function coverNotWorks (req, res, item, cb) {
    if(item.category === 'movie'){
        const movieResult = await removeFile(item.movie.src.replace('/uploads/videos/', ''))

        if(!movieResult){
            await movieNotWorks(req, res, item, cb)
            return 0
        }

        await movieWorks(req, res, item, cb)
    } else {
        await TvSeriesFunc(req, res, item, cb)
    }
}

async function movieWorks (req, res, item, cb) {
    fs.unlink(
        path.join(__dirname, '..', '..', 'public', item.movie.src),
        async (errMovie) => {
            if(errMovie) {
                console.log('Error: ', errMovie)
                res.status(500).send(sendError('Server xatosi'))
                return 0
            }

            await cb(req, res, item)
        }
    )
}

async function movieNotWorks (req, res, item, cb) {
    await cb(req, res, item)
}

async function TvSeriesFunc (req, res, item, cb) {
    item.movie.seasons.map((season, sIndex) => {
        season.episodes.map(async (episode, eIndex) => {
            const episodeResult = await removeFile(episode.src.replace('/uploads/videos/', ''))

            if(episodeResult){
                fs.unlink(
                    path.join(__dirname, '..', '..', 'public', 'uploads', 'videos', episode.src.replace('/uploads/videos/', '')),
                    async errEpisode => {
                        if(errEpisode) {
                            console.log('Error: ', errPhoto)
                            res.status(500).send(sendError('Server xatosi'))
                            return 0
                        }
                    }
                )
            }
        })
    })

    await cb(req, res, item)
}

async function callbackFunc (req, res, item) {
    item.uploadPhotos.map(async photo => {
        const photoResult = await removeFile(photo.replace('/uploads/images/', ''))

        if(photoResult){
            fs.unlink(
                path.join(__dirname, '..', '..', 'public', photo),
                async (errPhoto) => {
                    if(errPhoto) {
                        console.log('Error: ', errPhoto)
                        res.status(500).send(sendError('Server xatosi'))
                        return 0
                    }
                }
            )
        }
    })

    await Item.findByIdAndUpdate(item._id, {
        $set: { uploadPhotos: [] }
    })

    while (item.comments.length) {
        await User.findByIdAndUpdate(item.comments[0].author, {
            $pull: { comments: item.comments[0]._id }
        })
        await Comment.findByIdAndDelete(item.comments[0]._id)
        item.comments.splice(0, 1)
    }

    while (item.reviews.length) {
        await User.findByIdAndUpdate(item.reviews[0].author, {
            $pull: { reviews: item.reviews[0]._id }
        })
        await Review.findByIdAndDelete(item.reviews[0]._id)
        item.reviews.splice(0, 1)
    }

    await Item.findByIdAndDelete(req.params.id)

    res.json({
        success: true,
        data: item
    })
}

module.exports = deleteItem