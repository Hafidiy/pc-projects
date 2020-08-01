import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import cx from "classnames"

import { changeMainParams } from '../../actions'

import DualRange from '../dual-range'

import { genres } from '../../assets/constants/genres'
import { qualities } from '../../assets/constants/qualities'

const Filter = props => {
    // ----------------------
    const lineStyles = { width: 150, height: 6, bgColor: '#555' }
    const ratingStep = [0.1, 0, 10]
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
    const [ratingControl2Styles, setRatingControl2Styles] = useState({
        size: 18,
        position: [-9, -6],
        bgColor: '#ff5860',
        boxShadow: '0px 0px 50px 4px rgba(255,88,96,1)'
    })

    const yearStep = [1, 2000, new Date().getFullYear()]
    const [yearLineStyles, setYearLineStyles] = useState({
        width: 0,
        marginLeft: 0,
        bg: 'linear-gradient(90deg, #ff55a5 0%, #ff5869 100%)',
    })
    const [yearControl1Styles, setYearControl1Styles] = useState({
        size: 18,
        position: [-9, -6],
        bgColor: '#ff55a5',
        boxShadow: '0px 0px 50px 4px rgba(255,85,165,0.91)'
    })
    const [yearControl2Styles, setYearControl2Styles] = useState({
        size: 18,
        position: [-9, -6],
        bgColor: '#ff5860',
        boxShadow: '0px 0px 50px 4px rgba(255,88,96,1)'
    })
    // ----------------------
    
    const { propGenre, mainParams, changeParams } = props

    const [isOpen, setIsOpen] = useState({});

    const dropdownHandler = index => {
        setIsOpen({[index]: !isOpen[index]});
    };

    useEffect(() => {
        if(propGenre){
            if(propGenre.genre){
                changeParams('genre', propGenre.genre)
            }
        }
    }, [])

    return (
        <div className="mfilter">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="filter__content">
                            <div className="filter__items">
                                <div className={cx(["filter__item ", {show: isOpen[1]}])} id="filter__genre">
                                    <span className="filter__item-label">GENRE:</span>
                                    <div
                                        className="filter__item-btn"
                                        onClick={() => dropdownHandler(1)}
                                    >
                                        <input type="button" value={mainParams.genre}/>
                                        <span/>
                                    </div>
                                    <div
                                        className='custom-scroll-cont'
                                        style={!isOpen[1] ? {display: 'none', opacity: 0} : null}
                                    >
                                        <ul className='custom-scroll-menu'>
                                            {genres.map((genre, genreId) => (
                                                <li
                                                    key={genreId}
                                                    className='custom-scroll-item'
                                                    onClick={() => {
                                                        changeParams('genre', genre)
                                                        dropdownHandler(1)
                                                    }}
                                                >
                                                    {genre}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className={cx(["filter__item ", {show: isOpen[2]}])} id="filter__quality">
                                    <span className="filter__item-label">QUALITY:</span>
                                    <div className="filter__item-btn" onClick={() => dropdownHandler(2)}>
                                        <input type="button" value={mainParams.quality}/>
                                        <span/>
                                    </div>
                                    <div
                                        className='custom-scroll-cont'
                                        style={!isOpen[2] ? {display: 'none', opacity: 0} : null}
                                    >
                                        <ul className='custom-scroll-menu'>
                                            {qualities.map((qual, qualId) => (
                                                <li
                                                    key={qualId}
                                                    className='custom-scroll-item'
                                                    onClick={() => {
                                                        changeParams('quality', qual)
                                                        dropdownHandler(2)
                                                    }}
                                                >
                                                    {qual}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className={cx(["filter__item ", {show: isOpen[3]}])}>
                                    <span className="filter__item-label">IMBd:</span>

                                    <div className="filter__item-btn" onClick={() => dropdownHandler(3)}>
                                        <div className="filter__range">
                                            <div id="filter__imbd-start">
                                                {mainParams.rates[0]}
                                            </div>
                                            <div id="filter__imbd-end">
                                                {mainParams.rates[1]}
                                            </div>
                                        </div>
                                        <span/>
                                    </div>

                                    <div className="filter__item-menu filter__item-menu--range dropdown-menu">
                                        <DualRange
                                            step={ratingStep}
                                            lineStyles={lineStyles}
                                            control1Styles={ratingControl1Styles}
                                            setControl1Styles={setRatingControl1Styles}
                                            control2Styles={ratingControl2Styles}
                                            setControl2Styles={setRatingControl2Styles}
                                            betweenLineStyles={ratingLineStyles}
                                            setBetweenLineStyles={setRatingLineStyles}
                                            typeRange={'rates'}
                                        />
                                    </div>
                                </div>

                                <div className={cx(["filter__item ", {show: isOpen[4]}])} id="filter__year">
                                    <span className="filter__item-label">RELEASE YEAR:</span>
                                    <div className="filter__item-btn" onClick={() => dropdownHandler(4)}>
                                        <div className="filter__range">
                                            <div id="filter__years-start">
                                                {mainParams.year[0]}
                                            </div>
                                            <div id="filter__years-end">
                                                {mainParams.year[1]}
                                            </div>
                                        </div>
                                        <span/>
                                    </div>

                                    <div className="filter__item-menu filter__item-menu--range">
                                        <DualRange
                                            step={yearStep}
                                            lineStyles={lineStyles}
                                            control1Styles={yearControl1Styles}
                                            setControl1Styles={setYearControl1Styles}
                                            control2Styles={yearControl2Styles}
                                            setControl2Styles={setYearControl2Styles}
                                            betweenLineStyles={yearLineStyles}
                                            setBetweenLineStyles={setYearLineStyles}
                                            typeRange={'year'}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button className="filter__btn">apply filter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ mainParams }) => ({
    mainParams
})

const mapDispatchToProps = dispatch => ({
    changeParams: (keyType, newValue) => dispatch(changeMainParams(keyType, newValue))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null
)(Filter)