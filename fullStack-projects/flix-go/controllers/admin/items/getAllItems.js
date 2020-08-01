const { Item } = require('../../../models/Item')

const { sendError } = require('../../../utils')
const { parseInt } = require('lodash')

const getAllItems = async (req, res, next) => {
    req.query.limit = parseInt(req.query.limit)
    req.query.page = parseInt(req.query.page)
    try{
        const items = await Item
            .find()
            .limit(req.query.limit)
            .skip((req.query.page - 1) * req.query.limit)

        res.json({
            success: true,
            dataLength: items.length,
            data: items
        })
    } catch(err) {
        console.log('Error: ', err)
        res.status(500).send(sendError('Server xatosi'))
    }
}

module.exports = getAllItems