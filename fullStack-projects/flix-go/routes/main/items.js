const router = require('express').Router()

const {
    getItem,
    getAllItems,
    getSwipeItems,
    getListItems,
    getGridItems,
    getMainItems,
    getMainMovies,
    getMainTvseries,
    generateItems,
    getExpectedItems,
    getAllActiveItems
} = require('../../controllers/main/items')

router
    .route('/')
    .get(getAllItems)

router
    .route('/active-items')
    .get(getAllActiveItems)

router
    .route('/swipe-items')
    .get(getSwipeItems)

router
    .route('/main-items')
    .get(getMainItems)

router
    .route('/main-movies')
    .get(getMainMovies)

router
    .route('/main-tvseries')
    .get(getMainTvseries)

router
    .route('/expected-items')
    .get(getExpectedItems)

router
    .route('/grid-items')
    .get(getGridItems)

router
    .route('/list-items')
    .get(getListItems)

router
    .route('/generate-items')
    .get(generateItems)

router
    .route('/:id')
    .get(getItem)

module.exports = router