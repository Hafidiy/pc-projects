import React, { useState } from 'react'
import Modal from 'react-modal'

import userImg from '../../assets/img/user.svg'

import { Header } from '../../components/admin-header'
import { SideBar } from '../../components/admin-sidebar'

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

export const EditUser = () => {
    const [isOpen, setIsOpen] = useState({a: true})
    const [isOpenHS, setIsOpenHS] = useState(false)
    const [isDrShow, setIsDrShow] = useState(false)
    const [isOpenModal, setIsOpenModal] = useState({})
    const [inputValue, setInputValue] = useState('profile')

    return(
        <>
            <Header
                isOpen={isOpenHS}
                setIsOpen={() => setIsOpenHS(!isOpenHS)}
            />
            <SideBar isOpen={isOpenHS} />
            {/* main content */}
            <main className="main">
                <div className="container-fluid">
                    <div className="row">
                        {/* main title */}
                        <div className="col-12">
                            <div className="main__title">
                                <h2>Edit user</h2>
                            </div>
                        </div>
                        {/* end main title */}

                        {/* profile */}
                        <div className="col-12">
                            <div className="admin__profile__content">
                                {/* profile user */}
                                <div className="admin__profile__user">
                                    <div className="admin__profile__avatar">
                                        <img src={userImg} alt="" />
                                    </div>
                                    {/* or profile__meta--red */}
                                    <div className="admin__profile__meta admin__profile__meta--green">
                                        <h3>Username <span>(Approved)</span></h3>
                                        <span>FlixGo ID: 23562</span>
                                    </div>
                                </div>
                                {/* end profile user */}

                                {/* profile tabs nav */}
                                <ul className="nav nav-tabs admin__profile__tabs">
                                    <li className="nav-item">
                                        <span
                                            onClick={() => setIsOpen({a: true})}
                                            className={`tmp-nav-link ${isOpen.a ? 'tmp-active' : ''}`}
                                        >
                                            Profile
                                        </span>
                                    </li>

                                    <li className="nav-item">
                                        <span
                                            onClick={() => setIsOpen({b: true})}
                                            className={`tmp-nav-link ${isOpen.b ? 'tmp-active' : ''}`}
                                        >
                                            Comments
                                        </span>
                                    </li>

                                    <li className="nav-item">
                                        <span
                                            onClick={() => setIsOpen({c: true})}
                                            className={`tmp-nav-link ${isOpen.c ? 'tmp-active' : ''}`}
                                        >
                                            Reviews
                                        </span>
                                    </li>
                                </ul>
                                {/* end profile tabs nav */}

                                {/* profile mobile tabs nav */}
                                <div
                                    className={`admin__profile__mobile-tabs ${isDrShow ? 'show' : ''}`}
                                >
                                    <div
                                        onClick={() => setIsDrShow(!isDrShow)}
                                        className={`admin__profile__mobile-tabs-btn dropdown-toggle ${
                                            isDrShow ? 'patb-show' : ''}`}
                                    >
                                        <input type="button" value={inputValue} />
                                        <div className='tmp-span'>
                                            <div className={`dafter ${isDrShow ? 'dafter-show' : ''}`}></div>
                                            <div className={`dbefore ${isDrShow ? 'dbefore-show' : ''}`}></div>
                                        </div>
                                    </div>

                                    <div
                                        className={`admin__profile__mobile-tabs-menu dropdown-menu ${isDrShow ? 'show' : ''
                                        }`}
                                    >
                                        <ul className="nav nav-tabs">
                                            <li className="nav-item">
                                                <span
                                                    className="tmp-nav-link"
                                                    onClick={() => {
                                                        setIsOpen({a: true})
                                                        setIsDrShow(false)
                                                        setInputValue('profile')
                                                    }}
                                                    style={isOpen.a ? {display: 'none'} : null}
                                                >
                                                    Profile
                                                </span>
                                            </li>

                                            <li className="nav-item">
                                                <span
                                                    className="tmp-nav-link"
                                                    onClick={() => {
                                                        setIsOpen({b: true})
                                                        setIsDrShow(false)
                                                        setInputValue('comments')
                                                    }}
                                                    style={isOpen.b ? {display: 'none'} : null}
                                                >
                                                    Comments
                                                </span>
                                            </li>

                                            <li className="nav-item">
                                                <span
                                                    className="tmp-nav-link"
                                                    onClick={() => {
                                                        setIsOpen({c: true})
                                                        setIsDrShow(false)
                                                        setInputValue('reviews')
                                                    }}
                                                    style={isOpen.c ? {display: 'none'} : null}
                                                >
                                                    Reviews
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* end profile mobile tabs nav */}

                                {/* profile btns */}
                                <div className="admin__profile__actions">
                                    <a
                                        href="#"
                                        onClick={() => setIsOpenModal({st: true})}
                                        className="admin__profile__action admin__profile__action--banned open-modal"
                                    >
                                        <i className="icon ion-ios-lock"></i>
                                    </a>
                                    <a
                                        href="#"
                                        onClick={() => setIsOpenModal({del: true})}
                                        className="admin__profile__action admin__profile__action--delete open-modal"
                                    >
                                        <i className="icon ion-ios-trash"></i>
                                    </a>
                                </div>
                                {/* end profile btns */}
                            </div>
                        </div>
                        {/* end profile */}

                        {/* content tabs */}
                        <div className="tab-content">
                            {isOpen.a ? (<Tab1 />) : null}
                            {isOpen.b ? (<Tab2 setIsOpenModal={setIsOpenModal} />) : null}
                            {isOpen.c ? (<Tab3 setIsOpenModal={setIsOpenModal} />) : null}
                        </div>
                        {/* end content tabs */}
                    </div>
                </div>
            </main>
            {/* end main content */}

            {/* modal view */}
            <Modal
                isOpen={isOpenModal.cs}
                onRequestClose={() => setIsOpenModal({cs: false})}
                contentLabel='Example label'
                style={customStyles}
            >
                <div className="zoom-anim-dialog modal">
                    <div className="admin__comments__autor">
                        <img className="admin__comments__avatar" src={userImg} alt="" />
                        <span className="admin__comments__name">John Doe</span>
                        <span className="admin__comments__time">30.08.2018, 17:53</span>
                    </div>
                    <p className="admin__comments__text">
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form, by injected
                        humour, or randomised words which don't look even slightly believable.
                        If you are going to use a passage of Lorem Ipsum, you need to be sure
                        there isn't anything embarrassing hidden in the middle of text.
                    </p>
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
                isOpen={isOpenModal.cd}
                onRequestClose={() => setIsOpenModal({cd: false})}
                contentLabel='Example label'
                style={customStyles}
            >
                <div className="zoom-anim-dialog modal">
                    <h6 className="modal__title">Comment delete</h6>

                    <p className="modal__text">Are you sure to permanently delete this comment?</p>

                    <div className="modal__btns">
                        <button className="modal__btn modal__btn--apply" type="button">Delete</button>
                        <button
                            type="button"
                            onClick={() => setIsOpenModal({cd: false})}
                            className="modal__btn modal__btn--dismiss"
                        >
                            Dismiss
                        </button>
                    </div>
                </div>
            </Modal>
            {/* end modal delete */}

            {/* modal view */}
            <Modal
                isOpen={isOpenModal.rs}
                onRequestClose={() => setIsOpenModal({rs: false})}
                contentLabel='Example label'
                style={customStyles}
            >
                <div className="zoom-anim-dialog modal">
                    <div className="admin__reviews__autor">
                        <img className="admin__reviews__avatar" src={userImg} alt="" />
                        <span className="admin__reviews__name">Best Marvel movie in my opinion</span>
                        <span className="admin__reviews__time">24.08.2018, 17:53 by John Doe</span>

                        <span className="admin__reviews__rating"><i className="icon ion-ios-star"></i>8.4</span>
                    </div>
                    <p className="admin__reviews__text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration
                        in some form, by injected humour, or randomised words
                        which don't look even slightly believable. If you are
                        going to use a passage of Lorem Ipsum, you need to be
                        sure there isn't anything embarrassing hidden in the
                        middle of text.
                    </p>
                </div>
            </Modal>
            {/* end modal view */}

            {/* modal delete */}
            <Modal
                isOpen={isOpenModal.rd}
                onRequestClose={() => setIsOpenModal({rd: false})}
                contentLabel='Example label'
                style={customStyles}
            >
                <div className="zoom-anim-dialog modal">
                    <h6 className="modal__title">Review delete</h6>

                    <p className="modal__text">Are you sure to permanently delete this review?</p>

                    <div className="modal__btns">
                        <button className="modal__btn modal__btn--apply" type="button">Delete</button>
                        <button
                            type="button"
                            onClick={() => setIsOpenModal({rd: false})}
                            className="modal__btn modal__btn--dismiss"
                        >
                            Dismiss
                        </button>
                    </div>
                </div>
            </Modal>
            {/* end modal delete */}

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
                        <button className="modal__btn modal__btn--apply" type="button">Apply</button>
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
                        <button className="modal__btn modal__btn--apply" type="button">Delete</button>
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

function Tab1 () {

    return(
        <>
            <div className="col-12">
                <div className="row">
                    {/* details form */}
                    <div className="col-12 col-lg-6">
                        <form action="#" className="profile__form">
                            <div className="row">
                                <div className="col-12">
                                    <h4 className="profile__title">Profile details</h4>
                                </div>

                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                    <div className="profile__group">
                                        <label className="profile__label" for="username">Username</label>
                                        <input id="username" type="text" name="username" className="profile__input" placeholder="User 123" />
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                    <div className="profile__group">
                                        <label className="profile__label" for="email">Email</label>
                                        <input id="email" type="text" name="email" className="profile__input" placeholder="email@email.com" />
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                    <div className="profile__group">
                                        <label className="profile__label" for="firstname">First Name</label>
                                        <input id="firstname" type="text" name="firstname" className="profile__input" placeholder="John" />
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                    <div className="profile__group">
                                        <label className="profile__label" for="lastname">Last Name</label>
                                        <input id="lastname" type="text" name="lastname" className="profile__input" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                    <div className="profile__group">
                                        <label className="profile__label" for="subscription">Subscription</label>
                                        <select className="js-example-basic-single" id="subscription">
                                            <option value="Basic">Basic</option>
                                            <option value="Premium">Premium</option>
                                            <option value="Cinematic">Cinematic</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                    <div className="profile__group">
                                        <label className="profile__label" for="rights">Rights</label>
                                        <select className="js-example-basic-single" id="rights">
                                            <option value="User">User</option>
                                            <option value="Moderator">Moderator</option>
                                            <option value="Admin">Admin</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <button className="profile__btn" type="button">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* end details form */}

                    {/* password form */}
                    <div className="col-12 col-lg-6">
                        <form action="#" className="profile__form">
                            <div className="row">
                                <div className="col-12">
                                    <h4 className="profile__title">Change password</h4>
                                </div>

                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                    <div className="profile__group">
                                        <label className="profile__label" for="oldpass">Old Password</label>
                                        <input id="oldpass" type="password" name="oldpass" className="profile__input" />
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                    <div className="profile__group">
                                        <label className="profile__label" for="newpass">New Password</label>
                                        <input id="newpass" type="password" name="newpass" className="profile__input" />
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                    <div className="profile__group">
                                        <label className="profile__label" for="confirmpass">Confirm New Password</label>
                                        <input id="confirmpass" type="password" name="confirmpass" className="profile__input" />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <button className="profile__btn" type="button">Change</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* end password form */}
                </div>
            </div>
        </>
    )
}

