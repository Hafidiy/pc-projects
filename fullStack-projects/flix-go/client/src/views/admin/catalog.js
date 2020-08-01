import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import ReactLoading from 'react-loading'
import Modal from 'react-modal'

import { Header } from '../../components/admin-header'
import { SideBar } from '../../components/admin-sidebar'
import { TitleCurc } from '../../components/admin-title-curc'

import {
    loading,
    clearError,
    // admin
    adminLoadItemStatus,
    adminClearItemStatusError,
    adminLoadItemDelete,
    adminClearItemDeleteError
} from '../../actions'

import { tmpMonths } from '../../assets/constants/months'
import { catalogCustomStyles as customStyles } from '../../assets/constants/customStyles'

const Catalog = props => {
    const {
        isLoading,
        error,
        // admin
        items,
        loading,
        itemStatus,
        loadItemStatus,
        clearItemStatusError,
        itemDelete,
        loadItemDelete,
        clearItemDeleteError,
    } = props

    const [isOpenModal, setIsOpenModal] = useState({})
    const [isOpenHS, setIsOpenHS] = useState(false)

    useEffect(() => {
        loading('items')
    }, [])

    const handleItemBan = async index => loadItemStatus(items[index]._id, index, () => setIsOpenModal({st: false}))

    const handleBanClose = () => {
        setIsOpenModal({st: false})
        clearError()
        clearItemStatusError()
    }

    const handleItemDelete = async index => loadItemDelete(items[index]._id, index, () => setIsOpenModal({del: false}))

    const handleDelClose = () => {
        setIsOpenModal({del: false})
        clearError()
        clearItemDeleteError()
    }

    const fooSubArray = (arr, len) => {
        let tmpAr = [...arr]
        const arrLen = tmpAr.length
        const parsNumb = parseInt(arrLen / len)
        const countNumb = arrLen - (parsNumb * len)
        let tmp = []
        for (let i = 0; i < parsNumb; i++) {
            for (let j = (i * len) + 0; j < (i + 1) * len; j++) {
                tmp.push(tmpAr[j])
            }
            tmpAr.push(tmp)
            tmp = []
        }
        if (arrLen - (parsNumb * len) !== 0){
            for (let i = 0; i < len; i++){
                if(i < countNumb){
                    tmp.push(tmpAr[(parsNumb * len) + i])
                } else {
                    tmp.push(null)
                }
            }
            tmpAr.push(tmp)
        }
        tmpAr.splice(0, arrLen)
        return tmpAr
    }

    return(
        isLoading
        ?   <div className='loadingCont'>
                <ReactLoading
                    type='spin'
                    color='#ff577f'
                    width='10%'
                    height='10'
                />
            </div>
        :   <>
                <Header
                    isOpen={isOpenHS}
                    setIsOpen={() => setIsOpenHS(!isOpenHS)}
                />
                <SideBar isOpen={isOpenHS} catalog={true} />
                
                {/* main content */}
                <main className="main">
                    <div className="container-fluid">
                        <div className="row">
                            <TitleCurc
                                title={'Catalog'}
                                countTotal={'14,452'}
                                placehold={'Find movie / tv series...'}
                            />

                            {/* users */}
                            <div className="col-12">
                                <div className="main__table-wrap">
                                    <span>
                                        <table className="main__table">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>TITLE</th>
                                                    <th>RATING</th>
                                                    <th>CATEGORY</th>
                                                    <th>VIEWS</th>
                                                    <th>STATUS</th>
                                                    <th>CRAETED DATE</th>
                                                    <th>ACTIONS</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {items.length && items.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            <div className="main__table-text">{index + 1}</div>
                                                        </td>
                                                        <td>
                                                            <div className="main__table-text">{item.title}</div>
                                                        </td>
                                                        <td>
                                                            <div className="main__table-text main__table-text--rate">
                                                                <i className="icon ion-ios-star"></i> {item.rates}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="main__table-text">
                                                                {item.category[0].toUpperCase() + item.category.slice(1)}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="main__table-text">{item.views}</div>
                                                        </td>
                                                        <td>
                                                            <div className={`main__table-text main__table-text${!item.isBanned
                                                                ? '--green' : '--red'}`}>
                                                                {!item.isBanned ? 'Visible' : 'Hidden'}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="main__table-text">
                                                                {`${new Date(item.createdDate.slice(0, 10)).getDate()
                                                                    } ${tmpMonths[new Date(item.createdDate.slice(0, 10)).getMonth()]
                                                                    } ${new Date(item.createdDate.slice(0, 10)).getFullYear()
                                                                }`}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="main__table-btns">
                                                                <a
                                                                    href='#'
                                                                    onClick={() => setIsOpenModal({st: true, index})}
                                                                    className="main__table-btn main__table-btn--banned open-modal"
                                                                >
                                                                    <i className="icon ion-ios-lock"></i>
                                                                </a>
                                                                <a
                                                                    href='#'
                                                                    onClick={() => console.log(items)}
                                                                    className="main__table-btn main__table-btn--view"
                                                                >
                                                                    <i className="icon ion-ios-eye"></i>
                                                                </a>
                                                                <Link
                                                                    to={{
                                                                        pathname: '/edit-item',
                                                                        state: { id: item._id }
                                                                    }}
                                                                    className="main__table-btn main__table-btn--edit"
                                                                >
                                                                    <i className="icon ion-ios-create"></i>
                                                                </Link>
                                                                <a
                                                                    href='#'
                                                                    onClick={() => setIsOpenModal({del: true, index})}
                                                                    className="main__table-btn main__table-btn--delete open-modal"
                                                                >
                                                                    <i className="icon ion-ios-trash"></i>
                                                                </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </span>
                                </div>
                            </div>
                            {/* end users */}

                            {/* paginator */}
                            <div className="col-12">
                                <div className="admin__paginator-wrap">
                                    <span>10 from 14 452</span>

                                    <ul className="admin__paginator">
                                        <li className="admin__paginator__item admin__paginator__item--prev">
                                            <a href="#"><i className="icon ion-ios-arrow-back"></i></a>
                                        </li>
                                        <li className="admin__paginator__item"><a href="#">1</a></li>
                                        <li className="admin__paginator__item admin__paginator__item--active"><a href="#">2</a></li>
                                        <li className="admin__paginator__item"><a href="#">3</a></li>
                                        <li className="admin__paginator__item"><a href="#">4</a></li>
                                        <li className="admin__paginator__item admin__paginator__item--next">
                                            <a href="#"><i className="icon ion-ios-arrow-forward"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* end paginator */}
                        </div>
                    </div>
                </main>
                {/* end main content */}

                {/* modal status */}
                <Modal
                    isOpen={isOpenModal.st}
                    onRequestClose={handleBanClose}
                    contentLabel='Example label'
                    style={customStyles}
                    ariaHideApp={false}
                >
                    <div className="zoom-anim-dialog modal">
                        <h6 className="modal__title">Status change</h6>

                        {itemStatus.isLoading ? (
                            <p className='modal__text'>
                                Status changing ...
                            </p>
                        ) : itemStatus.error ? (
                            <>
                                <p className='modal__text'>
                                    {error} <br/>
                                    Try later! 
                                </p>

                                <div className="modal__btns">
                                    <button
                                        type="button"
                                        onClick={handleBanClose}
                                        className="modal__btn modal__btn--cancel"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <p className="modal__text">
                                    Are you sure about immediately change status?
                                </p>

                                <div className="modal__btns">
                                    <button
                                        type="button"
                                        onClick={() => handleItemBan(isOpenModal.index)}
                                        className="modal__btn modal__btn--apply"
                                    >
                                        Apply
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setIsOpenModal({st: false})}
                                        className="modal__btn modal__btn--dismiss"
                                    >
                                        Dismiss
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </Modal>
                {/* end modal status */}

                {/* modal delete */}
                <Modal
                    isOpen={isOpenModal.del}
                    onRequestClose={handleDelClose}
                    contentLabel='Example label'
                    style={customStyles}
                    ariaHideApp={false}
                >
                    <div className="zoom-anim-dialog modal">
                        <h6 className="modal__title">Item delete</h6>

                        {itemDelete.isLoading ? (
                            <p className='modal__text'>
                                Item deleting ...
                            </p>
                        ) : itemDelete.error ? (
                            <>
                                <p className='modal__text'>
                                    {error} <br/>
                                    Try later! 
                                </p>

                                <div className="modal__btns">
                                    <button
                                        type="button"
                                        onClick={handleDelClose}
                                        className="modal__btn modal__btn--cancel"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <p className="modal__text">Are you sure to permanently delete this item?</p>

                                <div className="modal__btns">
                                    <button
                                        type="button"
                                        onClick={() => handleItemDelete(isOpenModal.index)}
                                        className="modal__btn modal__btn--apply"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setIsOpenModal({del: false})}
                                        className="modal__btn modal__btn--dismiss"
                                    >
                                        Dismiss
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </Modal>
                {/* end modal delete */}
            </>
    )
}

const mapStateToProps = ({ isLoading, error, adminItems, adminItemStatus, adminItemDelete }) => ({
    isLoading,
    error,
    items: adminItems,
    itemStatus: adminItemStatus,
    itemDelete: adminItemDelete
})

const mapDispatchToProps = dispatch => ({
    loading: (type) => dispatch(loading(type)),
    clearError: () => dispatch(clearError()),
    loadItemStatus: (id, index, cb) => dispatch(adminLoadItemStatus(id, index, cb)),
    clearItemStatusError: () => dispatch(adminClearItemStatusError()),
    loadItemDelete: (id, index, cb) => dispatch(adminLoadItemDelete(id, index, cb)),
    clearItemDeleteError: () => dispatch(adminClearItemDeleteError())
})
     
export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null
)(Catalog)