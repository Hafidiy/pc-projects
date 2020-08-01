import React from 'react'
import { Link } from 'react-router-dom'

import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io'
import { FaGithub, FaTelegram } from 'react-icons/fa'

import first from '../../assets/img/Download_on_the_App_Store_Badge.svg'
import second from '../../assets/img/google-play-badge.png'

const Footer = () => {

  return(
      <>
        {/* footer */}
        <footer className="footer">
            <div className="container">
                <div className="row">
                    {/* footer list */}
                    <div className="col-12 col-md-3">
                        <h6 className="footer__title">Download Our App</h6>
                        <ul className="footer__app">
                            <li><a href="#"><img src={first} alt="" /></a></li>
                            <li><a href="#"><img src={second} alt="" /></a></li>
                        </ul>
                    </div>
                    {/* end footer list */}

                    {/* footer list */}
                    <div className="col-6 col-sm-4 col-md-3">
                        <h6 className="footer__title">Resources</h6>
                        <ul className="footer__list">
                            <li><Link to='/about'>About Us</Link></li>
                            <li><Link to='/pricing'>Pricing Plan</Link></li>
                            <li><Link to='/faq'>Help</Link></li>
                        </ul>
                    </div>
                    {/* end footer list */}

                    {/* footer list */}
                    <div className="col-6 col-sm-4 col-md-3">
                        <h6 className="footer__title">Legal</h6>
                        <ul className="footer__list">
                            <li><Link to='/privacy'>Terms of Use</Link></li>
                            <li><Link to='/privacy'>Privacy Policy</Link></li>
                            <li><Link to='/privacy'>Security</Link></li>
                        </ul>
                    </div>
                    {/* end footer list */}

                    {/* footer list */}
                    <div className="col-12 col-sm-4 col-md-3">
                        <h6 className="footer__title">Contact</h6>
                        <ul className="footer__list">
                            <li><a href="tel:+998999713258">+998 (90) 971-3258</a></li>
                            <li><a href="mailto:support@moviego.com">support@flixgo.com</a></li>
                        </ul>
                        <ul className="footer__social">
                            <li className="facebook">
                                <a href="https://www.facebook.com/hafidiy.alfayed.3" target='_blank'>
                                    <IoLogoFacebook />
                                    {/* <i className="icon ion-logo-facebook"></i> */}
                                </a>
                            </li>
                            <li className="instagram">
                                <a href="https://www.instagram.com/abu_xolid.t" target='_blank'>
                                    {/* <IoLogoInstagram style={{marginBottom: '20%'}}/> */}
                                    <i className="icon ion-logo-instagram"></i>
                                </a>
                            </li>
                            <li className="telegram">
                                <a href="https://t.me/halfayed" target='_blank'>
                                    <FaTelegram />
                                    {/* <i className="icon ion-logo-twitter"></i> */}
                                </a>
                            </li>
                            <li className="github">
                                <a href="https://github.com/Hafidiy" target='_blank'>
                                    <FaGithub />
                                    {/* <i className="icon ion-logo-vk"></i> */}
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* end footer list */}

                    {/* footer copyright */}
                    <div className="col-12">
                        <div className="footer__copyright">
                            <small>
                                © 2020 FlixGo. Create by {' '}
                                <a href="http://https://hafidiy.github.io/project_portfolio/work.html" target="_blank">
                                    Tolipov Abdulloh
                                </a>
                            </small>

                            <ul>
                                <li><Link to='/privacy'>Terms of Use</Link></li>
                                <li><Link to='/privacy'>Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* end footer copyright */}
                </div>
            </div>
        </footer>
        {/* end footer */}
    </>
  )
}

export default Footer