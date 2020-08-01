import { combineReducers } from 'redux'

import loadReducer from './loadReducer'
import errorReducer from './errorReducer'
// main
import mainParamsReducer from './main/paramsReducer'
import mainItemReducer from './main/itemReducer'
import gridItemsReducer from './main/gridItemsReducer'
import listItemsReducer from './main/listItemsReducer'
import mainItemsReducer from './main/mainItemsReducer'
import mainMoviesReducer from './main/mainMoviesReducer'
import mainTvseriesReducer from './main/mainTvseriesReducer'
import swipeItemsReducer from './main/swipeItemsReducer'
import expectedItemsReducer from './main/expectedItemsReducer'
// admin
import adminItemReducer from './admin/itemReducer'
import adminItemsReducer from './admin/itemsReducer'
import adminItemStatusReducer from './admin/itemStatusReducer'
import adminItemDeleteReducer from './admin/itemDeleteReducer'

const rootReducer = combineReducers({
    isLoading: loadReducer,
    error: errorReducer,
    // main
    mainParams: mainParamsReducer,
    mainItem: mainItemReducer,
    gridItems: gridItemsReducer,
    listItems: listItemsReducer,
    mainItems: mainItemsReducer,
    mainMovies: mainMoviesReducer,
    mainTvseries: mainTvseriesReducer,
    swipeItems: swipeItemsReducer,
    expectedItems: expectedItemsReducer,
    // admin
    adminItem: adminItemReducer,
    adminItems: adminItemsReducer,
    adminItemStatus: adminItemStatusReducer,
    adminItemDelete: adminItemDeleteReducer,
})

export default rootReducer