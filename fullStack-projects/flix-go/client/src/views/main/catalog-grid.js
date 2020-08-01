import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { setMainParamsDefault, loadGridItems, clearGridItems } from '../../actions'

import { IoIosPlay } from 'react-icons/io'

import Header from '../../components/main-header'
import Title from '../../components/main-title'
import Filter from '../../components/main-filter'
import Paginator from '../../components/main-paginator'
import Expected from '../../components/main-expected'
import Footer from '../../components/main-footer'

import img1 from '../../assets/img/covers/cover.jpg'
import img2 from '../../assets/img/covers/cover2.jpg'
import img3 from '../../assets/img/covers/cover3.jpg'
import img4 from '../../assets/img/covers/cover4.jpg'
import img5 from '../../assets/img/covers/cover5.jpg'
import img6 from '../../assets/img/covers/cover6.jpg'

const cardsGrid = [
    {
        cover: img1,
        rates: 8.4,
        title: 'I Dream in Another Language',
        genres: ['Action', 'Triller']
    },
    {
        cover: img2,
        rates: 7.1,
        title: 'Benched',
        genres: ['Comedy']
    },
    {
        cover: img3,
        rates: 6.3,
        title: 'Whitney',
        genres: ['Romance', 'Drama', 'Music']
    },
    {
        cover: img4,
        rates: 7.9,
        title: 'Blindspotting',
        genres: ['Comedy', 'Drama']
    },
    {
        cover: img5,
        rates: 8.4,
        title: 'I Dream in Another Language',
        genres: ['Action', 'Triller']
    },
    {
        cover: img6,
        rates: 7.1,
        title: 'Benched',
        genres: ['Comedy']
    },
    {
        cover: img6,
        rates: 6.3,
        title: 'Whitney',
        genres: ['Romance', 'Drama', 'Music']
    },
    {
        cover: img5,
        rates: 7.9,
        title: 'Blindspotting',
        genres: ['Comedy', 'Drama']
    },
    {
        cover: img4,
        rates: 8.4,
        title: 'I Dream in Another Language',
        genres: ['Action', 'Triller']
    },
    {
        cover: img3,
        rates: 7.1,
        title: 'Benched',
        genres: ['Comedy']
    },
    {
        cover: img2,
        rates: 6.3,
        title: 'Whitney',
        genres: ['Romance', 'Drama', 'Music']
    },
    {
        cover: img1,
        rates: 7.9,
        title: 'Blindspotting',
        genres: ['Comedy', 'Drama']
    },
]

const CatalogGrid = props => {
    const { gridItems, loadItems, clearItems, setDefault } = props

    useEffect(() => {
        loadItems()

        return () => {
            setDefault()
            clearItems()
        }
    }, [])

    return(
        <>
            <Header />
            <Title title='Catalog grid' />
            <Filter propGenre={props.location.state} />
            {/* catalog */}
            <div className="catalog">
                <div className="container">
                    <div className="row">
                        {cardsGrid.map((item, index) => (
                            <div key={index} className='col-6 col-sm-4 colg-lg-3 col-xl-2'>
                                <div className='card'>
                                    <div className='card__cover'>
                                        <img src={item.cover} alt="card"/>
                                        <Link to='/details-movie' className='card__play'>
                                            <IoIosPlay style={{margin: '2px 0 0 3px'}}/>
                                        </Link>
                                    </div>
                                    <div className="card__content">
                                        <h3 className="card__title">
                                            <Link to='/details-movie'>
                                                {item.title}
                                            </Link>
                                        </h3>
                                        <span className="card__category">
                                            {item.genres.map((genre, gIndex) => (
                                                <Link to='/catalog-list' key={gIndex}>
                                                    {genre}
                                                </Link>
                                            ))}
                                        </span>
                                        <span className="card__rate">
                                            {/* <IoIosStar className={styles.ioIosStar}/> */}
                                            <i className='icon ion-ios-star'></i>
                                            {item.rates}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                        {/* paginator */}
                        <Paginator />
                        {/* end paginator */}
                    </div>
                </div>
            </div>
            {/* end catalog */}
            <Expected />
            <Footer />
        </>
    )
}

const mapStateToProps = ({ gridItems }) => ({
    gridItems
})

const mapDispatchToProps = dispatch => ({
    setDefault: () => dispatch(setMainParamsDefault()),
    loadItems: () => dispatch(loadGridItems()),
    clearItems: () => dispatch(clearGridItems())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null
)(CatalogGrid)