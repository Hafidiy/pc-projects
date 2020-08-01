const router = require('express').Router()

const {
    getAllItems,
    getItem,
    addItem,
    editItem,
    changeBan,
    deleteItem
} = require('../../controllers/admin/items')

router
    .route('/')
    .get(getAllItems)
    .post(addItem)

router
    .route('/:id')
    .get(getItem)
    .post(editItem)
    .delete(deleteItem)

router
    .route('/ban/:id')
    .get(changeBan)

module.exports = router