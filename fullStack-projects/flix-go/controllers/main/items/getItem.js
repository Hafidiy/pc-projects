const { Item } = require('../../../models/Item')

const { sendError } = require('../../../utils')

const getItem = async (req, res, next) => {
    try{
        const item = await Item.findById(req.params.id)

        if(!item){
            res.status(404).send(sendError('Not found'))
            return 0
        }

        res.json({
            success: true,
            data: item
        })
    } catch(err) {
        console.log('Error: ', err)
        res.status(500).send(sendError('Server xatosi'))
    }
}

module.exports = getItem