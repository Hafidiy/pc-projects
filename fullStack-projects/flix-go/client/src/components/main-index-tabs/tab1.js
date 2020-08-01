import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { loadMainItems, clearMainItems } from '../../actions/main/mainItemsActions'

import { IoIosPlay } from 'react-icons/io'

const Tab1 = props => {
    const { mainItems, loadItems, clearItems } = props

    useEffect(() => {
        loadItems()

        return () => {
            clearItems()
        }
    }, [])

    return(
        <div className="row">
            {mainItems.length && mainItems.map((card, cIndex) => (
                <div key={cIndex} className='col-6 col-sm-12 col-lg-6'>
                    <div className='mainItems__card'>
                        <div className="card card--list">
                            <div className="row">
                                <div className="col-12 col-sm-4">
                                    <div className="card__cover">
                                        <img src={card.cover} alt="cover"/>
                                        <Link
                                            className='card__play'
                                            to={{
                                                pathname: `/details-${card.category}`,
                                                state: { id: card._id }
                                            }}
                                        >
                                            <IoIosPlay style={{margin: '2px 0 0 3px'}}/>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-8">
                                    <div className="card__content">
                                        <h3 className="card__title">
                                            <Link
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

                                        <div className="card__wrap">
                                            <span className="card__rate">
                                                <i className="icon ion-ios-star"></i>
                                                {card.rates}
                                            </span>

                                            <ul className="card__list">
                                                <li>{card.quality}</li>
                                                <li>{`${card.age}+`}</li>
                                            </ul>
                                        </div>

                                        <div className="card__description">
                                            <p>{card.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = ({ mainItems }) => ({
    mainItems
})

const mapDispatchToProps = dispatch => ({
    loadItems: () => dispatch(loadMainItems()),
    clearItems: () => dispatch(clearMainItems())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null
)(Tab1)