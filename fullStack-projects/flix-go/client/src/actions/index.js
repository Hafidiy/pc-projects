import { setError, clearError } from './errorActions'
import { loading, loadSuccess, loadFail } from './loadActions'

// main
import { changeMainParams, setMainParamsDefault } from './main/paramsActions'
import { setGridItems, loadGridItems, clearGridItems } from './main/gridItemsActions'
import { setListItems, loadListItems, clearListItems } from './main/listItemsActions'
import { setMainItems, loadMainItems, clearMainItems } from './main/mainItemsActions'
import { setMainMovies, loadMainMovies, clearMainMovies } from './main/mainMoviesActions'
import { setMainTvseries, loadMainTvseries, clearMainTvseries } from './main/mainTvseriesActions'
import { setMainItem, loadMainItem, clearMainItem } from './main/itemActions'
import { setExpectedItems, loadExpectedItems, clearExpectedItems } from './main/expectedItemsActions'
import { setSwipeItems, loadSwipeItems, clearSwipeItems } from './main/swipeItemsActions'

// admin
import { adminSetItemOne, adminChangeItemOne, adminClearItemOne, adminSendItemOne, adminLoadItemOne } from './admin/itemActions'
import { adminSetItems, adminChangeItem, adminChangeItemBy, adminDeleteItem } from './admin/itemsActions'
import { adminLoadItemStatus, adminSetItemStatus, adminSetItemStatusError, adminClearItemStatusError } from './admin/itemStatusActions'
import { adminLoadItemDelete, adminSetItemDelete, adminSetItemDeleteError, adminClearItemDeleteError } from './admin/itemDeleteActions'

export {
    setError,
    clearError,
    loading,
    loadSuccess,
    loadFail,

    // main
    changeMainParams,
    setMainParamsDefault,
    setMainItem,
    loadMainItem,
    clearMainItem,
    setMainItems,
    loadMainItems,
    clearMainItems,
    setGridItems,
    loadGridItems,
    clearGridItems,
    setListItems,
    loadListItems,
    clearListItems,
    setMainMovies,
    loadMainMovies,
    clearMainMovies,
    setSwipeItems,
    loadSwipeItems,
    clearSwipeItems,
    setExpectedItems,
    loadExpectedItems,
    clearExpectedItems,
    setMainTvseries,
    loadMainTvseries,
    clearMainTvseries,

    // admin
    adminSetItemOne,
    adminLoadItemOne,
    adminChangeItemOne,
    adminClearItemOne,
    adminSendItemOne,
    adminSetItems,
    adminChangeItem,
    adminChangeItemBy,
    adminDeleteItem,
    adminLoadItemStatus,
    adminSetItemStatus,
    adminSetItemStatusError,
    adminClearItemStatusError,
    adminLoadItemDelete,
    adminSetItemDelete,
    adminSetItemDeleteError,
    adminClearItemDeleteError,
}