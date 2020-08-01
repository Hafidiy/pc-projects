import React, { useState } from 'react'
import Modal from 'react-modal'

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
        backgroundColor: '#28282d',
        border: 'none',
        padding: '0px 0px',
        overflow: 'visible'
    },
    overlay: {
        zIndex: 1001,
        backgroundColor: 'rgba(43, 43, 49, 0.8)'
    }
}

export const Comments = () => {
    const [isOpenModal, setIsOpenModal] = useState({})
    const [isOpenHS, setIsOpenHS] = useState(false)

    return(
        <>
            <Header
                isOpen={isOpenHS}
                setIsOpen={() => setIsOpenHS(!isOpenHS)}
            />
            <SideBar isOpen={isOpenHS} comments={true} />
            {/* main content */}
            <main className="main">
                <div className="container-fluid">
                    <div className="row">
                        <TitleCurc
                            title={'Comments'}
                            countTotal={'21,356'}
                            placehold={'Key word...'}
                        />

                        {/* comments */}
                        <div className="col-12">
                            <div className="main__table-wrap">
                                <span>
                                    <table className="main__table">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>ITEM</th>
                                                <th>AUTHOR</th>
                                                <th>TEXT</th>
                                                <th>LIKE / DISLIKE</th>
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
                                                    <div className="main__table-text">I Dream in Another Language</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">John Doe</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">12 / 7</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">24 Oct 2019</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-btns">
                                                        <a
                                                            to="#"
                                                            onClick={() => setIsOpenModal({com: true})}
                                                            className="main__table-btn main__table-btn--view open-modal"
                                                        >
                                                            <i className="icon ion-ios-eye"></i>
                                                        </a>
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
                                                    <div className="main__table-text">Benched</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">John Doe</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">67 / 22</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">24 Oct 2019</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-btns">
                                                        <a
                                                            to="#"
                                                            onClick={() => setIsOpenModal({com: true})}
                                                            className="main__table-btn main__table-btn--view open-modal"
                                                        >
                                                            <i className="icon ion-ios-eye"></i>
                                                        </a>
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
                                                    <div className="main__table-text">Whitney</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">John Doe</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">44 / 5</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">24 Oct 2019</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-btns">
                                                        <a
                                                            to="#"
                                                            onClick={() => setIsOpenModal({com: true})}
                                                            className="main__table-btn main__table-btn--view open-modal"
                                                        >
                                                            <i className="icon ion-ios-eye"></i>
                                                        </a>
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
                                                    <div className="main__table-text">Blindspotting</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">John Doe</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">20 / 6</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">24 Oct 2019</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-btns">
                                                        <a
                                                            to="#"
                                                            onClick={() => setIsOpenModal({com: true})}
                                                            className="main__table-btn main__table-btn--view open-modal"
                                                        >
                                                            <i className="icon ion-ios-eye"></i>
                                                        </a>
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
                                                    <div className="main__table-text">I Dream in Another Language</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">John Doe</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">8 / 132</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">24 Oct 2019</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-btns">
                                                        <a
                                                            to="#"
                                                            onClick={() => setIsOpenModal({com: true})}
                                                            className="main__table-btn main__table-btn--view open-modal"
                                                        >
                                                            <i className="icon ion-ios-eye"></i>
                                                        </a>
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
                                                    <div className="main__table-text">Benched</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">John Doe</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">6 / 1</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">24 Oct 2019</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-btns">
                                                        <a
                                                            to="#"
                                                            onClick={() => setIsOpenModal({com: true})}
                                                            className="main__table-btn main__table-btn--view open-modal"
                                                        >
                                                            <i className="icon ion-ios-eye"></i>
                                                        </a>
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
                                                    <div className="main__table-text">Whitney</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">John Doe</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">10 / 0</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">24 Oct 2019</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-btns">
                                                        <a
                                                            to="#"
                                                            onClick={() => setIsOpenModal({com: true})}
                                                            className="main__table-btn main__table-btn--view open-modal"
                                                        >
                                                            <i className="icon ion-ios-eye"></i>
                                                        </a>
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
                                                    <div className="main__table-text">Blindspotting</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">John Doe</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">13 / 14</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">24 Oct 2019</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-btns">
                                                        <a
                                                            to="#"
                                                            onClick={() => setIsOpenModal({com: true})}
                                                            className="main__table-btn main__table-btn--view open-modal"
                                                        >
                                                            <i className="icon ion-ios-eye"></i>
                                                        </a>
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
                                                    <div className="main__table-text">I Dream in Another Language</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">John Doe</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">12 / 7</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">24 Oct 2019</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-btns">
                                                        <a
                                                            to="#"
                                                            onClick={() => setIsOpenModal({com: true})}
                                                            className="main__table-btn main__table-btn--view open-modal"
                                                        >
                                                            <i className="icon ion-ios-eye"></i>
                                                        </a>
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
                                                    <div className="main__table-text">Benched</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">John Doe</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">67 / 22</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-text">24 Oct 2019</div>
                                                </td>
                                                <td>
                                                    <div className="main__table-btns">
                                                        <a
                                                            to="#"
                                                            onClick={() => setIsOpenModal({com: true})}
                                                            className="main__table-btn main__table-btn--view open-modal"
                                                        >
                                                            <i className="icon ion-ios-eye"></i>
                                                        </a>
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
                        {/* end comments */}

                        {/* paginator */}
                        <div className="col-12">
                            <div className="admin__paginator-wrap">
                                <span>10 from 21 356</span>

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

            {/* modal view */}
            <Modal
                isOpen={isOpenModal.com}
                onRequestClose={() => setIsOpenModal({com: false})}
                contentLabel='Example label'
                style={customStyles}
            >
                <div
                    className="zoom-anim-dialog modal--view"
                >
                    <div className="admin__comments__autor">
                        <img className="admin__comments__avatar" src={userImg} alt="" />
                        <span className="admin__comments__name">John Doe</span>
                        <span className="admin__comments__time">30.08.2018, 17:53</span>
                    </div>
                    <p className="admin__comments__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    <div className="admin__comments__actions">
                        <div className="admin__comments__rate">
                            <span><i className="icon ion-md-thumbs-up"></i>12</span>

                            <span>7<i className="icon ion-md-thumbs-down"></i></span>
                        </div>
                    </div>
                </div>
            </Modal>
            {/* end modal view */}

            {/* modal delete */}
            <Modal
                isOpen={isOpenModal.del}
                onRequestClose={() => setIsOpenModal({del: false})}
                contentLabel='Example label'
                style={customStyles}
            >
                <div className="zoom-anim-dialog modal">
                    <h6 className="modal__title">Comment delete</h6>

                    <p className="modal__text">Are you sure to permanently delete this comment?</p>

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