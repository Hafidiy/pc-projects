import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Plyr from 'react-plyr'
import ReactPlayer from 'react-player'
import ReadMoreReact from 'read-more-react'

import Header from '../../components/main-header'
import Discover from '../../components/main-discover'
import Footer from '../../components/main-footer'

import bg from '../../assets/img/home/home__bg.jpg'
import cover from '../../assets/img/covers/cover.jpg'

import video1 from '../../assets/video/Тимати feat. L\'One - АМГ (премьера клипа, 2019).mp4'
import video2 from '../../assets/video/Тимати feat. Мот, Егор Крид, Скруджи, Наzима & Terry - Ракета (премьера клипа, 2.mp4'

const video3 = 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4'

const seasons = [
    {
        seasonTitle: 'Season: 1',
        seasonInfo: '22 Episodes from Nov, 2004 until May, 2005',
        episodes: [
            {
                episodeTitle: 'Pilot',
                airDate: 'Tuesday, November 16th, 2004',
                src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
            },
            {
                episodeTitle: 'Paternity',
                airDate: 'Tuesday, November 23rd, 2004',
                src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
            },
            {
                episodeTitle: 'Occam\'s Razor',
                airDate: 'Tuesday, November 30th, 2004',
                src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
            },
            {
                episodeTitle: 'Maternity',
                airDate: 'Tuesday, December 7th, 2004',
                src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
            },
            {
                episodeTitle: 'Damned If You Do',
                airDate: 'Tuesday, December 14th, 2004',
                src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
            },
            {
                episodeTitle: 'The Socratic Method',
                airDate: 'Tuesday, December 21st, 2004',
                src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
            },
        ]
    },
    {
        seasonTitle: 'Season: 2',
        seasonInfo: '24 Episodes from Sep, 2005 until May, 2006',
        episodes: [
            {
                episodeTitle: 'Pilot',
                airDate: 'Tuesday, November 16th, 2005',
                src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
            },
            {
                episodeTitle: 'Paternity',
                airDate: 'Tuesday, November 23rd, 2005',
                src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
            },
            {
                episodeTitle: 'Occam\'s Razor',
                airDate: 'Tuesday, November 30th, 2005',
                src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
            },
            {
                episodeTitle: 'Maternity',
                airDate: 'Tuesday, December 7th, 2005',
                src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
            },
            {
                episodeTitle: 'Damned If You Do',
                airDate: 'Tuesday, December 14th, 2005',
                src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
            },
        ]
    },
    {
        seasonTitle: 'Season: 3',
        seasonInfo: '22 Episodes from Nov, 2006 until May, 2007',
        episodes: [
            {
                episodeTitle: 'Pilot',
                airDate: 'Tuesday, November 16th, 2006',
                src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
            },
            {
                episodeTitle: 'Paternity',
                airDate: 'Tuesday, November 23rd, 2006',
                src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
            },
            {
                episodeTitle: 'Occam\'s Razor',
                airDate: 'Tuesday, November 30th, 2006',
                src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
            },
            {
                episodeTitle: 'Maternity',
                airDate: 'Tuesday, December 7th, 2006',
                src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
            },
        ]
    },
    {
        seasonTitle: 'Season: 4',
        seasonInfo: '22 Episodes from Nov, 2007 until May, 2008',
        episodes: [
            {
                episodeTitle: 'Pilot',
                airDate: 'Tuesday, November 16th, 2007',
                src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
            },
            {
                episodeTitle: 'Paternity',
                airDate: 'Tuesday, November 23rd, 2007',
                src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
            },
            {
                episodeTitle: 'Occam\'s Razor',
                airDate: 'Tuesday, November 30th, 2007',
                src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
            },
        ]
    },
]

const item = {
    title: 'I Dream in Another Language',
    img: cover,
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.',
    qual: 'HD',
    age: 16,
    rating: 8.4,
    runningTime: 120,
    releaseYear: 2017,
    video: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
    genres: ['Action', 'Triller'],
    countries: ['USA']
}

