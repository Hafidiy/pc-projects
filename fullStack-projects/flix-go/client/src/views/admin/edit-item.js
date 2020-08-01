import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import ProgressBar from '@ramonak/react-progress-bar'
import ReactLoading from 'react-loading'

import { Header } from '../../components/admin-header'
import { SideBar } from '../../components/admin-sidebar'
import MTContect from '../../components/admin-mtcontent/edit-index'
import InfoContent from '../../components/admin-infocontent/edit-index'

import { adminChangeItemOne, adminSetItemOne, adminSendItemOne, adminLoadItemOne } from '../../actions'

const EditItem = props => {
    const {
        isLoading,
        item,
        changeItemOne,
        sendItemOne,
        setItemOne,
        loadItemOne
    } = props

    const [isOpenHS, setIsOpenHS] = useState(false)

    const [isOpen, setIsOpen] = useState({})
    const [pinkIndex, setPinkIndex] = useState(0)

    const [percent, setPercent] = useState(0)

    const [genState, setGenState] = useState({
        title: '',
        description: '',
        releaseYear: '',
        runningTime: '',
        age: '',
        countries: null,
        genres: null,
        quality: 'Choose quality',
        category: 'movie',
        uploadPhotos: [],
        movie: ''
    })

    const [cover, setCover]  = useState('')

    const [imState, setImState] = useState([[null]])
    const [titleInfo, setTitleInfo] = useState([[]])
    const [episodes, setEpisodes] = useState([
        [{
            episodeTitle: '',
            airDate: '',
            src: ''
        }]
    ])

    const fetchDidMount = async () => {
        try {
            let promise = await fetch(`/api/admin/items/${props.location.state.id}`)
            let response = await promise.json()

            if(promise.status >= 400){
                throw new Error(promise.error)
            }

            if(!response.success){
                throw new Error(response.msg)
            }

            setItemOne({
                ...item,
                id: response.data._id,
                cover: response.data.cover,
                uploadPhotos: response.data.uploadPhotos,
                movie: response.data.category === 'movie'
                    ? response.data.movie.src
                    : response.data.movie.seasons
            })

            setGenState({
                ...genState,
                title: response.data.title,
                description: response.data.description,
                releaseYear: response.data.releaseYear,
                runningTime: response.data.runningTime,
                age: response.data.age,
                countries: response.data.countries.map(country => ({ label: country, value: country })),
                genres: response.data.genres.map(genre => ({ label: genre, value: genre })),
                quality: response.data.quality,
                category: response.data.category,
                uploadPhotos: response.data.uploadPhotos,
                movie: response.data.category === 'movie'
                    ? response.data.movie.src
                    : response.data.movie.seasons
            })

            setCover(response.data.cover)

            if (response.data.category === 'tvseries') {
                let tmpArr1 = []
                let tmpArr2 = []
                let tmpArr3 = []

                for (let i = 0; i < response.data.movie.seasons.length; i++) {
                    tmpArr1 = [...tmpArr1, [null]]
                    tmpArr2 = [...tmpArr2, []]
                    tmpArr3 = [...tmpArr3, [{
                        episodeTitle: '',
                        airDate: '',
                        src: ''
                    }]]
                }

                for (let i = 0; i < response.data.movie.seasons.length; i++) {
                    tmpArr2[i][0] = response.data.movie.seasons[i].seasonTitle
                    tmpArr2[i][1] = response.data.movie.seasons[i].seasonInfo
                    for (let j = 0; j < response.data.movie.seasons[i].episodes.length; j++) {
                        tmpArr3[i][j] = {...response.data.movie.seasons[i].episodes[j]}
                    }
                }

                for (let i = 0; i < response.data.movie.seasons.length; i++) {
                    for (let j = 0; j < response.data.movie.seasons[i].episodes.length - 1; j++) {
                        tmpArr1[i].push(null)
                    }
                }

                setEpisodes(tmpArr3)
                setTitleInfo(tmpArr2)
                setImState(tmpArr1)
            }
        } catch(err){
            alert('Error!')
            console.log('Error: ', err.toString())
        }
    }

    const handleUploadCover = event => {
        if(event.nativeEvent.target.files.length){
            let photo = event.nativeEvent.target.files[0]
            const reader = new FileReader()
            reader.readAsDataURL(photo)
            reader.addEventListener(
                'load',
                e => setCover(e.target.result)
            )
            changeItemOne('cover', photo)
        } else {
            setCover('')
            changeItemOne('cover', '')
        }
    }

    const handleUploadPhotos = (event) => {
        let tmpArr = []
        Object.values(event.nativeEvent.target.files).map(item => tmpArr.push(item))
        setGenState({...genState, uploadPhotos: tmpArr})
        changeItemOne('uploadPhotos', tmpArr)
    }

    const setStatesDefault = () => {
        setGenState({
            title: '',
            description: '',
            releaseYear: '',
            runningTime: '',
            age: '',
            countries: null,
            genres: null,
            category: 'movie',
            quality: 'Choose quality',
            uploadPhotos: [],
            movie: ''
        })
        setImState([[null]])
        setTitleInfo([[]])
        setEpisodes([[{
            episodeTitle: '',
            airDate: '',
            src: ''
        }]])
        setCover('')
    }

    const checkMovie = () => {
        if(props.item.category === 'movie'){
            if (!props.item.movie)
                return {
                    success: false,
                    msg: 'Select Movie'
                }
        } else {
            for (let i = 0; i < props.item.movie.length; i++){
                if(!props.item.movie[i].seasonTitle){
                    return {
                        success: false,
                        msg: 'Enter all Season Titles'
                    }
                }
            }

            for (let i = 0; i < props.item.movie.length; i++){
                if(!props.item.movie[i].seasonInfo){
                    return {
                        success: false,
                        msg: 'Enter all Season Informations'
                    }
                }
            }

            for (let i = 0; i < props.item.movie.length; i++) {
                for (let j = 0; j < props.item.movie[i].episodes.length; j++) {
                    if (!props.item.movie[i].episodes[j].episodeTitle){
                        return {
                            success: false,
                            msg: 'Select all episode Titles'
                        }
                    }
                }
            }

            for (let i = 0; i < props.item.movie.length; i++) {
                for (let j = 0; j < props.item.movie[i].episodes.length; j++) {
                    if (!props.item.movie[i].episodes[j].airDate){
                        return {
                            success: false,
                            msg: 'Select all Air Dates'
                        }
                    }
                }
            }

            for (let i = 0; i < props.item.movie.length; i++) {
                for (let j = 0; j < props.item.movie[i].episodes.length; j++) {
                    if (!props.item.movie[i].episodes[j].src){
                        return {
                            success: false,
                            msg: 'Select all episodes'
                        }
                    }
                }
            }
        }
        
        return {
            success: true
        }
    }

    const checkProperties = () => {
        const {
            cover, title, description, releaseYear, runningTime,
            quality, age, uploadPhotos, countries, genres
        } = props.item
        if (
            !(cover && title && description && releaseYear &&
            runningTime && (quality !== 'Choose quality') &&
            age && countries && genres && uploadPhotos.length && checkMovie().success)
        ) {
            if (!cover){
                alert('Select cover photo')
                return false
            }

            if (!title){
                alert('Enter title')
                return false
            }

            if (!description){
                alert('Enter description')
                return false
            }

            if (!releaseYear){
                alert('Enter release year')
                return false
            }

            if (!runningTime){
                alert('Enter running time')
                return false
            }

            if (quality === 'Choose quality'){
                alert('Select quality')
                return false
            }

            if (!age){
                alert('Enter age')
                return false
            }

            if(!genState.countries){
                alert('Select countries')
                return false
            }

            if(!genState.genres){
                alert('Select genres')
                return false
            }

            if(!uploadPhotos.length){
                alert('Select at least one photo')
                return false
            }

            if(!checkMovie().success){
                alert(checkMovie().msg)
                return false
            }
        }

        return true
    }

    const handleSubmit = async () => {
        const { countries, genres } = genState

        if (genState.category === 'tvseries'){
            let tmpArr = []
            for (let i = 0; i < episodes.length; i++){
                let tmp = {}
                tmp.seasonTitle = titleInfo[i][0]
                tmp.seasonInfo = titleInfo[i][1]
                tmp.episodes = [...episodes[i]]
                tmpArr.push(tmp)
            }
            changeItemOne('seasonsLength', tmpArr.map(el1 => el1.episodes.length))
            changeItemOne('movie', tmpArr)
        }

        changeItemOne('title', genState.title)
        changeItemOne('description', genState.description)
        changeItemOne('releaseYear', genState.releaseYear)
        changeItemOne('runningTime', genState.runningTime)
        changeItemOne('age', genState.age)
        changeItemOne('category', genState.category)
        changeItemOne('quality', genState.quality)

        if(checkProperties()){
            changeItemOne('genres', genres.map(item => (item.value)))
            changeItemOne('countries', countries.map(item => (item.value)))
            changeItemOne('photosLength', props.item.uploadPhotos.length)
            sendItemOne(item, 'edit', setPercent)
        }
    }

    useEffect(() => {
        fetchDidMount()
    }, [])

    return(
        percent
            ? (
                <div className='progressBar-cont'>
                    <div className='progressBar'>
                        <div className='progressBar-text'>
                            Item uploading...
                        </div>
                        <ProgressBar
                            completed={percent}
                            bgcolor="#ff577f"
                            height="25px"
                            width="90%"
                            borderRadius="5px"
                        />
                    </div>
                </div>
            )
            :   isLoading
                    ? (
                        <div className='loadingCont'>
                            <ReactLoading
                                type='spin'
                                color='#ff577f'
                                width='10%'
                                height='10'
                            />
                        </div>
                    )
                    : (
                        <>
                            <Header
                                isOpen={isOpenHS}
                                setIsOpen={() => setIsOpenHS(!isOpenHS)}
                            />
                            <SideBar isOpen={isOpenHS} />

                            {/* main content */}
                            <main className="main">
                                <div className="container-fluid">
                                    <div className="row">
                                        {/* main title */}
                                        <div className="col-12">
                                            <div className="main__title">
                                                <h2>Edit item</h2>
                                            </div>
                                        </div>
                                        {/* end main title */}

                                        {/* form */}
                                        <div className="col-12">
                                            <div className="form">
                                                <div className="row">
                                                    <InfoContent
                                                        cover={cover}
                                                        handleUploadCover={handleUploadCover}
                                                        handleUploadPhotos={handleUploadPhotos}
                                                        genState={genState}
                                                        setGenState={setGenState}
                                                        isOpen={isOpen}
                                                        setIsOpen={setIsOpen}
                                                        pinkIndex={pinkIndex}
                                                        setPinkIndex={setPinkIndex}
                                                    />

                                                    <div className="col-12">
                                                        <ul className="form__radio">
                                                            <li>
                                                                <span>Item type:</span>
                                                            </li>
                                                            <li>
                                                                <input
                                                                    id="type1"
                                                                    type="radio"
                                                                    checked={genState.category === 'movie'}
                                                                    onClick={() => setGenState({...genState, category: 'movie'})}
                                                                />
                                                                <label htmlFor='type1'>Movie</label>
                                                            </li>
                                                            <li>
                                                                <input
                                                                    id="type2"
                                                                    type="radio"
                                                                    checked={genState.category === 'tvseries'}
                                                                    onClick={() => setGenState({...genState, category: 'tvseries'})}
                                                                />
                                                                <label htmlFor='type2'>TV Series</label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    
                                                    <MTContect
                                                        genState={genState}
                                                        setGenState={setGenState}
                                                        imState={imState}
                                                        setImState={setImState}
                                                        titleInfo={titleInfo}
                                                        setTitleInfo={setTitleInfo}
                                                        episodes={episodes}
                                                        setEpisodes={setEpisodes}
                                                        submitText='Save'
                                                        handleSubmit={handleSubmit}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {/* end form */}
                                    </div>
                                </div>
                            </main>
                            {/* end main content */}
                        </>
                    )
    )
}

const mapStateToProps = ({ isLoading, adminItem }) => ({
    isLoading,
    item: adminItem
})

const mapDispatchToProps = dispatch => ({
    changeItemOne: (keyType, value) => dispatch(adminChangeItemOne(keyType, value)),
    sendItemOne: (item, cb1, cb2) => dispatch(adminSendItemOne(item, cb1, cb2)),
    setItemOne: (item) => dispatch(adminSetItemOne(item)),
    loadItemOne: (id, cb) => dispatch(adminLoadItemOne(id, cb))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null
)(EditItem)