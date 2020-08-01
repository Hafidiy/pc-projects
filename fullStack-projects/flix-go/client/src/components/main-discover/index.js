import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import OneRange from '../one-range'

import { IoIosPlay } from 'react-icons/io'

import cover1 from '../../assets/img/covers/cover.jpg'
import cover2 from '../../assets/img/covers/cover2.jpg'
import cover3 from '../../assets/img/covers/cover3.jpg'
import cover4 from '../../assets/img/covers/cover4.jpg'
import cover5 from '../../assets/img/covers/cover5.jpg'
import cover6 from '../../assets/img/covers/cover6.jpg'
import gallery1 from '../../assets/img/gallery/project-1.jpg'
import gallery2 from '../../assets/img/gallery/project-2.jpg'
import gallery3 from '../../assets/img/gallery/project-3.jpg'
import gallery4 from '../../assets/img/gallery/project-4.jpg'
import gallery5 from '../../assets/img/gallery/project-5.jpg'
import gallery6 from '../../assets/img/gallery/project-6.jpg'
import userAvatar from '../../assets/img/user.svg'

const comments = [
    {
        status: 'general',
        img: userAvatar,
        username: 'John Doe',
        date: '30.08.2018, 17:53',
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
        likes: 12,
        disLikes: 7
    },
    {
        status: 'answer',
        img: userAvatar,
        username: 'John Doe',
        date: '24.08.2018, 16:41',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        likes: 8,
        disLikes: 3
    },
    {
        status: 'quote',
        img: userAvatar,
        username: 'John Doe',
        date: '11.08.2018, 11:11',
        spanText: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
        text: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        likes: 11,
        disLikes: 1
    },
    {
        status: 'general',
        img: userAvatar,
        username: 'John Doe',
        date: '07.08.2018, 14:33',
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\t anything embarrassing hidden in the middle of text.',
        likes: 99,
        disLikes: 35
    },
    {
        status: 'general',
        img: userAvatar,
        username: 'John Doe',
        date: '02.08.2018, 15:24',
        text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        likes: 74,
        disLikes: 13
    },
]

const reviews = [
    {
        img: userAvatar,
        title: 'Best Marvel movie in my opinion',
        username: 'John Doe',
        date: '24.08.2018, 17:53',
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
        rating: 8.4
    },
    {
        img: userAvatar,
        title: 'Best Marvel movie in my opinion',
        username: 'John Doe',
        date: '24.08.2018, 17:53',
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
        rating: 9.0
    },
    {
        img: userAvatar,
        title: 'Best Marvel movie in my opinion',
        username: 'John Doe',
        date: '24.08.2018, 17:53',
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.',
        rating: 7.5
    },
]

const cards = [
    {
        img: cover1,
        title: 'I Dream in Another Language',
        genres: ['Action', 'Triller'],
        rating: 8.4
    },
    {
        img: cover2,
        title: 'Benched',
        genres: ['Comedy'],
        rating: 7.1
    },
    {
        img: cover3,
        title: 'Whitney',
        genres: ['Romance', 'Drama', 'Music'],
        rating: 6.3
    },
    {
        img: cover4,
        title: 'Blindspotting',
        genres: ['Comedy', 'Drama'],
        rating: 7.9
    },
    {
        img: cover5,
        title: 'I Dream in Another Language',
        genres: ['Action', 'Triller'],
        rating: 8.4
    },
    {
        img: cover6,
        title: 'Benched',
        genres: ['Comedy'],
        rating: 7.1
    },
]

const figArr = [
    {
        img: gallery1,
        title: 'Some image caption 1'
    },
    {
        img: gallery2,
        title: 'Some image caption 2'
    },
    {
        img: gallery3,
        title: 'Some image caption 3'
    },
    {
        img: gallery4,
        title: 'Some image caption 4'
    },
    {
        img: gallery5,
        title: 'Some image caption 5'
    },
    {
        img: gallery6,
        title: 'Some image caption 6'
    },
]

