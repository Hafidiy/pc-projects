import React from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/img/logo.svg'

export const Header = (props) => {

    return(
        <>
            {/* header */}
            <header
                className={`admin__header ${
                    props.isOpen ? 'admin__header--active' : ''
                }`}
            >
                <div className="admin__header__content">
                {/* header logo */}
                <Link
                    to="/admin"
                    className="admin__header__logo"
                >
                    <img src={logoImg} alt="" />
                </Link>
                {/* end header logo */}

                {/* header menu btn */}
                <button
                    type="button"
                    onClick={props.setIsOpen}
                    className={`admin__header__btn ${
                        props.isOpen ? 'admin__header__btn--active' : ''
                    }`}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                {/* end header menu btn */}
                </div>
            </header>
            {/* end header */}
        </>
    )
}