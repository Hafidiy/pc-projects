import React from 'react'

import Header from '../../components/main-header'
import Title from '../../components/main-title'
import Features from '../../components/main-features'
import Partners from '../../components/main-partners'
import Footer from '../../components/main-footer'

const howArr = [
    {
        num: '01',
        title: 'Create an account',
        text: 'It has never been an issue to find an old movie or TV show on the internet. However, this is not the case with the new releases.'
    },
    {
        num: '02',
        title: 'Choose your Plan',
        text: 'It has never been an issue to find an old movie or TV show on the internet. However, this is not the case with the new releases.'
    },
    {
        num: '03',
        title: 'Enjoy MovieGo',
        text: 'It has never been an issue to find an old movie or TV show on the internet. However, this is not the case with the new releases.'
    }
]

const About = () => {

    return(
        <>
            <Header />
            <Title title='About Us' />
            {/* about */}
            <section className="section">
                <div className="container">
                    <div className="row">
                        {/* section title */}
                        <div className="col-12">
                            <h2 className="section__title"><b>FLIXGO</b> – Best Place for Movies</h2>
                        </div>
                        {/* end section title */}

                        {/* section text */}
                        <div className="col-12">
                            <p className="section__text">It is a long <b>established</b> fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>

                            <p className="section__text section__text--last-with-margin">'Content here, content here', making it look like <a href="#">readable</a> English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        </div>
                        {/* end section text */}

                        <Features />
                    </div>
                </div>
            </section>
            {/* end about */}
            {/* how it works */}
            <section className="section section--dark">
                <div className="container">
                    <div className="row">
                        {/* section title */}
                        <div className="col-12">
                            <h2 className="section__title section__title--no-margin">How it works?</h2>
                        </div>
                        {/* end section title */}

                        {howArr.map((how, hIndex) => (
                            <div key={hIndex} className='col-12 col-md-6 col-lg-4'>
                                <span className="how__number">{how.num}</span>
                                <h3 className="how__title">{how.title}</h3>
                                <p className="how__text">{how.text}</p>
                            </div>
                        ))}
                        {/* ebd how box */}
                    </div>
                </div>
            </section>
            {/* end how it works */}
            <Partners />
            <Footer />
        </>
    )
}

export default About