const Discover = () => {
    const lineStyles = { width: 150, height: 6, bgColor: '#555' }
    const ratingStep = [0.1, 0, 10]
    const [rating, setRating] = useState(2.5)
    const [ratingLineStyles, setRatingLineStyles] = useState({
        width: 0,
        marginLeft: 0,
        bg: 'linear-gradient(90deg, #ff55a5 0%, #ff5869 100%)',
    })
    const [ratingControl1Styles, setRatingControl1Styles] = useState({
        size: 18,
        position: [-9, -6],
        bgColor: '#ff55a5',
        boxShadow: '0px 0px 50px 4px rgba(255,85,165,0.91)'
    })

    const [isActive, setIsActive] = useState({b: true})
    const [isDrShow, setIsDrShow] = useState(false)
    const [inputValue, setInputValue] = useState('comments')

    return(
        <>
            {/* content */}
            <section className="content">
                <div className="content__head">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* content title */}
                                <h2 className="content__title">Discover</h2>
                                {/* end content title */}

                                {/* content tabs nav */}
                                <ul className="nav nav-tabs content__tabs">
                                    <li className="nav-item">
                                        <span
                                            onClick={() => setIsActive({a: true})}
                                            className={`tmp-nav-link ${isActive.a ? 'tmp-active' : ''}`}
                                        >
                                            Comments
                                        </span>
                                    </li>

                                    <li className="nav-item">
                                        <span
                                            onClick={() => setIsActive({b: true})}
                                            className={`tmp-nav-link ${isActive.b ? 'tmp-active' : ''}`}
                                        >
                                            Reviews
                                        </span>
                                    </li>

                                    <li className="nav-item">
                                        <span
                                            onClick={() => setIsActive({c: true})}
                                            className={`tmp-nav-link ${isActive.c ? 'tmp-active' : ''}`}
                                        >
                                            Photos
                                        </span>
                                    </li>
                                </ul>
                                {/* end content tabs nav */}

                                {/* content mobile tabs nav */}
                                <div
                                    className={`content__mobile-tabs ${isDrShow ? 'show' : ''}`}
                                >
                                    <div
                                        onClick={() => setIsDrShow(!isDrShow)}
                                        className={`content__mobile-tabs-btn dropdown-toggle ${
                                            isDrShow ? 'cmtb-show' : ''}`}
                                    >
                                        <input type="button" value={inputValue} />
                                        <div className='tmp-span'>
                                            <div className={`dafter ${isDrShow ? 'dafter-show' : ''}`}></div>
                                            <div className={`dbefore ${isDrShow ? 'dbefore-show' : ''}`}></div>
                                        </div>
                                    </div>

                                    <div
                                        className={`content__mobile-tabs-menu dropdown-menu ${isDrShow ? 'show' : ''
                                        }`}
                                    >
                                        <ul className="nav nav-tabs">
                                            <li className="nav-item">
                                                <span
                                                    className="tmp-nav-link"
                                                    onClick={() => {
                                                        setIsActive({a: true})
                                                        setIsDrShow(false)
                                                        setInputValue('comments')
                                                    }}
                                                    style={isActive.a ? {display: 'none'} : null}
                                                >
                                                    Comments
                                                </span>
                                            </li>

                                            <li className="nav-item">
                                                <span
                                                    className="tmp-nav-link"
                                                    onClick={() => {
                                                        setIsActive({b: true})
                                                        setIsDrShow(false)
                                                        setInputValue('reviews')
                                                    }}
                                                    style={isActive.b ? {display: 'none'} : null}
                                                >
                                                    Reviews
                                                </span>
                                            </li>

                                            <li className="nav-item">
                                                <span
                                                    className="tmp-nav-link"
                                                    onClick={() => {
                                                        setIsActive({c: true})
                                                        setIsDrShow(false)
                                                        setInputValue('photos')
                                                    }}
                                                    style={isActive.c ? {display: 'none'} : null}
                                                >
                                                    Photos
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* end content mobile tabs nav */}
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="container"
                    onClick={() => isDrShow
                        ? setIsDrShow(false) : null}
                >
                    <div className="row">
                        <div className="col-12 col-lg-8 col-xl-8">
                            {/* content tabs */}
                            <div className="tab-content">
                                {isActive.a ? (<Tab1 />) : null}
                                {isActive.b ? (
                                    <Tab2
                                        step={ratingStep}
                                        currentValue={rating}
                                        setCurrentValue={setRating}
                                        lineStyles={lineStyles}
                                        control1Styles={ratingControl1Styles}
                                        setControl1Styles={setRatingControl1Styles}
                                        betweenLineStyles={ratingLineStyles}
                                        setBetweenLineStyles={setRatingLineStyles}
                                    />
                                ) : null}
                                {isActive.c ? (<Tab3 />) : null}
                            </div>
                            {/* end content tabs */}
                        </div>

                        {/* sidebar */}
                        <div className="col-12 col-lg-4 col-xl-4">
                            <div className="row">
                                {/* section title */}
                                <div className="col-12">
                                    <h2 className="section__title section__title--sidebar">You may also like...</h2>
                                </div>
                                {/* end section title */}

                                {cards.map((card, cIndex) => (
                                    <div key={cIndex} className='col-6 col-sm-4 col-lg-6'>
                                        <div className="card">
                                            <div className="card__cover">
                                                <img src={card.img} alt="card-img" />
                                                <Link to='/details-movie' className='card__play'>
                                                    <IoIosPlay style={{margin: '2px 0 0 3px'}}/>
                                                    {/* <i className="icon ion-ios-play"></i> */}
                                                </Link>
                                            </div>
                                            <div className="card__content">
                                                <h3 className="card__title">
                                                    <Link to='/details-movie'>{card.title}</Link>
                                                </h3>
                                                <span className="card__category">
                                                    {card.genres.map((genre, gIndex) => (
                                                        <Link key={gIndex} to='/catalog-grid'>{genre}</Link>
                                                    ))}
                                                </span>
                                                <span className="card__rate">
                                                    <i className="icon ion-ios-star"></i>
                                                    {card.rating}
                                                </span>
                                            </div>
                                        </div>     
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* end sidebar */}
                    </div>
                </div>
            </section>
            {/* end content */}
        </>
    )
}

