const path = require('path')

const { Item,  validateAddItem } = require('../../../models/Item')

const { sendError, addFile } = require('../../../utils')

const addItem = async (req, res, next) => {
    req.body = JSON.parse(req.body.dd)
    // console.log('files: ', req.files)
    // console.log('body: ', req.body)
    const { error } = validateAddItem(req.body)

    if(error) {
        res.status(400).send(sendError(error.details[0].message))
        return 0
    }

    let {
        title, description, releaseYear, runningTime, quality,
        age, countries, genres, category
    } = req.body

    let item = {
        title, description, releaseYear, runningTime, quality,
        age, countries, genres, category, uploadPhotos: []
    }

    await uploadPhotos(req, res, item)
}

const coverWorks = async (req, res, cover, item, cb) => {
    cover.mv(
        path.join(__dirname, '..', '..', 'public', 'uploads', 'images', cover.name),
        async err => {
            if(err){
                console.log('Error: ', err)
                res.status(500).send(sendError('Server xatosi'))
                return 0
            }

            item.cover = `/uploads/images/${cover.name}`

            // console.log('Item: ', item)

            try{
                const items = await Item.insertMany([item])

                res.json({
                    success: true,
                    // data: items[0]
                    data: {...item}
                })
            } catch(err) {
                console.log('Error: ', err)
                res.status(500).send(sendError('Server xatosi'))
                return 0
            }
        }
    )
}

const coverNotWorks = async (req, res, cover, item) => {
    item.cover = `/uploads/images/${cover.name}`

    // console.log('Item: ', item.movie)

    try{
        const items = await Item.insertMany([item])

        res.json({
            success: true,
            // data: items[0]
            data: {...item}
        })
    } catch(err) {
        console.log('Error: ', err)
        res.status(500).send(sendError('Server xatosi'))
        return 0
    }
}

const movieWorks = async (req, res, movie, item) => {
    movie.mv(
        path.join(__dirname, '..', '..', 'public', 'uploads', 'videos', movie.name),
        async err => {
            if(err){
                console.log('Error: ', err)
                res.status(500).send(sendError('Server xatosi'))
                return 0
            }

            item.movie = { src: `/uploads/videos/${movie.name}` }

            const { cover } = req.files

            const coverResult = await addFile(cover.name)

            if(!coverResult){
                await coverNotWorks(req, res, cover, item)
                return 0
            }

            await coverWorks(req, res, cover, item)
        }
    )
}

const movieNotWorks = async (req, res, movie, item) => {
    item.movie = { src: `/uploads/videos/${movie.name}` }

    const { cover } = req.files

    const coverResult = await addFile(cover.name)

    if(!coverResult){
        await coverNotWorks(req, res, cover, item)
        return 0
    }

    await coverWorks(req, res, cover, item)
}

const TvSeriesFunc = async (req, res, item) => {
    // TvSeries...

    let tmpTvSeriesArr = [...req.body.movie]

    for (let i = 0; i < req.body.seasonsLength.length; i++) {
        for (let j = 0; j < req.body.seasonsLength[i]; j++) {
            try {
                let episode = req.files[`episode${i}${j}`]

                const episodeResult = await addFile(episode.name)

                if(episodeResult) {
                    episode = await new Promise((resolve, reject) => {
                        episode.mv(
                            path.join(__dirname, '..', '..', 'public', 'uploads', 'videos', episode.name),
                            err => {
                                if(err){
                                    reject(new Error(`Error: ${err}`))
                                }

                                resolve(episode)
                            }
                        )
                    })
                }

                tmpTvSeriesArr[i].episodes[j].src = `/uploads/videos/${episode.name}`
            } catch(err) {
                console.log(err)
                res.status(500).send(sendError('Server xatosi'))
                return 0
            }
        }
    }

    item.movie = { seasons: tmpTvSeriesArr }

    const { cover } = req.files

    const coverResult = await addFile(cover.name)

    if(!coverResult){
        await coverNotWorks(req, res, cover, item)
        return 0
    }

    await coverWorks(req, res, cover, item)
}

async function uploadPhotos (req, res, item) {
    let tmpPhotosArr = []

    for (let i = 0; i < req.body.photosLength; i++){
        try {
            let photo = req.files[`photo${i}`]
            const photoResult = await addFile(photo.name)

            if (photoResult) {
                photo = await new Promise((resolve, reject) => {
                    photo.mv(
                        path.join(__dirname, '..', '..', 'public', 'uploads', 'images', photo.name),
                        err => {
                            if(err){
                                reject(new Error(`Error: ${err}`))
                            }

                            resolve(photo)
                        }
                    )
                })
            }

            tmpPhotosArr = [...tmpPhotosArr, `/uploads/images/${photo.name}`]
        } catch(err) {
            console.log(err)
            res.status(500).send(sendError('Server xatosi'))
            return 0
        }
    }

    item.uploadPhotos = tmpPhotosArr

    if(item.category === 'movie'){
        const { movie } = req.files

        const movieResult = await addFile(movie.name)

        if(!movieResult){
            await movieNotWorks(req, res, movie, item)
            return 0
        }

        await movieWorks(req, res, movie, item)
    } else {
        await TvSeriesFunc(req, res, item)
    }
}

module.exports = addItem