const fs = require('fs')
const path = require('path')

const { Item, validateEditItem } = require('../../../models/Item')

const {
    sendError,
    isArrSame,
    checkTvSeriesSame,
    removeFile,
    addFile
} = require('../../../utils')

const editFirstFunc = (req) => {
    req.body = JSON.parse(req.body.dd)
    delete req.body.id
    req.body.uploadPhotos = req.body.uploadPhotos.map((item, index) => {
        if(typeof item === 'object'){
            item = req.files[`photo${index}`]
        }
        return item
    })
    if(typeof req.body.cover === 'object') {
        req.body.cover = req.files.cover
    }
    if(req.body.category === 'movie') {
        if(typeof req.body.movie === 'object') {
            req.body.movie = req.files.movie
        }
    } else {
        for (let i = 0; i < req.body.movie.length; i++) {
            for (let j = 0; j < req.body.movie[i].episodes.length; j++) {
                if(typeof req.body.movie[i].episodes[j].src === 'object') {
                    req.body.movie[i].episodes[j].src = req.files[`episode${i}${j}`]
                }
            }
        }
    }

    return req
}

const editItem = async (req, res, next) => {
    req = editFirstFunc(req)

    try{
        const item = await Item.findById(req.params.id)

        if(!item){
            res.status(404).send(sendError('Not found'))
            return 0
        }

        const { error } = validateEditItem(req.body)

        if(error) {
            res.status(400).send(sendError(error.details[0].message))
            return 0
        }

        await uploadPhotos(req, res, item)
    } catch(err) {
        console.log(err)
        res.status(500).send(sendError('Server xatosi'))
    }
}

const coverAddWorks = (req, res, item, cover) => {
    cover.mv(
        path.join(__dirname, '..', '..', 'public', 'uploads', 'images', cover.name),
        async err => {
            if (err) {
                throw new Error(`Error: ${err}`)
            }

            item.cover = `/uploads/images/${cover.name}`
            await afterCover(req, res, item)
        }
    )
}

const coverRemoveWorks = (req, res, item) => {
    fs.unlink(
        path.join(__dirname, '..', '..', 'public', 'uploads', 'images', item.cover.replace('/uploads/images/', '')),
        err => {
            if(err){
                throw new Error(`Error: ${err}`)
            }

            delete item.cover
        }
    )
}

const coversNotSame = async (req, res, item) => {
    const coverRemoveResult = await removeFile(item.cover.replace('/uploads/images/', ''))

    if(!coverRemoveResult){
        delete item.cover
    } else {
        coverRemoveWorks(req, res, item)
    }

    const { cover } = req.body

    const coverAddResult = await addFile(cover.name)

    if(!coverAddResult) {
        item.cover = `/uploads/images/${cover.name}`
        await afterCover(req, res, item)
    } else {
        coverAddWorks(req, res, item, cover)
    }
}

const movieAddWorks = (req, res, item, movie) => {
    movie.mv(
        path.join(__dirname, '..', '..', 'public', 'uploads', 'videos', movie.name),
        async err => {
            if (err) {
                throw new Error(`Error: ${err}`)
            }

            item.movie = { src: `/uploads/videos/${movie.name}` }
            await afterMovie(req, res, item)
        }
    )
}

const movieRemoveWorks = (req, res, item) => {
    fs.unlink(
        path.join(__dirname, '..', '..', 'public', 'uploads', 'videos', item.movie.src.replace('/uploads/videos/', '')),
        err => {
            if(err){
                throw new Error(`Error: ${err}`)
            }

            delete item.movie
        }
    )
}

const moviesNotSame = async (req, res, item) => {
    const movieRemoveResult = await removeFile(item.movie.src.replace('/uploads/videos/', ''))

    if(!movieRemoveResult){
        delete item.movie
    } else {
        movieRemoveWorks(req, res, item)
    }

    const { movie } = req.body

    const movieAddResult = await addFile(movie.name)

    if(!movieAddResult){
        item.movie = { src: `/uploads/videos/${movie.name}` }
        await afterMovie(req, res, item)
    } else {
        movieAddWorks(req, res, item, movie)
    }
}

const tvEpisodeRemove = (req, item) => {
    let saveArr = []
    let delArr = []

    item.movie.seasons.map(season => {
        season.episodes.map(episode => {
            episode.src
            let tmpBool
            req.body.movie.map(reqSeason => {
                reqSeason.episodes.map(reqEpisode => {
                    if(typeof reqEpisode.src === 'object'){
                        if(episode.src === `/uploads/videos/${reqEpisode.src.name}`){
                            tmpBool = true
                        }
                    } else {
                        if(episode.src === reqEpisode.src){
                            tmpBool = true
                        }
                    }
                })
            })
            if(!tmpBool){
                delArr.push(episode.src.replace('/uploads/videos/', ''))
            } else {
                saveArr.push(episode.src)
            }
        })
    })

    delArr.map(async episode => {
        const episodeResult = await removeFile(episode)

        if(episodeResult){
            fs.unlink(
                path.join(__dirname, '..', '..', 'public', 'uploads', 'videos', episode),
                err => {
                    if(err) {
                        throw new Error(`Error: ${err}`)
                    }
                }
            )
        }
    })

    return saveArr
}

