import React from 'react'
import { Link } from 'react-router-dom'

import img from '../../assets/img/logo.svg'

const SignIn = () => {

    return(
        <>
            <div className="sign section--bg" data-bg="img/section/section.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sign__content">
                                {/* authorization form */}
                                <form action="#" className="sign__form">
                                    <Link to='/' className="sign__logo">
                                        <img src={img} alt="" />
                                    </Link>

                                    <div className="sign__group">
                                        <input type="text" className="sign__input" placeholder="Email" />
                                    </div>

                                    <div className="sign__group">
                                        <input type="password" className="sign__input" placeholder="Password" />
                                    </div>

                                    <div className="sign__group sign__group--checkbox">
                                        <input id="remember" name="remember" type="checkbox" checked="checked" />
                                        <label for="remember">Remember Me</label>
                                    </div>
                                    
                                    <button className="sign__btn" type="button">Sign in</button>

                                    <span className="sign__text">
                                        Don't have an account?
                                        <Link to='/signup'>Sign up!</Link>
                                    </span>

                                    <span className="sign__text">
                                        <Link to='forgot'>Forgot password?</Link>
                                    </span>
                                </form>
                                {/* end authorization form */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn