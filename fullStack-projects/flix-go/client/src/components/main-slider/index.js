import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { loadSwipeItems, clearSwipeItems } from '../../actions'

import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'
import { IoIosPlay } from 'react-icons/io'

// import bg from '../../assets/img/home/home__bg.jpg'
import cover1 from '../../assets/img/covers/cover.jpg'
import cover2 from '../../assets/img/covers/cover2.jpg'
import cover3 from '../../assets/img/covers/cover3.jpg'
import cover4 from '../../assets/img/covers/cover4.jpg'
import cover5 from '../../assets/img/covers/cover10.jpg'

let cards = [
  {
    cover: cover5,
    title: 'I Dream in Another Language',
    genres: ['Action', 'Triller'],
    rates: 8.4
  },
  {
    cover: cover2,
    title: 'Benched',
    genres: ['Comedy'],
    rates: 7.1
  },
  {
    cover: cover3,
    title: 'Whitney',
    genres: ['Romance', 'Drama'],
    rates: 6.9
  },
  {
    cover: cover4,
    title: 'Blindspotting',
    genres: ['Comedy', 'Drama'],
    rates: 7.9
  }
]

const Slider = props => {
  const { loadItems, clearItems } = props
  // cards = [...props.cards]

  useEffect(() => {
    loadItems()

    return () => {
      clearItems()
    }
  }, [])

  const [swiper, updateSwiper] = useState(null)

  const goNext = () => {
    if(swiper !== null){
      swiper.slideNext()
    }
  }

  const goPrev = () => {
    if(swiper !== null){
      swiper.slidePrev()
    }
  }

  const params = {
    slidesPerView: 4,
    speed: 600,
    spaceBetween: 30,
    loop: true,
    grabCursor: false,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 50
      }
    }
  }

  return(
    <>
      <div className="home">
        {/* home bg */}
        <div className="home__bg"></div>
        {/* end home bg */}

        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="home__title"><b>NEW ITEMS</b> OF THIS SEASON</h1>

              <button
                type="button"
                onClick={goPrev}
                className="home__nav home__nav--prev"
              >
                <i className="icon ion-ios-arrow-round-back"></i>
              </button>
              <button
                type="button"
                onClick={goNext}
                className="home__nav home__nav--next"
              >
                <i className="icon ion-ios-arrow-round-forward"></i>
              </button>
            </div>

            <div className="col-12">
              <div  className="home__carousel">
                <Swiper
                  {...params}
                  getSwiper={updateSwiper}
                >

                  {cards.length && cards.map((card, cIndex) => (
                    <div key={cIndex} className='item'>
                      <div className='swipe__card'>
                        <div className="card card--big">
                          <div className="card__cover">
                            <img src={card.cover} alt="cover" />
                            <Link to='/details-movie' className='card__play'>
                              <IoIosPlay style={{margin: '2px 0 0 3px'}}/>
                              {/* <i className="icon ion-ios-play"></i> */}
                            </Link>
                          </div>
                          <div className="card__content">
                            <h3 className="card__title">
                              <Link to='/details-movie'>
                                {card.title}
                              </Link>
                            </h3>
                            <span className="card__category">
                              {card.genres.map((genre, gIndex) => (
                                <Link to='/catalog-grid' key={gIndex}>
                                  {genre}
                                </Link>
                              ))}
                            </span>
                            <span className="card__rate">
                              <i className="icon ion-ios-star"></i>
                              {card.rates}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = ({ swipeItems }) => ({
  cards: swipeItems
})

const mapDispatchToProps = dispatch => ({
  loadItems: () => dispatch(loadSwipeItems()),
  clearItems: () => dispatch(clearSwipeItems())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(Slider)