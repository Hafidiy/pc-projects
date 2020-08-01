import { takeEvery, select, call, put, take } from 'redux-saga/effects'

import { fetchFunc, specialFetchFunc } from '../api'
import {
    LOAD,
    ERROR,
    //main
    MAIN_ITEM,
    MAIN_ITEMS,
    GRID_ITEMS,
    LIST_ITEMS,
    MAIN_MOVIES,
    MAIN_TVSERIES,
    SWIPE_ITEMS,
    EXPECTED_ITEMS,
    //admin
    ADMIN_ITEM,
    ADMIN_ITEMS,
    ADMIN_ITEM_STATUS,
    ADMIN_ITEM_DELETE
} from '../constants'

import {
    loading,
    loadSuccess,
    loadFail,
    setError,
    clearError,
    //main,
    setMainItem,
    setMainItems,
    setGridItems,
    setListItems,
    setMainMovies,
    setMainTvseries,
    setSwipeItems,
    setExpectedItems,
    // admin
    adminSetItemOne,
    adminClearItemOne,
    adminChangeItemOne,
    adminSetItems,
    adminChangeItem,
    adminDeleteItem,
    adminSetItemStatus,
    adminSetItemStatusError,
    adminSetItemDelete,
    adminSetItemDeleteError
} from '../actions'

function* handleLoad({payload}){
    if(payload.type === 'items'){
        try {
            yield put(clearError())
            const items = yield call(fetchFunc, 'admin/items?limit=10')
            yield put(loadSuccess())
            yield put(adminSetItems(items))
        } catch(err){
            yield put(loadFail())
            yield put(setError(err.toString()))
        }
    }
}

function* handleItemLoad({payload}){
    try{
        yield put(clearError())
        yield put(loading('item'))
        const item = yield call(fetchFunc, `admin/items/${payload.id}`)
        yield put(adminSetItemOne(item))
        yield call(payload.cb)
        yield put(loadSuccess())
    } catch(err) {
        yield put(loadFail())
        yield put(setError(err.toString()))
    }
}

function* handleItemSendLoad({payload}){
    if(payload.type === 'add') {
        try{
            yield put(clearError())
            yield put(loading('item'))
            yield call(specialFetchFunc, 'admin/items', payload.item, payload.cb1)
            yield put(adminClearItemOne())
            yield put(loadSuccess())
        } catch(err){
            yield put(loadFail())
            yield put(setError(err.toString()))
        }
    }

    if(payload.type === 'edit') {
        try{
            yield put(clearError())
            yield put(loading('item'))
            const item = yield call(specialFetchFunc, `admin/items/${payload.item.id}`, payload.item, payload.cb1)
            yield put(adminClearItemOne())
            yield put(adminSetItemOne({
                id: item._id,
                cover: item.cover,
                uploadPhotos: item.uploadPhotos,
                movie: item.category === 'movie'
                    ? item.movie.src
                    : item.movie.seasons,
            }))
            yield put(loadSuccess())
        } catch(err){
            yield put(loadFail())
            yield put(setError(err.toString()))
        }
    }
}

function* handleStatusLoad({payload}){
    try{
        yield put(clearError())
        const item = yield call(fetchFunc, `admin/items/ban/${payload.id}`)
        yield put(adminChangeItem(item, payload.index))
        yield put(adminSetItemStatus())
        yield call(payload.cb)
    } catch(err){
        yield put(adminSetItemStatusError())
        yield put(setError(err.toString()))
    }
}

function* handleDeleteLoad({payload}){
    try{
        yield put(clearError())
        const item = yield call(fetchFunc, `admin/items/${payload.id}`, 'DELETE')
        yield put(adminDeleteItem(payload.index))
        yield put(adminSetItemDelete())
        yield call(payload.cb)
    } catch(err){
        yield put(adminSetItemDeleteError())
        yield put(setError(err.toString()))
    }
}

function* handleExpectedLoad({payload}){
    if(payload.length === 0){
        try{
            yield put(clearError())
            const items = yield call(fetchFunc, 'items/expected-items?limit=6')
            yield put(setExpectedItems(items))
        } catch(err){
            yield put(setError(err.toString()))
        }
    } else {
        try{
            yield put(clearError())
            const items = yield call(fetchFunc, `items/expected-items?limit=${payload.length}&page=${2}`)
            yield put(setExpectedItems(items))
        } catch(err){
            yield put(setError(err.toString()))
        }
    }
}

function* handleMainItemLoad({payload}){
    try{
        yield put(clearError())
        const item = yield call(fetchFunc, `items/${payload.id}`)
        yield put(setMainItem(item))
    } catch(err){
        yield put(setError(err.toString()))
    }
}

function* handleSwipeLoad(){
    try{
        yield put(clearError())
        const items = yield call(fetchFunc, 'items/swipe-items?limit=4&page=2')
        yield put(setSwipeItems(items))
    } catch(err){
        yield put(setError(err.toString()))
    }
}

function* handleMainItemsLoad(){
    try{
        yield put(clearError())
        const items = yield call(fetchFunc, 'items/main-items?limit=6')
        yield put(setMainItems(items))
    } catch(err){
        yield put(setError(err.toString()))
    }
}

function* handleMainMoviesLoad(){
    try{
        yield put(clearError())
        const items = yield call(fetchFunc, 'items/main-movies?limit=12&page=2')
        yield put(setMainMovies(items))
    } catch(err){
        yield put(setError(err.toString()))
    }
}

function* handleMainTvseriesLoad(){
    try{
        yield put(clearError())
        const items = yield call(fetchFunc, 'items/main-tvseries?limit=12&page=3')
        yield put(setMainTvseries(items))
    } catch(err){
        yield put(setError(err.toString()))
    }
}

function* handleGridItemsLoad(){
    try{
        yield put(clearError())
        const items = yield call(fetchFunc, `items/grid-items?limit=12`)
        yield put(setGridItems(items))
    } catch(err){
        yield put(setError(err.toString()))
    }
}

function* handleListItemsLoad(){

}

export default function* watchSagas(){
    yield takeEvery(LOAD.LOADING, handleLoad)
    yield takeEvery(ADMIN_ITEM.LOAD_ITEM, handleItemLoad)
    yield takeEvery(ADMIN_ITEM.SEND_ITEM, handleItemSendLoad)
    yield takeEvery(ADMIN_ITEM_STATUS.LOAD, handleStatusLoad)
    yield takeEvery(ADMIN_ITEM_DELETE.LOAD, handleDeleteLoad)
    yield takeEvery(SWIPE_ITEMS.LOAD_ITEMS, handleSwipeLoad)
    yield takeEvery(EXPECTED_ITEMS.LOAD_ITEMS, handleExpectedLoad)
    yield takeEvery(MAIN_ITEM.LOAD_ITEM, handleMainItemLoad)
    yield takeEvery(MAIN_ITEMS.LOAD_ITEMS, handleMainItemsLoad)
    yield takeEvery(MAIN_MOVIES.LOAD_ITEMS, handleMainMoviesLoad)
    yield takeEvery(MAIN_TVSERIES.LOAD_ITEMS, handleMainTvseriesLoad)
    yield takeEvery(GRID_ITEMS.LOAD_ITEMS, handleGridItemsLoad)
    yield takeEvery(LIST_ITEMS.LOAD_ITEMS, handleListItemsLoad)
}