function Tab1 () {

    return(
        <div className="row">
            {/* comments */}
            <div className="col-12">
                <div className="comments">
                    <ul className="comments__list">
                        {comments.map((comment, cIndex) => (
                            <li
                                key={cIndex}
                                className={`comments__item ${comment.status === 'answer'
                                    ? 'comments__item--answer'
                                    : comment.status === 'quote'
                                        ? 'comments__item--quote' : ''}`}
                            >
                                <div className="comments__autor">
                                    <img className="comments__avatar" src={comment.img} alt="cover" />
                                    <span className="comments__name">{comment.username}</span>
                                    <span className="comments__time">{comment.date}</span>
                                </div>
                                <p className="comments__text">
                                    {comment.status === 'quote' ? (
                                        <>
                                            <span>{comment.spanText}</span>
                                            {comment.text}
                                        </>
                                    ) : comment.text}
                                </p>
                                <div className="comments__actions">
                                    <div className="comments__rate">
                                        <button type="button">
                                            <i className="icon ion-md-thumbs-up"></i>
                                            {comment.likes}
                                        </button>
                                        <button type="button">
                                            {comment.disLikes}
                                            <i className="icon ion-md-thumbs-down"></i>
                                        </button>
                                    </div>

                                    <button type="button">
                                        <i className="icon ion-ios-share-alt"></i>
                                        Reply
                                    </button>
                                    <button type="button">
                                        <i className="icon ion-ios-quote"></i>
                                        Quote
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <form action="#" className="form">
                        <textarea
                            id="text"
                            name="text"
                            className="form__textarea"
                            placeholder="Add comment"
                        ></textarea>
                        <button type="button" className="form__btn">Send</button>
                    </form>
                </div>
            </div>
            {/* end comments */}
        </div>
    )
}

function Tab2 (props) {
    const {
        step,
        currentValue,
        setCurrentValue,
        lineStyles,
        control1Styles,
        setControl1Styles,
        betweenLineStyles,
        setBetweenLineStyles
    } = props

    return(
        <div className="row">
            {/* reviews */}
            <div className="col-12">
                <div className="reviews">
                    <ul className="reviews__list">
                        {reviews.map((review, rIndex) => (
                            <li key={rIndex} className="reviews__item">
                                <div className="reviews__autor">
                                    <img className="reviews__avatar" src={review.img} alt="cover" />
                                    <span className="reviews__name">{review.title}</span>
                                    <span className="reviews__time">
                                        {`${review.date} by ${review.username}`}
                                    </span>

                                    <span className="reviews__rating">
                                        <i className="icon ion-ios-star"></i>
                                        {review.rating}
                                    </span>
                                </div>
                                <p className="reviews__text">{review.text}</p>
                            </li>
                        ))}
                    </ul>

                    <form action="#" className="form">
                        <input type="text" className="form__input" placeholder="Title" />
                        <textarea className="form__textarea" placeholder="Review"></textarea>
                        <div className='form__slider__rating'>
                            Rating: {` ${currentValue}`}
                        </div>
                        <div className="form__slider">
                            <OneRange
                                step={step}
                                currentValue={currentValue}
                                setCurrentValue={setCurrentValue}
                                lineStyles={lineStyles}
                                control1Styles={control1Styles}
                                setControl1Styles={setControl1Styles}
                                betweenLineStyles={betweenLineStyles}
                                setBetweenLineStyles={setBetweenLineStyles}
                            />
                        </div>
                        <button type="button" className="form__btn">Send</button>
                    </form>
                </div>
            </div>
            {/* end reviews */}
        </div>
    )
}

function Tab3 () {

    return(
        <>
            {/* project gallery */}
            <div className="gallery" itemscope="">
                <div className="row">
                    {figArr.map((fig, fIndex) => (
                        <figure key={fIndex} className="col-12 col-sm-6 col-xl-4" itemprop="associatedMedia" itemscope="">
                            <a href={fig.img} itemprop="contentUrl" data-size="1920x1280">
                                <img src={fig.img} itemprop="thumbnail" alt="Image description" />
                            </a>
                            <figcaption itemprop="caption description">{fig.title}</figcaption>
                        </figure>
                    ))}
                </div>
            </div>
            {/* end project gallery */}
        </>
    )
}

export default Discover