const tvEpisodeAdd = async (req, saveArr) => {
    let tmpArr = [...req.body.movie]

    for (let i = 0; i < tmpArr.length; i++) {
        for (let j = 0; j < tmpArr[i].episodes.length; j++) {
            if(typeof tmpArr[i].episodes[j].src === 'object') {
                if(saveArr.findIndex(item => item === `/uploads/videos/${tmpArr[i].episodes[j].src.name}`) === -1){
                    const episodeResult = await addFile(tmpArr[i].episodes[j].src.name)

                    if(episodeResult) {
                        await new Promise((resolve, reject) => {
                            tmpArr[i].episodes[j].src.mv(
                                path.join(__dirname, '..', '..', 'public', 'uploads', 'videos', tmpArr[i].episodes[j].src.name),
                                err => {
                                    if (err) {
                                        reject(new Error(`Error: ${err}`))
                                    }

                                    resolve({})
                                }
                            )
                        })
                    }
                }

                tmpArr[i].episodes[j].src = `/uploads/videos/${tmpArr[i].episodes[j].src.name}`
            }
        }
    }

    return tmpArr
}

const tvSeriesNotSame = async (req, res, item) => {
    item.movie.seasons = await tvEpisodeAdd(req, tvEpisodeRemove(req, item))

    await afterTvSeries(req, res, item)
    return 0
}

const uploadPhotosRemove = async (item, arr) => {
    arr.map(async photo => {
        const photoResult = await removeFile(photo.replace('/uploads/images/', ''))

        if(photoResult){
            fs.unlink(
                path.join(__dirname, '..', '..', 'public', 'uploads', 'images', photo.replace('/uploads/images/', '')),
                err => {
                    if(err){
                        throw new Error(`Error: ${err}`)
                    }

                    item.uploadPhotos = item.uploadPhotos.filter(element => element !== photo)
                }
            )
        }
    })

    return item
}

const uploadPhotosAdd = async (item, arr) => {
    for (let i = 0; i < arr.length; i++){
        let photo = arr[i]
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

        item.uploadPhotos = [...item.uploadPhotos, `/uploads/images/${photo.name}`]
    }

    return item
}

const uploadPhotosNotSame = async (req, res, item, difArr) => {
    item = await uploadPhotosRemove(item, difArr.lastArr)
    item = await uploadPhotosAdd(item, difArr.firstArr)
    await afterUploadPhotos(req, res, item)
}

const afterCover = async (req, res, item) => {
    await Item.findByIdAndUpdate(item._id, item)

    res.json({
        success: true,
        data: item
    })
}

const afterMovie = async (req, res, item) => {
    if (item.cover === req.body.cover) {
        await afterCover(req, res, item)

        return 0
    }

    await coversNotSame(req, res, item)
}

const afterTvSeries = async (req, res, item) => {
    if (item.cover === req.body.cover) {
        await afterCover(req, res, item)

        return 0
    }

    await coversNotSame(req, res, item)
}

const afterUploadPhotos = async (req, res, item) => {
    if (item.category === 'movie') {
        if (item.movie.src === req.body.movie) {
            await afterMovie(req, res, item)
            return 0
        }

        await moviesNotSame(req, res, item)
        return 0
    }

    // TvSeriesFunc...
    if(!checkTvSeriesSame(req.body.movie, item.movie.seasons)){
        console.log('Tvseries o\'zgarmagan')

        await afterTvSeries(req, res, item)
        return 0
    }

    await tvSeriesNotSame(req, res, item)
}

async function uploadPhotos (req, res, item) {
    const difArr = isArrSame(req.body.uploadPhotos, item.uploadPhotos)

    if(!difArr){
        await afterUploadPhotos(req, res, item)
        return 0
    }

    await uploadPhotosNotSame(req, res, item, difArr)
}

const changeBan = async (req, res, next) => {
    try{
        let item = await Item.findById(req.params.id)

        if(!item){
            res.status(404).send(sendError('Not found'))
            return 0
        }

        await Item.findByIdAndUpdate(req.params.id, {
            $set: { isBanned: !item.isBanned }
        })

        item = await Item.findById(req.params.id)

        res.json({
            success: true,
            data: item
        })
    } catch(err){
        console.log('Error: ', err)
        res.status(500).send(sendError('Server xatosi'))
    }
}

module.exports = { changeBan, editItem }