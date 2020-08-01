import React, { useState } from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'

import userImg from '../../assets/img/user.svg'

import { Header } from '../../components/admin-header'
import { SideBar } from '../../components/admin-sidebar'
import { TitleCurc } from '../../components/admin-title-curc'

const customStyles = {
    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: 'none',
        padding: '0px 0px'
    },
    overlay: {
        zIndex: 1001,
        backgroundColor: 'rgba(43, 43, 49, 0.8)'
    }
}

export const Users = () => {
    const [isOpenModal, setIsOpenModal] = useState({})
    const [isOpenHS, setIsOpenHS] = useState(false)

    return(
        <>
            <Header
                isOpen={isOpenHS}
                setIsOpen={() => setIsOpenHS(!isOpenHS)}
            />
            <SideBar isOpen={isOpenHS} users={true} />
            {/* main content */}
            <main className="main">
                <div className="container-fluid">
                    <div className="row">
                        <TitleCurc
                            title={'Users'}
                            countTotal={'3,702'}
                            placehold={'Find user...'}
                        />

                        {/* users */}
                        <div className="col-12">
                            <div className="main__table-wrap">
                                <span>
                                    <table className="main__table">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>BASIC INFO</th>
                                                <th>USERNAME</th>
                                                <th>PRICING PLAN</th>
                                                <th>COMMENTS</th>
                                                <th>REVIEWS</th>
                                                <th>STATUS</th>
                                                <th>CRAETED DATE</th>
                                                <th>ACTIONS</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="main__table-text">23</div>
                                                </td>
                                                <td>
                                                    <div className="main__user">
                                                        <div className="main__avatar">
                                                            <img src={userImg} alt="" />
                                                        </div>
                                                        <div className="main__meta">
                                                            <h3>John Doe</h3>
                                                            <span>email@email.com</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Username</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Premium</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">13</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">1</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text main__table-text--green">Approved</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">24 Oct 2019</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-btns">
                                                        <a
                                                            href="#"
                                                            onClick={() => setIsOpenModal({st: true})}
                                                            className="main__table-btn main__table-btn--banned open-modal"
                                                        >
                                                            <i className="icon ion-ios-lock"></i>
                                                        </a>
                                                        <Link
                                                            to="/edit-user"
                                                            className="main__table-btn main__table-btn--edit"
                                                        >
                                                            <i className="icon ion-ios-create"></i>
                                                        </Link>
                                                        <a
                                                            href="#"
                                                            onClick={() => setIsOpenModal({del: true})}
                                                            className="main__table-btn main__table-btn--delete open-modal"
                                                        >
                                                            <i className="icon ion-ios-trash"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="main__table-text">24</div>
                                                </td>
                                                <td>
                                                    <div className="main__user">
                                                        <div className="main__avatar">
                                                            <img src={userImg} alt="" />
                                                        </div>
                                                        <div className="main__meta">
                                                            <h3>John Doe</h3>
                                                            <span>email@email.com</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Username</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Free</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">1</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">15</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text main__table-text--green">Approved</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">24 Oct 2019</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-btns">
                                                        <a
                                                            href="#"
                                                            onClick={() => setIsOpenModal({st: true})}
                                                            className="main__table-btn main__table-btn--banned open-modal"
                                                        >
                                                            <i className="icon ion-ios-lock"></i>
                                                        </a>
                                                        <Link
                                                            to="/edit-user"
                                                            className="main__table-btn main__table-btn--edit"
                                                        >
                                                            <i className="icon ion-ios-create"></i>
                                                        </Link>
                                                        <a
                                                            href="#"
                                                            onClick={() => setIsOpenModal({del: true})}
                                                            className="main__table-btn main__table-btn--delete open-modal"
                                                        >
                                                            <i className="icon ion-ios-trash"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="main__table-text">25</div>
                                                </td>
                                                <td>
                                                    <div className="main__user">
                                                        <div className="main__avatar">
                                                            <img src={userImg} alt="" />
                                                        </div>
                                                        <div className="main__meta">
                                                            <h3>John Doe</h3>
                                                            <span>email@email.com</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Username</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Premium</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">6</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">6</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text main__table-text--green">Approved</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">24 Oct 2019</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-btns">
                                                        <a
                                                            href="#"
                                                            onClick={() => setIsOpenModal({st: true})}
                                                            className="main__table-btn main__table-btn--banned open-modal"
                                                        >
                                                            <i className="icon ion-ios-lock"></i>
                                                        </a>
                                                        <Link
                                                            to="/edit-user"
                                                            className="main__table-btn main__table-btn--edit"
                                                        >
                                                            <i className="icon ion-ios-create"></i>
                                                        </Link>
                                                        <a
                                                            href="#"
                                                            onClick={() => setIsOpenModal({del: true})}
                                                            className="main__table-btn main__table-btn--delete open-modal"
                                                        >
                                                            <i className="icon ion-ios-trash"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="main__table-text">26</div>
                                                </td>
                                                <td>
                                                    <div className="main__user">
                                                        <div className="main__avatar">
                                                            <img src={userImg} alt="" />
                                                        </div>
                                                        <div className="main__meta">
                                                            <h3>John Doe</h3>
                                                            <span>email@email.com</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Username</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Free</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">11</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">15</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text main__table-text--red">Banned</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">24 Oct 2019</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-btns">
                                                        <a
                                                            href="#"
                                                            onClick={() => setIsOpenModal({st: true})}
                                                            className="main__table-btn main__table-btn--banned open-modal"
                                                        >
                                                            <i className="icon ion-ios-lock"></i>
                                                        </a>
                                                        <Link
                                                            to="/edit-user"
                                                            className="main__table-btn main__table-btn--edit"
                                                        >
                                                            <i className="icon ion-ios-create"></i>
                                                        </Link>
                                                        <a
                                                            href="#"
                                                            onClick={() => setIsOpenModal({del: true})}
                                                            className="main__table-btn main__table-btn--delete open-modal"
                                                        >
                                                            <i className="icon ion-ios-trash"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="main__table-text">27</div>
                                                </td>
                                                <td>
                                                    <div className="main__user">
                                                        <div className="main__avatar">
                                                            <img src={userImg} alt="" />
                                                        </div>
                                                        <div className="main__meta">
                                                            <h3>John Doe</h3>
                                                            <span>email@email.com</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Username</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Basic</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">0</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">0</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text main__table-text--green">Approved</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">24 Oct 2019</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-btns">
                                                        <a
                                                            href="#"
                                                            onClick={() => setIsOpenModal({st: true})}
                                                            className="main__table-btn main__table-btn--banned open-modal"
                                                        >
                                                            <i className="icon ion-ios-lock"></i>
                                                        </a>
                                                        <Link
                                                            to="/edit-user"
                                                            className="main__table-btn main__table-btn--edit"
                                                        >
                                                            <i className="icon ion-ios-create"></i>
                                                        </Link>
                                                        <a
                                                            href="#"
                                                            onClick={() => setIsOpenModal({del: true})}
                                                            className="main__table-btn main__table-btn--delete open-modal"
                                                        >
                                                            <i className="icon ion-ios-trash"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="main__table-text">28</div>
                                                </td>
                                                <td>
                                                    <div className="main__user">
                                                        <div className="main__avatar">
                                                            <img src={userImg} alt="" />
                                                        </div>
                                                        <div className="main__meta">
                                                            <h3>John Doe</h3>
                                                            <span>email@email.com</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Username</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Free</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">2</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">1</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text main__table-text--green">Approved</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">24 Oct 2019</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-btns">
                                                        <a
                                                            href="#"
                                                            onClick={() => setIsOpenModal({st: true})}
                                                            className="main__table-btn main__table-btn--banned open-modal"
                                                        >
                                                            <i className="icon ion-ios-lock"></i>
                                                        </a>
                                                        <Link
                                                            to="/edit-user"
                                                            className="main__table-btn main__table-btn--edit"
                                                        >
                                                            <i className="icon ion-ios-create"></i>
                                                        </Link>
                                                        <a
                                                            href="#"
                                                            onClick={() => setIsOpenModal({del: true})}
                                                            className="main__table-btn main__table-btn--delete open-modal"
                                                        >
                                                            <i className="icon ion-ios-trash"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="main__table-text">29</div>
                                                </td>
                                                <td>
                                                    <div className="main__user">
                                                        <div className="main__avatar">
                                                            <img src={userImg} alt="" />
                                                        </div>
                                                        <div className="main__meta">
                                                            <h3>John Doe</h3>
                                                            <span>email@email.com</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Username</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Cinematic</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">65</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">0</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text main__table-text--green">Approved</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">24 Oct 2019</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-btns">
                                                        <a
                                                            href="#"
                                                            onClick={() => setIsOpenModal({st: true})}
                                                            className="main__table-btn main__table-btn--banned open-modal"
                                                        >
                                                            <i className="icon ion-ios-lock"></i>
                                                        </a>
                                                        <Link
                                                            to="/edit-user"
                                                            className="main__table-btn main__table-btn--edit"
                                                        >
                                                            <i className="icon ion-ios-create"></i>
                                                        </Link>
                                                        <a
                                                            href="#"
                                                            onClick={() => setIsOpenModal({del: true})}
                                                            className="main__table-btn main__table-btn--delete open-modal"
                                                        >
                                                            <i className="icon ion-ios-trash"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="main__table-text">30</div>
                                                </td>
                                                <td>
                                                    <div className="main__user">
                                                        <div className="main__avatar">
                                                            <img src={userImg} alt="" />
                                                        </div>
                                                        <div className="main__meta">
                                                            <h3>John Doe</h3>
                                                            <span>email@email.com</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Username</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Premium</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">0</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">0</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text main__table-text--red">Banned</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">24 Oct 2019</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-btns">
                                                        <a
                                                            href="#"
                                                            onClick={() => setIsOpenModal({st: true})}
                                                            className="main__table-btn main__table-btn--banned open-modal"
                                                        >
                                                            <i className="icon ion-ios-lock"></i>
                                                        </a>
                                                        <Link
                                                            to="/edit-user"
                                                            className="main__table-btn main__table-btn--edit"
                                                        >
                                                            <i className="icon ion-ios-create"></i>
                                                        </Link>
                                                        <a
                                                            href="#"
                                                            onClick={() => setIsOpenModal({del: true})}
                                                            className="main__table-btn main__table-btn--delete open-modal"
                                                        >
                                                            <i className="icon ion-ios-trash"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="main__table-text">31</div>
                                                </td>
                                                <td>
                                                    <div className="main__user">
                                                        <div className="main__avatar">
                                                            <img src={userImg} alt="" />
                                                        </div>
                                                        <div className="main__meta">
                                                            <h3>John Doe</h3>
                                                            <span>email@email.com</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Username</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Premium</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">13</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">1</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text main__table-text--green">Approved</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">24 Oct 2019</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-btns">
                                                        <a
                                                            href="#"
                                                            onClick={() => setIsOpenModal({st: true})}
                                                            className="main__table-btn main__table-btn--banned open-modal"
                                                        >
                                                            <i className="icon ion-ios-lock"></i>
                                                        </a>
                                                        <Link
                                                            to="/edit-user"
                                                            className="main__table-btn main__table-btn--edit"
                                                        >
                                                            <i className="icon ion-ios-create"></i>
                                                        </Link>
                                                        <a
                                                            href="#"
                                                            onClick={() => setIsOpenModal({del: true})}
                                                            className="main__table-btn main__table-btn--delete open-modal"
                                                        >
                                                            <i className="icon ion-ios-trash"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="main__table-text">32</div>
                                                </td>
                                                <td>
                                                    <div className="main__user">
                                                        <div className="main__avatar">
                                                            <img src={userImg} alt="" />
                                                        </div>
                                                        <div className="main__meta">
                                                            <h3>John Doe</h3>
                                                            <span>email@email.com</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Username</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Free</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">1</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">15</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text main__table-text--red">Banned</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">24 Oct 2019</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-btns">
                                                        <a
                                                            href="#"
                                                            onClick={() => setIsOpenModal({st: true})}
                                                            className="main__table-btn main__table-btn--banned open-modal"
                                                        >
                                                            <i className="icon ion-ios-lock"></i>
                                                        </a>
                                                        <Link
                                                            to="/edit-user"
                                                            className="main__table-btn main__table-btn--edit"
                                                        >
                                                            <i className="icon ion-ios-create"></i>
                                                        </Link>
                                                        <a
                                                            href="#"
                                                            onClick={() => setIsOpenModal({del: true})}
                                                            className="main__table-btn main__table-btn--delete open-modal"
                                                        >
                                                            <i className="icon ion-ios-trash"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </span>
                            </div>
                        </div>
                        {/* end users */}

                        {/* paginator */}
                        <div className="col-12">
                            <div className="admin__paginator-wrap">
                                <span>10 from 3 702</span>

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
                onRequestClose={() => setIsOpenModal({st: false})}
                contentLabel='Example label'
                style={customStyles}
            >
                <div className="zoom-anim-dialog modal">
                    <h6 className="modal__title">Status change</h6>

                    <p className="modal__text">Are you sure about immediately change status?</p>

                    <div className="modal__btns">
                        <button
                            type="button"
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
                </div>
            </Modal>
            {/* end modal status */}

            {/* modal delete */}
            <Modal
                isOpen={isOpenModal.del}
                onRequestClose={() => setIsOpenModal({del: false})}
                contentLabel='Example label'
                style={customStyles}
            >
                <div className="zoom-anim-dialog modal">
                    <h6 className="modal__title">User delete</h6>

                    <p className="modal__text">Are you sure to permanently delete this user?</p>

                    <div className="modal__btns">
                        <button
                            type="button"
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
                </div>
            </Modal>
            {/* end modal delete */}
        </>
    )
}