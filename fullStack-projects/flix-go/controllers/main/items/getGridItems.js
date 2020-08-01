const { Item } = require('../../../models/Item')

const { genres, qualities } = require('../../../constants')
const { sendError } = require('../../../utils')

const getGridItems = async (req, res, next) => {
    req.query.limit = req.query.limit ? parseInt(req.query.limit) : 0
    req.query.page = req.query.page && parseInt(req.query.page) ? parseInt(req.query.page) : 1
    req.query.rates = req.query.rates && JSON.parse(req.query.rates)
    req.query.releaseYear = req.query.releaseYear && JSON.parse(req.query.releaseYear)

    try{
        const itemsCount = await Item
            .find(
                {
                    isBanned: false,
                    category: req.query.category ? req.query.category : { $in: ['tvseries', 'movie'] },
                    rates: req.query.rates ? { $gte: req.query.rates[0], $lte: req.query.rates[1] } : { $gte: 0 },
                    releaseYear: req.query.releaseYear ? { $gte: req.query.releaseYear[0], $lte: req.query.releaseYear[1] } : { $gte: 2000 },
                    quality: req.query.quality || { $in: qualities },
                    genres: req.query.genre ? { $elemMatch: { $in: req.query.genre } } : { $elemMatch: { $in: genres } }
                }
            )
            .countDocuments()

        console.log(itemsCount)
        console.log(req.query.limit)

        const pagesCount = req.query.limit === 0 ? 1 : parseInt(itemsCount / req.query.limit) !== itemsCount / req.query.limit
            ? parseInt(itemsCount / req.query.limit) + 1 : itemsCount / req.query.limit

        const items = await Item
            .find(
                {
                    isBanned: false,
                    category: req.query.category ? req.query.category : { $in: ['tvseries', 'movie'] },
                    rates: req.query.rates ? { $gte: req.query.rates[0], $lte: req.query.rates[1] } : { $gte: 0 },
                    releaseYear: req.query.releaseYear ? { $gte: req.query.releaseYear[0], $lte: req.query.releaseYear[1] } : { $gte: 2000 },
                    quality: req.query.quality || { $in: qualities },
                    genres: req.query.genre ? { $elemMatch: { $in: req.query.genre } } : { $elemMatch: { $in: genres } }
                },
                { genres: 1, rates: 1, title: 1, cover: 1, category: 1 }
            )
            .limit(req.query.limit)
            .skip((req.query.page - 1) * req.query.limit)

        res.json({
            success: true,
            dataInfo: {
                pagesCount,
                currentPage: req.query.page,
                dataLength: items.length,
            },
            data: items
        })
    } catch(err) {
        console.log('Error: ', err)
        res.status(500).send(sendError('Server xatosi'))
    }
}

module.exports = getGridItems