const DetailsTvSeries = () => {
    const [isOpen, setIsOpen] = useState([1, 0, 0, 0])

    return(
        <>
            <Header />
            {/* details */}
            <section className="section details">
                {/* details background */}
                <div className="details__bg" data-bg={bg}></div>
                {/* end details background */}

                {/* details content */}
                <div className="container">
                    <div className="row">
                        {/* title */}
                        <div className="col-12">
                            <h1 className="details__title">{item.title}</h1>
                        </div>
                        {/* end title */}

                        {/* content */}
                        <div className="col-10">
                            <div className="card card--details card--series">
                                <div className="row">
                                    {/* card cover */}
                                    <div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                                        <div className="card__cover">
                                            <img src={item.img} alt="" />
                                        </div>
                                    </div>
                                    {/* end card cover */}

                                    {/* card content */}
                                    <div class="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-7">
                                        <div class="card__content">
                                            <div class="card__wrap">
                                                <span class="card__rate">
                                                    <i class="icon ion-ios-star"></i>
                                                    {item.rating}
                                                </span>

                                                <ul class="card__list">
                                                    <li>{item.qual}</li>
                                                    <li>{`${item.age}+`}</li>
                                                </ul>
                                            </div>

                                            <ul class="card__meta">
                                                <li>
                                                    <span>Genre:</span>
                                                    {item.genres.map((genre, gIndex) => (
                                                        <Link key={gIndex} to='/catalog-grid'>{genre}</Link>
                                                    ))}
                                                </li>
                                                <li><span>Release year:</span>{` ${item.releaseYear}`}</li>
                                                <li><span>Running time:</span>{` ${item.runningTime} min`}</li>
                                                <li><span>Country:</span> <a href="#">USA</a> </li>
                                            </ul>

                                            <div class="card__description card__description--details">
                                                <ReadMoreReact
                                                    min={20}
                                                    max={500}
                                                    ideal={233}
                                                    text={item.description}
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
                        {/* end content */}

                        {/* player */}
                        <div className="col-12 col-xl-6">
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
                                url={video2}
                            />

                            {/* <Plyr
                                type='video'
                                captions={{ active: false, language: 'auto', update: false }}
                                videoId={video1}
                            /> */}

                            {/* <video controls crossOrigin playsInline poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg" id="player"> */}
                                {/* Video files */}
                                {/* <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" type="video/mp4" size={576} /> */}
                                {/* <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4" type="video/mp4" size={720} /> */}
                                {/* <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4" type="video/mp4" size={1080} /> */}
                                {/* <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1440p.mp4" type="video/mp4" size={1440} /> */}
                                {/* Caption files */}
                                {/* <track kind="captions" label="English" srcLang="en" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt" default /> */}
                                {/* <track kind="captions" label="Français" srcLang="fr" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt" /> */}
                                {/* Fallback for browsers that don't support the <video> element */}
                                {/* <a href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" download>Download</a> */}
                            {/* </video> */}
                        </div>
                        {/* end player */}

                        {/* accordion */}
                        <div className="col-12 col-xl-6">
                            <div className="accordion" id="accordion">
                                <div className='accordion__scroll'>
                                    {seasons.map((season, sIndex) => (
                                        <div key={sIndex} className="accordion__card">
                                            <div className="card-header">
                                                <button
                                                    type="button"
                                                    aria-expanded={isOpen[sIndex]} 
                                                    onClick={() => {
                                                        let tmp = [...isOpen]
                                                        tmp[sIndex] = !tmp[sIndex]
                                                        setIsOpen(tmp)
                                                    }}
                                                >
                                                    <span>{season.seasonTitle}</span>
                                                    <span>{season.seasonInfo}</span>
                                                </button>
                                            </div>

                                            <div className={`collapse ${isOpen[sIndex] ? 'show' : ''}`}>
                                                <div className="card-body">
                                                    <table className="accordion__list">
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Title</th>
                                                                <th>Air Date</th>
                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                            {season.episodes.map((episode, eIndex) => (
                                                                <tr key={eIndex}>
                                                                    <td>{eIndex + 1}</td>
                                                                    <td>{episode.episodeTitle}</td>
                                                                    <td>{episode.airDate}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* end accordion */}

                        <div className="col-12">
                            <div className="details__wrap">
                                {/* availables */}
                                <div className="details__devices">
                                    <span className="details__devices-title">Available on devices:</span>
                                    <ul className="details__devices-list">
                                        <li><i className="icon ion-logo-apple"></i><span>IOS</span></li>
                                        <li><i className="icon ion-logo-android"></i><span>Android</span></li>
                                        <li><i className="icon ion-logo-windows"></i><span>Windows</span></li>
                                        <li><i className="icon ion-md-tv"></i><span>Smart TV</span></li>
                                    </ul>
                                </div>
                                {/* end availables */}

                                {/* share */}
                                <div className="details__share">
                                    <span className="details__share-title">Share with friends:</span>

                                    <ul className="details__share-list">
                                        <li className="facebook"><a href="#"><i className="icon ion-logo-facebook"></i></a></li>
                                        <li className="instagram"><a href="#"><i className="icon ion-logo-instagram"></i></a></li>
                                        <li className="twitter"><a href="#"><i className="icon ion-logo-twitter"></i></a></li>
                                        <li className="vk"><a href="#"><i className="icon ion-logo-vk"></i></a></li>
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

export default DetailsTvSeries