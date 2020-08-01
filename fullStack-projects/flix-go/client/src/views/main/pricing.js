import React from 'react'

import Header from '../../components/main-header'
import Title from '../../components/main-title'
import Features from '../../components/main-features'
import Partners from '../../components/main-partners'
import Footer from '../../components/main-footer'

const Pricing = () => {

    return(
        <>
            <Header />
            <Title title='Pricing' />
            {/* pricing */}
            <div className="section">
                <div className="container">
                    <div className="row">
                        {/* plan features */}
                        <div className="col-12">
                            <ul className="row plan-features">
                                <li className="col-12 col-md-6 col-lg-4">1 month unlimited access!</li>
                                <li className="col-12 col-md-6 col-lg-4">Stream on your phone, laptop, tablet or TV.</li>
                                <li className="col-12 col-md-6 col-lg-4">1 month unlimited access!</li>
                                <li className="col-12 col-md-6 col-lg-4">Thousands of TV shows, movies & more.</li>
                                <li className="col-12 col-md-6 col-lg-4">You can even Download & watch offline.</li>
                                <li className="col-12 col-md-6 col-lg-4">Thousands of TV shows, movies & more.</li>
                            </ul>
                        </div>
                        {/* end plan features */}

                        {/* price */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="price">
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
                            <div className="price price--premium">
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
                            <div className="price">
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
                </div>
            </div>
            {/* end pricing */}
            <section className="section section--dark">
                <div className="container">
                    <div className="row">
                        {/* section title */}
                        <div className="col-12">
                            <h2 className="section__title section__title--no-margin">Our Features</h2>
                        </div>
                        {/* end section title */}

                        <Features />  
                    </div>
                </div>
            </section>
            <Partners />
            <Footer />
        </>
    )
}

export default Pricing