import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { loadExpectedItems, clearExpectedItems } from '../../actions'

import { IoIosPlay } from 'react-icons/io'

const Expected = props => {
    const { items, loadItems, clearItems } = props

    useEffect(() => {
        loadItems(items.length)

        return () => {
            clearItems()
        }
    }, [])

    return(
        <>
        {/* <!-- expected premiere */}
            <section className="section section--bg" data-bg="img/section/section.jpg">
                <div className="container">
                    <div className="row">
                        {/* section title */}
                        <div className="col-12">
                            <h2 className="section__title">Expected premiere</h2>
                        </div>
                        {/* end section title */}

                        {items.map((card, cIndex) => (
                            <div key={cIndex} className='col-6 col-sm-4 col-lg-3 col-xl-2'>
                                <div className='expected__card'>
                                    <div className="card">
                                        <div className="card__cover">
                                            <img src={card.cover} alt="cover 1" />
                                            <Link
                                                className='card__play'
                                                to={{
                                                    pathname: `/details-${card.category}`,
                                                    state: { id: card._id },
                                                }}
                                            >
                                                <IoIosPlay style={{margin: '2px 0 0 3px'}}/>
                                                {/* <i className="icon ion-ios-play"></i> */}
                                            </Link>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title">
                                                <Link
                                                    className='card__title'
                                                    to={{
                                                        pathname: `/details-${card.category}`,
                                                        state: { id: card._id }
                                                    }}
                                                >
                                                    {card.title}
                                                </Link>
                                            </h3>
                                            <span className="card__category">
                                                {card.genres.map((genre, gIndex) => (
                                                    <Link
                                                        key={gIndex}
                                                        to={{ pathname: '/catalog-grid', state: { genre } }}
                                                    >
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

                        {/* section btn */}
                        <div className="col-12">
                            <button
                                className="section__btn"
                                onClick={() => loadItems(items.length)}
                            >
                                Show more
                            </button>
                        </div>
                        {/* end section btn */}
                    </div>
                </div>
            </section>
            {/* end expected premiere */}
        </>
    )
}

const mapStateToProps = ({ expectedItems }) => ({
    items: expectedItems
})

const mapDispatchToProps = dispatch => ({
    loadItems: (length) => dispatch(loadExpectedItems(length)),
    clearItems: () => dispatch(clearExpectedItems())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null
)(Expected)