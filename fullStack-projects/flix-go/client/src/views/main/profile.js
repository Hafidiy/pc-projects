import React, { useState } from 'react'

import userImg from '../../assets/img/user.svg'

import Header from '../../components/main-header'
import Title from '../../components/main-title'
import Footer from '../../components/main-footer'

const Profile = () => {
    const [isActive, setIsActive] = useState({a: true})
    const [isDrShow, setIsDrShow] = useState(false)
    const [inputValue, setInputValue] = useState('profile')

    return(
        <>
            <Header username='Hafidiy' />
            <Title first='My FlixGo' title='Profile' />
            {/* content */}
            <div className="content">
                {/* profile */}
                <div className="profile">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="profile__content">
                                    <div className="profile__user">
                                        <div className="profile__avatar">
                                            <img src={userImg} alt="" />
                                        </div>
                                        <div className="profile__meta">
                                            <h3>Username</h3>
                                            <span>FlixGo ID: 23562</span>
                                        </div>
                                    </div>

                                    {/* content tabs nav */}
                                    <ul
                                        className="nav nav-tabs content__tabs content__tabs--profile"
                                    >
                                        <li className="nav-item">
                                            <span
                                                onClick={() => setIsActive({a: true})}
                                                className={`tmp-nav-link ${isActive.a ? 'tmp-active' : ''}`}
                                            >
                                                Profile
                                            </span>
                                        </li>

                                        <li className="nav-item">
                                            <span
                                                onClick={() => setIsActive({b: true})}
                                                className={`tmp-nav-link ${isActive.b ? 'tmp-active' : ''}`}
                                            >
                                                Subscription
                                            </span>
                                        </li>
                                    </ul>
                                  {/* end content tabs nav */}

                                    {/* content mobile tabs nav */}
                                    <div
                                        className="content__mobile-tabs content__mobile-tabs--profile"
                                    >
                                        <div
                                            onClick={() => setIsDrShow(!isDrShow)}
                                            className={`content__mobile-tabs-btn dropdown-toggle ${
                                                isDrShow ? 'cmtb-show' : ''}`}
                                        >
                                            <input type="button" value={inputValue} />
                                            <div className='tmp-span'>
                                                <div className={`dafter ${isDrShow ? 'dafter-show' : ''}`}></div>
                                                <div className={`dbefore ${isDrShow ? 'dbefore-show' : ''}`}></div>
                                            </div>
                                        </div>

                                        <div
                                            className={`content__mobile-tabs-menu dropdown-menu ${isDrShow ? 'show' : ''
                                            }`}
                                        >
                                            <ul className="nav nav-tabs" role="tablist">
                                                <li className="nav-item">
                                                    <span
                                                        className='tmp-nav-link'
                                                        onClick={() => {
                                                            setIsDrShow(false)
                                                            setIsActive({a: true})
                                                            setInputValue('profile')
                                                        }}
                                                        style={isActive.a ? {display: 'none'} : null}
                                                    >
                                                        Profile
                                                    </span>
                                                </li>

                                                <li className="nav-item">
                                                    <span
                                                        className='tmp-nav-link'
                                                        onClick={() => {
                                                            setIsDrShow(false)
                                                            setIsActive({b: true})
                                                            setInputValue('subscription')
                                                        }}
                                                        style={isActive.b ? {display: 'none'} : null}
                                                    >
                                                        Subscription
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* end content mobile tabs nav */}

                                    <button className="profile__logout" type="button">
                                        <i className="icon ion-ios-log-out"></i>
                                        <span>Logout</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end profile */}

                <div className="container">
                    {/* content tabs */}
                    <div className="tab-content">
                        {isActive.a ? (<Tab1 />) : null}
                        {isActive.b ? (<Tab2 />) : null}
                    </div>
                    {/* end content tabs */}
                </div>
            </div>
            {/* end content */}
            <Footer />
        </>
    )
}

function Tab1 (props){

    return(
        <>
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
        </>
    )
}

function Tab2 (props){

    return(
        <>
            <div className="row">
                {/* price */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="price price--profile">
                        <div className="price__item price__item--first"><span>Basic</span> <span>Free</span></div>
                        <div className="price__item"><span>7 days</span></div>
                        <div className="price__item"><span>720p Resolution</span></div>
                        <div className="price__item"><span>Limited Availability</span></div>
                        <div className="price__item"><span>Desktop Only</span></div>
                        <div className="price__item"><span>Limited Support</span></div>
                        <a href="#" className="price__btn">Choose Plan</a>
                    </div>
                </div>
                {/* end price */}

                {/* price */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="price price--profile price--premium">
                        <div className="price__item price__item--first"><span>Premium</span> <span>$19.99</span></div>
                        <div className="price__item"><span>1 Month</span></div>
                        <div className="price__item"><span>Full HD</span></div>
                        <div className="price__item"><span>Lifetime Availability</span></div>
                        <div className="price__item"><span>TV & Desktop</span></div>
                        <div className="price__item"><span>24/7 Support</span></div>
                        <a href="#" className="price__btn">Choose Plan</a>
                    </div>
                </div>
                {/* end price */}

                {/* price */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="price price--profile">
                        <div className="price__item price__item--first"><span>Cinematic</span> <span>$39.99</span></div>
                        <div className="price__item"><span>2 Months</span></div>
                        <div className="price__item"><span>Ultra HD</span></div>
                        <div className="price__item"><span>Lifetime Availability</span></div>
                        <div className="price__item"><span>Any Device</span></div>
                        <div className="price__item"><span>24/7 Support</span></div>
                        <a href="#" className="price__btn">Choose Plan</a>
                    </div>
                </div>
                {/* end price */}
            </div>
        </>
    )
}

export default Profile