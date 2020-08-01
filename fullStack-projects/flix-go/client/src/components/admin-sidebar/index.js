import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import userImg from '../../assets/img/user.svg'
import logoImg from '../../assets/img/logo.svg'

export const SideBar = props => {
    const [isShow, setIsShow] = useState(false)

    return(
        <>
            {/* sidebar */}
            <div
                className={`admin__sidebar ${
                    props.isOpen ? 'admin__sidebar--active' : ''
                }`}
            >
                {/* sidebar logo */}
                <Link
                    to='/admin'
                    className="admin__sidebar__logo"
                >
                    <img src={logoImg} alt="" />
                </Link>
                {/* end sidebar logo */}
                
                {/* sidebar user */}
                <div className="admin__sidebar__user">
                    <div className="admin__sidebar__user-img">
                        <img src={userImg} alt="" />
                    </div>

                    <div className="admin__sidebar__user-title">
                        <span>Admin</span>
                        <p>John Doe</p>
                    </div>

                    <button className="admin__sidebar__user-btn" type="button">
                        <i className="icon ion-ios-log-out"></i>
                    </button>
                </div>
                {/* end sidebar user */}

                {/* sidebar nav */}
                <ul className="admin__sidebar__nav">
                    <li className="admin__sidebar__nav-item">
                        <Link
                            to="/admin"
                            className={`admin__sidebar__nav-link ${props.dashboard
                            ? 'admin__sidebar__nav-link--active' : ''}`}
                        >
                            <i className="icon ion-ios-keypad"></i>
                            Dashboard
                        </Link>
                    </li>

                    <li className="admin__sidebar__nav-item">
                        <Link
                            to="/admin-catalog"
                            className={`admin__sidebar__nav-link ${props.catalog
                                ? 'admin__sidebar__nav-link--active' : ''}`}
                        >
                            <i className="icon ion-ios-film"></i>
                            Catalog
                        </Link>
                    </li>

                    <li className="admin__sidebar__nav-item">
                        <Link
                            to="/admin-users"
                            className={`admin__sidebar__nav-link ${props.users
                                ? 'admin__sidebar__nav-link--active' : ''}`}
                        >
                            <i className="icon ion-ios-contacts"></i>
                            Users
                        </Link>
                    </li>

                    <li className="admin__sidebar__nav-item">
                        <Link
                            to="/admin-comments"
                            className={`admin__sidebar__nav-link ${props.comments
                                ? 'admin__sidebar__nav-link--active' : ''}`}
                        >
                            <i className="icon ion-ios-chatbubbles"></i>
                            Comments
                        </Link>
                    </li>

                    <li className="admin__sidebar__nav-item">
                        <Link
                            to="/admin-reviews"
                            className={`admin__sidebar__nav-link ${props.reviews
                                ? 'admin__sidebar__nav-link--active' : ''}`}
                        >
                            <i className="icon ion-ios-star-half"></i>
                            Reviews
                        </Link>
                    </li>
                
                    {/* dropdown */}
                    <li className="admin__dropdown admin__sidebar__nav-item">
                        <span
                            style={{cursor: 'pointer'}}
                            onClick={() => setIsShow(!isShow)}
                            className="admin__sidebar__nav-link"
                        >
                            <i className="icon ion-ios-copy"></i>
                            Pages
                        </span>

                        <div
                            className={`admin__sidebar__dropdown-menu scrollbar-dropdown ${
                                isShow ? 'show' : ''
                            }`}
                            
                        >
                            <span>
                                <ul>
                                    <li>
                                        <Link to='/add-item'>Add item</Link>
                                    </li>
                                    <li>
                                        <Link to='/edit-user'>Edit user</Link>
                                    </li>
                                    <li>
                                        <Link to='/signin'>Sign In</Link>
                                    </li>
                                    <li>
                                        <Link to='/signup'>Sign Up</Link>
                                    </li>
                                    <li>
                                        <Link to='/forgot'>Forgot password</Link>
                                    </li>
                                    <li>
                                        <Link to='/page-404'>404 Page</Link>
                                    </li>
                                </ul>
                            </span>
                        </div>
                    </li>
                    {/* end dropdown */}
                </ul>
                {/* end sidebar nav */}
                {/* sidebar copyright */}
                <div className="admin__sidebar__copyright">
                    © 2020 FlixGo. <br />
                    Create by {' '}
                    <a
                        href="https://hafidiy.github.io/project_portfolio/work.html"
                        target='_blank'
                    >
                        Tolipov Abdulloh
                    </a>
                </div>
                {/* end sidebar copyright */}
            </div>
            {/* end sidebar */}
        </>
    )
}