function Tab2({setIsOpenModal}) {

    return(
        <>
            {/* table */}
            <div className="col-12">
                <div className="main__table-wrap">
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
                                            href="#"
                                            onClick={() => setIsOpenModal({cs: true})}
                                            className="main__table-btn main__table-btn--view open-modal"
                                        >
                                            <i className="icon ion-ios-eye"></i>
                                        </a>
                                        <a
                                            href="#"
                                            onClick={() => setIsOpenModal({cd: true})}
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
                                            href="#"
                                            onClick={() => setIsOpenModal({cs: true})}
                                            className="main__table-btn main__table-btn--view open-modal"
                                        >
                                            <i className="icon ion-ios-eye"></i>
                                        </a>
                                        <a
                                            href="#"
                                            onClick={() => setIsOpenModal({cd: true})}
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
                                            href="#"
                                            onClick={() => setIsOpenModal({cs: true})}
                                            className="main__table-btn main__table-btn--view open-modal"
                                        >
                                            <i className="icon ion-ios-eye"></i>
                                        </a>
                                        <a
                                            href="#"
                                            onClick={() => setIsOpenModal({cd: true})}
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
                                            href="#"
                                            onClick={() => setIsOpenModal({cs: true})}
                                            className="main__table-btn main__table-btn--view open-modal"
                                        >
                                            <i className="icon ion-ios-eye"></i>
                                        </a>
                                        <a
                                            href="#"
                                            onClick={() => setIsOpenModal({cd: true})}
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
                                            href="#"
                                            onClick={() => setIsOpenModal({cs: true})}
                                            className="main__table-btn main__table-btn--view open-modal"
                                        >
                                            <i className="icon ion-ios-eye"></i>
                                        </a>
                                        <a
                                            href="#"
                                            onClick={() => setIsOpenModal({cd: true})}
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
                                            href="#"
                                            onClick={() => setIsOpenModal({cs: true})}
                                            className="main__table-btn main__table-btn--view open-modal"
                                        >
                                            <i className="icon ion-ios-eye"></i>
                                        </a>
                                        <a
                                            href="#"
                                            onClick={() => setIsOpenModal({cd: true})}
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
                                            href="#"
                                            onClick={() => setIsOpenModal({cs: true})}
                                            className="main__table-btn main__table-btn--view open-modal"
                                        >
                                            <i className="icon ion-ios-eye"></i>
                                        </a>
                                        <a
                                            href="#"
                                            onClick={() => setIsOpenModal({cd: true})}
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
                                            href="#"
                                            onClick={() => setIsOpenModal({cs: true})}
                                            className="main__table-btn main__table-btn--view open-modal"
                                        >
                                            <i className="icon ion-ios-eye"></i>
                                        </a>
                                        <a
                                            href="#"
                                            onClick={() => setIsOpenModal({cd: true})}
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
                                            href="#"
                                            onClick={() => setIsOpenModal({cs: true})}
                                            className="main__table-btn main__table-btn--view open-modal"
                                        >
                                            <i className="icon ion-ios-eye"></i>
                                        </a>
                                        <a
                                            href="#"
                                            onClick={() => setIsOpenModal({cd: true})}
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
                                            href="#"
                                            onClick={() => setIsOpenModal({cs: true})}
                                            className="main__table-btn main__table-btn--view open-modal"
                                        >
                                            <i className="icon ion-ios-eye"></i>
                                        </a>
                                        <a
                                            href="#"
                                            onClick={() => setIsOpenModal({cd: true})}
                                            className="main__table-btn main__table-btn--delete open-modal"
                                        >
                                            <i className="icon ion-ios-trash"></i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* end table */}

            {/* paginator */}
            <div className="col-12">
                <div className="admin__paginator-wrap">
                    <span>10 from 23</span>

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
        </>
    )
}

function Tab3({setIsOpenModal}) {

    return(
        <>
            {/* table */}
            <div className="col-12">
                <div className="main__table-wrap">
                    <table className="main__table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>ITEM</th>
                                <th>AUTHOR</th>
                                <th>TEXT</th>
                                <th>RATING</th>
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
                                    <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 7.9</div>
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
                                            href="#"
                                            onClick={() => setIsOpenModal({rs: true})}
                                            className="main__table-btn main__table-btn--view open-modal"
                                        >
                                            <i className="icon ion-ios-eye"></i>
                                        </a>
                                        <a
                                            href="#"
                                            onClick={() => setIsOpenModal({rd: true})}
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
                                    <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 8.6</div>
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
                                            href="#"
                                            onClick={() => setIsOpenModal({rs: true})}
                                            className="main__table-btn main__table-btn--view open-modal"
                                        >
                                            <i className="icon ion-ios-eye"></i>
                                        </a>
                                        <a
                                            href="#"
                                            onClick={() => setIsOpenModal({rd: true})}
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
                                    <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 6.0</div>
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
                                            href="#"
                                            onClick={() => setIsOpenModal({rs: true})}
                                            className="main__table-btn main__table-btn--view open-modal"
                                        >
                                            <i className="icon ion-ios-eye"></i>
                                        </a>
                                        <a
                                            href="#"
                                            onClick={() => setIsOpenModal({rd: true})}
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
                                    <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 9.1</div>
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
                                            href="#"
                                            onClick={() => setIsOpenModal({rs: true})}
                                            className="main__table-btn main__table-btn--view open-modal"
                                        >
                                            <i className="icon ion-ios-eye"></i>
                                        </a>
                                        <a
                                            href="#"
                                            onClick={() => setIsOpenModal({rd: true})}
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
                                    <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 5.5</div>
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
                                            href="#"
                                            onClick={() => setIsOpenModal({rs: true})}
                                            className="main__table-btn main__table-btn--view open-modal"
                                        >
                                            <i className="icon ion-ios-eye"></i>
                                        </a>
                                        <a
                                            href="#"
                                            onClick={() => setIsOpenModal({rd: true})}
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
                                    <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 7.0</div>
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
                                            href="#"
                                            onClick={() => setIsOpenModal({rs: true})}
                                            className="main__table-btn main__table-btn--view open-modal"
                                        >
                                            <i className="icon ion-ios-eye"></i>
                                        </a>
                                        <a
                                            href="#"
                                            onClick={() => setIsOpenModal({rd: true})}
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
                                    <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 9.0</div>
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
                                            href="#"
                                            onClick={() => setIsOpenModal({rs: true})}
                                            className="main__table-btn main__table-btn--view open-modal"
                                        >
                                            <i className="icon ion-ios-eye"></i>
                                        </a>
                                        <a
                                            href="#"
                                            onClick={() => setIsOpenModal({rd: true})}
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
                                    <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 6.2</div>
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
                                            href="#"
                                            onClick={() => setIsOpenModal({rs: true})}
                                            className="main__table-btn main__table-btn--view open-modal"
                                        >
                                            <i className="icon ion-ios-eye"></i>
                                        </a>
                                        <a
                                            href="#"
                                            onClick={() => setIsOpenModal({rd: true})}
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
                                    <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 7.9</div>
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
                                            href="#"
                                            onClick={() => setIsOpenModal({rs: true})}
                                            className="main__table-btn main__table-btn--view open-modal"
                                        >
                                            <i className="icon ion-ios-eye"></i>
                                        </a>
                                        <a
                                            href="#"
                                            onClick={() => setIsOpenModal({rd: true})}
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
                                    <div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 8.6</div>
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
                                            href="#"
                                            onClick={() => setIsOpenModal({rs: true})}
                                            className="main__table-btn main__table-btn--view open-modal"
                                        >
                                            <i className="icon ion-ios-eye"></i>
                                        </a>
                                        <a
                                            href="#"
                                            onClick={() => setIsOpenModal({rd: true})}
                                            className="main__table-btn main__table-btn--delete open-modal"
                                        >
                                            <i className="icon ion-ios-trash"></i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* end table */}

            {/* paginator */}
            <div className="col-12">
                <div className="paginator-wrap">
                    <span>10 from 32</span>

                    <ul className="paginator">
                        <li className="paginator__item paginator__item--prev">
                            <a href="#"><i className="icon ion-ios-arrow-back"></i></a>
                        </li>
                        <li className="paginator__item"><a href="#">1</a></li>
                        <li className="paginator__item paginator__item--active"><a href="#">2</a></li>
                        <li className="paginator__item"><a href="#">3</a></li>
                        <li className="paginator__item"><a href="#">4</a></li>
                        <li className="paginator__item paginator__item--next">
                            <a href="#"><i className="icon ion-ios-arrow-forward"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* end paginator */}
        </>
    )
}