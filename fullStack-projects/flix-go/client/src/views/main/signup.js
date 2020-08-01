import React from 'react'
import { Link } from 'react-router-dom'

import img from '../../assets/img/logo.svg'

const SignUp = () => {

    return(
        <>
            <div class="sign section--bg" data-bg="img/section/section.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="sign__content">
                                {/* registration form */}
                                <form action="#" class="sign__form">
                                    <Link to='/' class="sign__logo">
                                        <img src={img} alt="" />
                                    </Link>

                                    <div class="sign__group">
                                        <input
                                            type="text"
                                            class="sign__input"
                                            placeholder="Name"
                                        />
                                    </div>

                                    <div class="sign__group">
                                        <input
                                            type="text"
                                            class="sign__input"
                                            placeholder="Email"
                                        />
                                    </div>

                                    <div class="sign__group">
                                        <input
                                            type="password"
                                            class="sign__input"
                                            placeholder="Password"
                                        />
                                    </div>

                                    <div class="sign__group sign__group--checkbox">
                                        <input
                                            id="remember"
                                            name="remember"
                                            type="checkbox"
                                            checked="checked"
                                        />
                                        <label for="remember">
                                            I agree to the
                                            <Link to='/privacy'>
                                                Privacy Policy
                                            </Link>
                                        </label>
                                    </div>
                                    
                                    <button class="sign__btn" type="button">Sign up</button>

                                    <span class="sign__text">
                                        Already have an account?
                                        <Link to='/signin'>Sign in!</Link>
                                    </span>
                                </form>
                                {/* registration form */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp