import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { IoIosSearch, IoIosLogIn } from 'react-icons/io'

import logoSvg from '../../assets/img/logo.svg'

const Header = (props) => {
  const [lang, setLang] = useState('EN')
  const [isOpen, setIsOpen] = useState({})

  const [headerNav, setHeaderNav] = useState(false)
  const [searchBarShow, setSearchBarShow] = useState(false)

  return(
    <div className="header">
      <div className="header__wrap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header__content">
                {/* header logo */}
                <Link
                  to='/'
                  className="header__logo"
                >
                  <img src={logoSvg} alt="logo" />
                </Link>
                {/* end header logo */}

                {/* header nav */}
                <ul className={`header__nav ${headerNav ? 'header__nav--active' : ''}`}>
                  {/* dropdown */}
                  <li className="header__nav-item">
                    <span
                      style={{cursor: 'pointer'}}
                      onBlur={() => setIsOpen({a: false})}
                      onClick={() => setIsOpen({a: !isOpen.a})}
                      className={`dropdown-toggle header__nav-link ${isOpen.a ? 'show' : ''}`}
                    >
                      Home
                    </span>

                    <ul
                      className={`dropdown-menu header__dropdown-menu ${isOpen.a ? 'show' : ''}`}
                    >
                      <li><Link to="/">Home slideshow bg</Link></li>
                      <li><Link to="/">Home static bg</Link></li>
                    </ul>
                  </li>
                  {/* end dropdown */}

                  {/* dropdown */}
                  <li className="header__nav-item">
                    <span
                      style={{cursor: 'pointer'}}
                      onBlur={() => setIsOpen({b: false})}
                      onClick={() => setIsOpen({b: !isOpen.b})}
                      className={`dropdown-toggle header__nav-link ${isOpen.b ? 'show' : ''}`}
                    >
                      Catalog
                    </span>

                    <ul
                      className={`dropdown-menu header__dropdown-menu ${isOpen.b ? 'show' : ''}`}
                    >
                      <li><Link to="/catalog-grid">Catalog Grid</Link></li>
                      <li><Link to="/catalog-list">Catalog List</Link></li>
                      <li><Link to="/details-movie">Details Movie</Link></li>
                      <li><Link to="/details-tvseries">Details TV Series</Link></li>
                    </ul>
                  </li>
                  {/* end dropdown */}

                  <li className="header__nav-item">
                    <Link to="/pricing" className="header__nav-link">Pricing Plan</Link>
                  </li>

                  <li className="header__nav-item">
                    <Link to="faq" className="header__nav-link">Help</Link>
                  </li>

                  {/* dropdown */}
                  <li
                    onBlur={() => setIsOpen({c: false})}
                    onClick={() => setIsOpen({c: !isOpen.c})}
                    className={`dropdown header__nav-item ${isOpen.c ? 'show' : ''}`}
                  >
                    {/* <span
                      style={{cursor: 'pointer'}}
                      className="dropdown-toggle header__nav-link header__nav-link--more"
                    >
                      <i className="icon ion-ios-more"></i>
                    </span>

                    <ul
                      className={`dropdown-menu header__dropdown-menu ${isOpen.c ? 'show' : ''}`}
                    >
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/profile">Profile</Link></li>
                      <li><Link to="/signin">Sign In</Link></li>
                      <li><Link to="/signup">Sign Up</Link></li>
                      <li><Link to="/forgot">Forgot password</Link></li>
                      <li><Link to="/privacy">Privacy Policy</Link></li>
                      <li><Link to="/contacts">Contacts</Link></li>
                      <li><Link to="/page-404">404 Page</Link></li>
                    </ul> */}
                  </li>
                  {/* end dropdwon */}
                </ul>
                {/* end header nav */}

                {/* header auth */}
                <div className="header__auth">
                  <button
                    type="button"
                    onClick={() => setSearchBarShow(!searchBarShow)}
                    className={`header__search-btn ${searchBarShow ? 'active' : ''}`}
                  >
                    <IoIosSearch />
                  </button>

                  {/* dropdown */}
                  <div className="dropdown header__lang">
                    <p
                      onBlur={() => setIsOpen({d: false})}
                      onClick={() => setIsOpen({d: !isOpen.d})}
                      className={`dropdown-toggle header__nav-link ${isOpen.d ? 'show' : ''}`}
                    >
                      {lang}
                    </p>

                    <ul className={`dropdown-menu header__dropdown-menu ${isOpen.d ? 'show' : ''}`}>
                      <li>
                        <p
                          onClick={() => {
                            setLang('EN')
                            setIsOpen({d: false})
                          }}
                        >
                          English
                        </p>
                      </li>
                      <li>
                        <p
                          onClick={() => {
                            setLang('SP')
                            setIsOpen({d: false})
                          }}
                        >
                          Spanish
                        </p>
                      </li>
                      <li>
                        <p
                          onClick={() => {
                            setLang('RU')
                            setIsOpen({d: false})
                          }}
                        >
                          Russian
                        </p>
                      </li>
                    </ul>
                  </div>
                  {/* end dropdown */}

                  <Link to='/signin' className="header__sign-in">
                    <IoIosLogIn />
                    {/* <i className="icon ion-ios-log-in"></i> */}
                    <span>{props.username ? props.username : 'sign in'}</span>
                  </Link>
                </div>
                {/* end header auth */}

                {/* header menu btn */}
                <button
                  type="button"
                  onClick={() => setHeaderNav(!headerNav)}
                  className={`header__btn ${headerNav ? 'header__btn--active' : ''}`}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
                {/* end header menu btn */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* header search */}
      <form
        action="#"
        className={`header__search ${searchBarShow ? 'header__search--active' : ''}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header__search-content">
                <input type="text" placeholder="Search for a movie, TV Series that you are looking for" />

                <button type="button">search</button>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* end header search */}
    </div>
  )
}

export default Header