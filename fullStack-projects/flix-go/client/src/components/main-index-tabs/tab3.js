import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { loadMainTvseries, clearMainTvseries } from '../../actions/main/mainTvseriesActions'

import { IoIosPlay } from 'react-icons/io'

const Tab3 = props => {
    const { mainTvseries, loadItems, clearItems } = props

    useEffect(() => {
        loadItems()

        return () => {
            clearItems()
        }
    }, [])

    return(
        <div className="row">
            {mainTvseries.length && mainTvseries.map((card, cIndex) => (
                <div key={cIndex} className='col-6 col-sm-4 col-lg-3 col-xl-2'>
					<div className='mainTvseries__card'>
						<div className="card">
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
								<span className="card__rate">
									<i className="icon ion-ios-star"></i>
									{card.rates}
								</span>
							</div>
						</div>
					</div>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = ({ mainTvseries }) => ({
    mainTvseries
})

const mapDispatchToProps = dispatch => ({
    loadItems: () => dispatch(loadMainTvseries()),
    clearItems: () => dispatch(clearMainTvseries())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null
)(Tab3)