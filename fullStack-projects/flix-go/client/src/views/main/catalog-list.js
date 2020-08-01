import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { setMainParamsDefault } from '../../actions'

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

const cardsList = [
    {
        cover: img1,
        title: 'I Dream in Another Language',
        genres: ['Action', 'Triller'],
        rates: 8.4,
        quality: 'HD',
        age: 16,
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
    },
    {
        cover: img2,
        title: 'Benched',
        genres: ['Comedy'],
        rates: 7.1,
        quality: 'HD',
        age: 16,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
        cover: img3,
        title: 'Whitney',
        genres: ['Romance', 'Drama', 'Music'],
        rates: 6.3,
        quality: 'HD',
        age: 16,
        description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        cover: img4,
        title: 'Blindspotting',
        genres: ['Comedy', 'Drama'],
        rates: 7.9,
        quality: 'HD',
        age: 16,
        description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    },
    {
        cover: img5,
        title: 'I Dream in Another Language',
        genres: ['Action', 'Triller'],
        rates: 8.4,
        quality: 'HD',
        age: 16,
        description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
    },
    {
        cover: img6,
        title: 'Benched',
        genres: ['Comedy'],
        rates: 7.1,
        quality: 'HD',
        age: 16,
        description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'
    },
]

const CatalogList = props => {
    const { setDefault } = props

    useEffect(() => {


        return () => {
            setDefault()
        }
    }, [])

    return(
        <>
            <Header />
            <Title title='Catalog list' />
            <Filter propGenre={props.location.state}/>
            {/* catalog */}
            <div className="catalog">
                <div className="container">
                    <div className="row">
                        {cardsList.map((item, index) => (
                            <div key={index} className='col-6 col-sm-12 col-lg-6'>
                                <div className="card card--list">
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <div className="card__cover">
                                                <img src={item.cover} alt="cover" />
                                                <Link to='/details-movie' className='card__play'>
                                                    <IoIosPlay style={{margin: '2px 0 0 3px'}}/>
                                                </Link>
                                            </div>
                                        </div>
                            
                                        <div className="col-12 col-sm-8">
                                            <div className="card__content">
                                                <h3 className="card__title">
                                                    <Link to='/details-movie'>
                                                        {item.title}
                                                    </Link>
                                                </h3>
                                                <span className="card__category">
                                                    {item.genres.map((genre, gIndex) => (
                                                        <Link to='/catalog-grid' key={gIndex}>
                                                            {genre}
                                                        </Link>
                                                    ))}
                                                </span>
                            
                                                <div className="card__wrap">
                                                    <span className="card__rate">
                                                        <i className="icon ion-ios-star"></i>
                                                        {item.rates}
                                                    </span>
                            
                                                    <ul className="card__list">
                                                        <li>{item.quality}</li>
                                                        <li>{`${item.age}+`}</li>
                                                    </ul>
                                                </div>
                            
                                                <div className="card__description">
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
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

const mapStateToProps = ({}) => ({

})

const mapDispatchToProps = dispatch => ({
    setDefault: () => dispatch(setMainParamsDefault())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null
)(CatalogList)