import React from 'react'
import { connect } from 'react-redux'

import Truncate from 'react-truncate'
import Select from 'react-select'

import { adminChangeItemOne } from '../../actions'

import useWindowDimensions, {
    countries, genres, qualities, outsideCustomStyles
} from '../../views/admin/constants'

const countriesOptions = []
const genresOptions = []

for (let i = 0; i < countries.length; i++) {
    countriesOptions.push({
        value: countries[i],
        label: countries[i]
    })
}

for (let i = 0; i < genres.length; i++) {
    genresOptions.push({
        value: genres[i],
        label: genres[i]
    })
}

const InfoContent = props => {
    const {
        genState,
        setGenState,
        changeItemOne,
        cover,
        handleUploadCover,
        handleUploadPhotos
    } = props
    const { width } = useWindowDimensions()

    return(
        <>
            <div className="col-12 col-md-5 form__cover">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-12">
                        <div className="form__img">
                            <label htmlFor='form__img-upload'>
                                Upload cover (270 x 400)
                            </label>
                            <input
                                type="file"
                                id="form__img-upload"
                                name="form__img-upload"
                                accept=".png, .jpg, .jpeg"
                                onChange={handleUploadCover}
                                />
                            <img
                                alt="cover"
                                id="form__img"
                                src={cover}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-7 form__content">
                <div className="row">
                    <div className="col-12">
                        <input
                            value={genState.title}
                            placeholder="Title"
                            className="form__input"
                            onChange={e => setGenState({...genState, title: e.target.value})}
                        />
                    </div>

                    <div className="col-12">
                        <textarea
                            value={genState.description}
                            placeholder="Description"
                            className="form__textarea"
                            onChange={e => setGenState({...genState, description: e.target.value})}
                        ></textarea>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                        <input
                            value={genState.releaseYear}
                            className="form__input"
                            placeholder="Release year"
                            onChange={(e) => {
                                let impTmp = e.target.value
                                if(impTmp === ''){
                                    setGenState({...genState, releaseYear: impTmp})
                                } else {
                                    if (impTmp[impTmp.length - 1].charCodeAt() > 47
                                    && impTmp[impTmp.length - 1].charCodeAt() < 58){
                                        setGenState({...genState, releaseYear: impTmp})
                                    } else {
                                        alert('Value must be number')
                                    }
                                }
                            }}
                        />
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                        <input
                            value={genState.runningTime}
                            className="form__input"
                            placeholder="Running timed in minutes"
                            onChange={(e) => {
                                let impTmp = e.target.value
                                if(impTmp === ''){
                                    setGenState({...genState, runningTime: impTmp})
                                } else {
                                    if (impTmp[impTmp.length - 1].charCodeAt() > 47
                                    && impTmp[impTmp.length - 1].charCodeAt() < 58){
                                        setGenState({...genState, runningTime: impTmp})
                                    } else {
                                        alert('Value must be number')
                                    }
                                }
                            }}
                        />
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                        <div
                            className='tmp-select'
                            onClick={() => props.setIsOpen({qual: !props.isOpen.qual})}
                        >
                            <div>
                                <p style={{margin: 0, padding: 0}}>
                                    <Truncate
                                        lines={1}
                                        ellipsis={<span>...</span>}
                                    >
                                        {genState.quality}
                                    </Truncate>
                                </p>
                            </div>
                            <span
                                className={`${props.isOpen.qual ? 'arrow-top' : 'arrow-bottom'}`}
                            ></span>
                        </div>
                        {props.isOpen.qual && (
                            <ul
                                className={`tmp-select-dropdown ${
                                    width >= 992 ? 'tmp-select-dropdown-size-992-1366'
                                    : width > 878 ? 'tmp-select-dropdown-size-879-991'
                                    : width > 767 ? 'tmp-select-dropdown-size-768-878'
                                    : width > 676 ? 'tmp-select-dropdown-size-677-767'
                                    : width > 575 ? 'tmp-select-dropdown-size-576-676'
                                    : width > 487 ? 'tmp-select-dropdown-size-488-575'
                                    : width > 400 ? 'tmp-select-dropdown-size-401-487'
                                    : width > 317 ? 'tmp-select-dropdown-size-318-400'
                                    : width > 234 ? 'tmp-select-dropdown-size-235-317'
                                    : 'tmp-select-dropdown-size--234'
                                }`}
                            >
                                {qualities.map((item, index) => (
                                    <li key={index}>
                                        <p
                                            onMouseMove={() => props.setPinkIndex(index)}
                                            onClick={() => {
                                                setGenState({...genState, quality: item})
                                                props.setIsOpen({qual: false})
                                            }}
                                            style={index === props.pinkIndex ? {color: '#ff55a5'} : null}
                                        >
                                            {item}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                        <input
                            value={genState.age}
                            onChange={(e) => {
                                let impTmp = e.target.value
                                if(impTmp === ''){
                                    setGenState({...genState, age: impTmp})
                                } else {
                                    if (impTmp[impTmp.length - 1].charCodeAt() > 47
                                    && impTmp[impTmp.length - 1].charCodeAt() < 58){
                                        setGenState({...genState, age: impTmp})
                                    } else {
                                        alert('Value must be number')
                                    }
                                }
                            }}
                            placeholder="Age"
                            className="form__input"
                        />
                    </div>

                    <div className="col-12 col-lg-6">
                        <Select
                            value={genState.countries}
                            isMulti
                            options={countriesOptions}
                            styles={outsideCustomStyles}
                            onFocus={() => props.setIsOpen({qual: false})}
                            onChange={opt => setGenState({...genState, countries: opt})}
                            placeholder={'Choose country / countries'}
                        />
                    </div>

                    <div className="col-12 col-lg-6">
                        <Select
                            value={genState.genres}
                            isMulti
                            options={genresOptions}
                            styles={outsideCustomStyles}
                            onFocus={() => props.setIsOpen({qual: false})}
                            onChange={opt => setGenState({...genState, genres: opt})}
                            placeholder={'Choose genre / genres'}
                        />
                    </div>
 
                    <div className="col-12">
                        <div className="form__gallery">
                            <label htmlFor='form__gallery-upload'>
                                {
                                    !genState.uploadPhotos.length
                                        ? 'Upload photos'
                                        : genState.uploadPhotos.length === 1
                                            ? 'File selected'
                                            : `${genState.uploadPhotos.length} files selected`
                                }
                            </label>
                            <input
                                multiple
                                type="file"
                                id="form__gallery-upload"
                                accept=".png, .jpg, .jpeg"
                                onChange={handleUploadPhotos}
                                className="form__gallery-upload"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = ({ adminItem }) => ({
    item: adminItem
})

const mapDispatchToProps = dispatch => ({
    changeItemOne: (keyType, value) => dispatch(adminChangeItemOne(keyType, value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null
)(InfoContent)