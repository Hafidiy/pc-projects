import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { loadMainItem, clearMainItem } from '../../actions'

import { IoLogoFacebook } from 'react-icons/io'
import { FaGithub, FaTelegram } from 'react-icons/fa'

import ReadMoreReact from 'read-more-react'
import ReactPlayer from 'react-player'

import Header from '../../components/main-header'
import Discover from '../../components/main-discover'
import Footer from '../../components/main-footer'

const DetailsMovie = props => {
    const { mainItem, loadItem, clearItem } = props

    useEffect(() => {
        loadItem(props.location.state.id)

        return () => {
            clearItem()
        }
    }, [])


    return(
        Object.values(mainItem).length && <>
            <Header />
            {/* details */}
            <section class="section details">
                {/* details background */}
                <div class="details__bg"></div>
                {/* end details background */}

                {/* details content */}
                <div class="container">
                    <div class="row">
                        {/* title */}
                        <div class="col-12">
                            <h1 class="details__title">{mainItem.title}</h1>
                        </div>
                        {/* end title */}

                        {/* content */}
                        <div class="col-12 col-xl-6">
                            <div className='detail__card'>
                                <div class="card card--details">
                                    <div class="row">
                                        {/* card cover */}
                                        <div class="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-5">
                                            <div class="card__cover">
                                                <img src={mainItem.cover} alt="" />
                                            </div>
                                        </div>
                                        {/* end card cover */}

                                        {/* card content */}
                                        <div class="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-7">
                                            <div class="card__content">
                                                <div class="card__wrap">
                                                    <span class="card__rate">
                                                        <i class="icon ion-ios-star"></i>
                                                        {mainItem.rates}
                                                    </span>

                                                    <ul class="card__list">
                                                        <li>{mainItem.quality}</li>
                                                        <li>{`${mainItem.age}+`}</li>
                                                    </ul>
                                                </div>

                                                <ul class="card__meta">
                                                    <li>
                                                        <span>Genre:</span>
                                                        {mainItem.genres.map((genre, gIndex) => (
                                                            <Link key={gIndex} to='/catalog-grid'>{genre}</Link>
                                                        ))}
                                                    </li>
                                                    <li><span>Release year:</span>{` ${mainItem.releaseYear}`}</li>
                                                    <li><span>Running time:</span>{` ${mainItem.runningTime} min`}</li>
                                                    <li><span>Country:</span> <a href="#">USA</a> </li>
                                                </ul>

                                                <div class="card__description card__description--details">
                                                    <ReadMoreReact
                                                        min={20}
                                                        max={500}
                                                        ideal={233}
                                                        text={mainItem.description}
                                                        readMoreText={(
                                                            <i
                                                                className="icon ion-ios-more tmp-more-icon"
                                                            ></i>
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {/* end card content */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end content */}

                        {/* player */}
                        <div class="col-12 col-xl-6">
                            <ReactPlayer
                                playing={false}
                                id='player'
                                controls={true}
                                // light={true}
                                // volume={null}
                                width={'100%'}
                                height={'100%'}
                                config={{
                                    youtube: {
                                        playerVars: { showInfo: 1 }
                                    }
                                }}
                                url={mainItem.movie.src}
                            />
                        </div>
                        {/* end player */}

                        <div class="col-12">
                            <div class="details__wrap">
                                {/* availables */}
                                <div class="details__devices">
                                    <span class="details__devices-title">Available on devices:</span>
                                    <ul class="details__devices-list">
                                        <li><i class="icon ion-logo-apple"></i><span>IOS</span></li>
                                        <li><i class="icon ion-logo-android"></i><span>Android</span></li>
                                        <li><i class="icon ion-logo-windows"></i><span>Windows</span></li>
                                        <li><i class="icon ion-md-tv"></i><span>Smart TV</span></li>
                                    </ul>
                                </div>
                                {/* end availables */}

                                {/* share */}
                                <div class="details__share">
                                    <span class="details__share-title">Share with friends:</span>

                                    <ul class="details__share-list">
                                        <li className="facebook">
                                            <a href="https://www.facebook.com/hafidiy.alfayed.3" target='_blank'>
                                                <IoLogoFacebook style={{marginBottom: '20%'}} />
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
                                                <FaTelegram style={{width: '0.8em', marginBottom: '20%'}}/>
                                                {/* <i className="icon ion-logo-twitter"></i> */}
                                            </a>
                                        </li>
                                        <li className="github">
                                            <a href="https://github.com/Hafidiy" target='_blank'>
                                                <FaGithub style={{width: '0.8em', marginBottom: '20%'}}/>
                                                {/* <i className="icon ion-logo-vk"></i> */}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* end share */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* end details content */}
            </section>
            {/* end details */}
            <Discover />
            <Footer />
        </>
    )
}

const mapStateToProps = ({ mainItem }) => ({
    mainItem
})

const mapDispatchToProps = dispatch => ({
    loadItem: (id) => dispatch(loadMainItem(id)),
    clearItem: () => dispatch(clearMainItem())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null
)(DetailsMovie)