import React from 'react'
import { connect } from 'react-redux'

import { adminChangeItemOne } from '../../actions'

const MTContect = props => {
    const {
        genState, setGenState,
        imState, setImState,
        titleInfo, setTitleInfo,
        episodes, setEpisodes,
        changeItemOne
    } = props
    
    const handleAddSeasonDiv = () => {
        setTitleInfo([...titleInfo, []])
        let tmp2 = [...episodes, [{
            episodeTitle: '',
            airDate: '',
            src: ''
        }]]
        setEpisodes(tmp2)
        setImState([...imState, [null]])
    }

    const handleRemoveSeasonDiv = index => {
        let tmp = [...imState]
        tmp.splice(index, 1)
        let tmp2 = [...titleInfo]
        tmp2.splice(index, 1)
        let tmp3 = [...episodes]
        tmp3.splice(index, 1)
        setImState(tmp)
        setTitleInfo(tmp2)
        setEpisodes(tmp3)
    }

    const handleAddEpisodeDiv = index => {
        let tmp = [...imState]
        tmp[index].push(null)
        let tmp2 = [...episodes]
        tmp2[index].push({
            episodeTitle: '',
            airDate: '',
            src: ''
        })
        setEpisodes(tmp2)
        setImState(tmp)
    }

    const handleRemoveEpisodeDiv = (index, index1) => {
        let tmp = [...imState]
        tmp[index].splice(index1, 1)
        let tmp2 = [...episodes]
        tmp2[index].splice(index1, 1)
        setEpisodes(tmp2)
        setImState(tmp)
    }

    const handleChangeTitleInfo = (e, index, jindex) => {
        let tmp = [...titleInfo]
        tmp[index][jindex] = e.target.value
        setTitleInfo(tmp)
    }

    const handleChangeEpisodeTitle = (e, index, jindex) => {
        let tmp = [...episodes]
        tmp[index][jindex].episodeTitle = e.target.value
        setEpisodes(tmp)
    }

    const handleChangeEpisodeAirDate = (e, index, jindex) => {
        let tmp = [...episodes]
        tmp[index][jindex].airDate = e.target.value
        setEpisodes(tmp)
    }

    const handleUploadEpisode = (event, index, index1) => {
        let tmp = [...episodes]
        tmp[index][index1].src = event.nativeEvent.target.files[0]
        setEpisodes(tmp)
    }

    const kereliFoo = tmpArr => {
        let tmpBool
        for (let i = 0; i < tmpArr.length; i++) {
            for (let j = 0; j < tmpArr[i].length; j++) {
                if (!tmpArr[i][j])
                    alert('borakan')
                    console.log(i, ' ', j)
                    tmpBool = true
                    break
            }
                if(tmpBool)
                    break
        }
    }

    return(
        <div className="col-12">
            <div className="row">
                {genState.category === 'movie' ? (
                    <div className="col-12">
                        <div
                            className={`collapse multi-collapse show`}
                        >
                            <div className="form__video">
                                <label htmlFor='form__video-upload'>
                                    {genState.movie ? 'File selected' : 'Upload video'}
                                </label>
                                <input
                                    type="file"
                                    id="form__video-upload"
                                    onChange={e => {
                                        setGenState({...genState, movie: e.nativeEvent.target.files[0]})
                                        changeItemOne('movie', e.nativeEvent.target.files[0])
                                    }}
                                    className="form__video-upload"
                                    accept="video/mp4,video/x-m4v,video/*"
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="col-12">
                        <div
                            className={`collapse multi-collapse show`}
                        >
                            {imState.slice(0, -1).map((item, index) => (
                                <div key={index} className="form__season">
                                    <div className="form__season-title">
                                        <div className="row">
                                            <div className="col-12">
                                                <span className="form__title">Season #{index + 1}</span>
                                                <button
                                                    type="button"
                                                    className="form__delete"
                                                    onClick={() => handleRemoveSeasonDiv(index)}
                                                >
                                                    <i className="icon ion-ios-close"></i>
                                                </button>
                                            </div>
                    
                                            <div className="col-12 col-sm-6 col-md-6 col-xl-6">
                                                <input
                                                    type="text"
                                                    className="form__input"
                                                    placeholder="Season title"
                                                    value={titleInfo[index][0]}
                                                    onChange={e => handleChangeTitleInfo(e, index, 0)}
                                                />
                                            </div>
                    
                                            <div className="col-12 col-sm-6 col-md-6 col-xl-6">
                                                <input
                                                    type="text"
                                                    className="form__input"
                                                    placeholder="Season info"
                                                    value={titleInfo[index][1]}
                                                    onChange={e => handleChangeTitleInfo(e, index, 1)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                    
                                    {/* episode */}
                                    {item.slice(0, -1).map((item1, index1) => (
                                        <div key={index1} className="form__episode">
                                            <div className="row">
                                                <div className="col-12">
                                                    <span className="form__title">Episode #{index1 + 1}</span>
                                                    <button
                                                        type="button"
                                                        className="form__delete"
                                                        onClick={() => handleRemoveEpisodeDiv(index, index1)}
                                                    >
                                                        <i className="icon ion-ios-close"></i>
                                                    </button>
                                                </div>

                                                <div className="col-12 col-md-6">
                                                    <input
                                                        type="text"
                                                        className="form__input"
                                                        placeholder={`Episode title ${index1 + 1}`}
                                                        value={episodes[index][index1].episodeTitle}
                                                        onChange={e => handleChangeEpisodeTitle(e, index, index1)}
                                                    />
                                                </div>

                                                <div className="col-12 col-md-6">
                                                    <input
                                                        type="text"
                                                        className="form__input"
                                                        placeholder="Air date"
                                                        value={episodes[index][index1].airDate}
                                                        onChange={e => handleChangeEpisodeAirDate(e, index, index1)}
                                                    />
                                                </div>

                                                <div className="col-12">
                                                    <div className="form__video">
                                                        <label htmlFor={`form__video-upload${index}${index1}`}>
                                                            {
                                                                episodes[index][index1].src
                                                                ? 'File Selected' : `Upload episode ${index1 + 1}`
                                                            }
                                                        </label>
                                                        <input
                                                            type="file"
                                                            id={`form__video-upload${index}${index1}`}
                                                            className="form__video-upload"
                                                            accept="video/mp4,video/x-m4v,video/*"
                                                            onChange={e => handleUploadEpisode(e, index, index1)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {/* end episode */}
                    
                                    {/* episode */}
                                    <div className="form__episode">
                                        <div className="row">
                                            <div className="col-12">
                                                <span className="form__title">Episode #{imState[index].length}</span>
                                            </div>
                    
                                            <div className="col-12 col-md-6">
                                                <input
                                                    type="text"
                                                    className="form__input"
                                                    placeholder={`Episode title ${imState[index].length}`}
                                                    value={episodes[index][episodes[index].length - 1].episodeTitle}
                                                    onChange={e => handleChangeEpisodeTitle(e, index, episodes[index].length - 1)}
                                                />
                                            </div>
                    
                                            <div className="col-12 col-md-6">
                                                <input
                                                    type="text"
                                                    className="form__input"
                                                    placeholder="Air date"
                                                    value={episodes[index][episodes[index].length - 1].airDate}
                                                    onChange={e => handleChangeEpisodeAirDate(e, index, episodes[index].length - 1)}
                                                />
                                            </div>
                    
                                            <div className="col-12 col-sm-8 col-md-9 col-xl-10">
                                                <div className="form__video">
                                                    <label htmlFor={`form__video-upload${index}${item.length - 1}`}>
                                                        {
                                                            episodes[index][item.length - 1].src
                                                            ? 'File Selected' : `Upload episode ${episodes[index].length}`
                                                        }
                                                    </label>
                                                    <input
                                                        type="file"
                                                        id={`form__video-upload${index}${item.length - 1}`}
                                                        className="form__video-upload"
                                                        accept="video/mp4,video/x-m4v,video/*"
                                                        onChange={e => handleUploadEpisode(e, index, item.length - 1)}
                                                    />
                                                </div>
                                            </div>
                    
                                            <div className="col-12 col-sm-4 col-md-3 col-xl-2">
                                                <button
                                                    className="form__btn form__btn--add"
                                                    onClick={() => handleAddEpisodeDiv(index)}
                                                >
                                                    add episode
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end episode */}
                                </div>
                            ))}
                        
                            {/* season */}
                            <div className="form__season">
                                <div className="form__season-title">
                                    <div className="row">
                                        <div className="col-12">
                                            <span className="form__title">Season #{imState.length}</span>
                                        </div>

                                        <div className="col-12 col-sm-6 col-md-5 col-xl-6">
                                            <input
                                                type="text"
                                                className="form__input"
                                                placeholder="Season title"
                                                value={titleInfo[imState.length - 1][0]}
                                                onChange={e => handleChangeTitleInfo(e, imState.length - 1, 0)}
                                            />
                                        </div>

                                        <div className="col-12 col-sm-6 col-md-4 col-xl-4">
                                            <input
                                                type="text"
                                                className="form__input"
                                                placeholder="Season info"
                                                value={titleInfo[imState.length - 1][1]}
                                                onChange={e => handleChangeTitleInfo(e, imState.length - 1, 1)}
                                            />
                                        </div>

                                        <div className="col-12 col-sm-4 col-md-3 col-xl-2">
                                            <button
                                                onClick={handleAddSeasonDiv}
                                                className="form__btn form__btn--add"
                                            >
                                                add season
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* episode */}
                                {imState[imState.length - 1].slice(0, -1).map((item, index) => (
                                    <div key={index} className="form__episode">
                                        <div className="row">
                                            <div className="col-12">
                                                <span className="form__title">Episode #{index + 1}</span>
                                                <button
                                                    type="button"
                                                    className="form__delete"
                                                    onClick={() => handleRemoveEpisodeDiv(imState.length - 1, index)}
                                                >
                                                    <i className="icon ion-ios-close"></i>
                                                </button>
                                            </div>

                                            <div className="col-12 col-md-6">
                                                <input
                                                    type="text"
                                                    className="form__input"
                                                    placeholder={`Episode title ${index + 1}`}
                                                    value={episodes[episodes.length - 1][index].episodeTitle}
                                                    onChange={e => handleChangeEpisodeTitle(e, episodes.length - 1, index)}
                                                />
                                            </div>

                                            <div className="col-12 col-md-6">
                                                <input
                                                    type="text"
                                                    className="form__input"
                                                    placeholder="Air date"
                                                    value={episodes[episodes.length - 1][index].airDate}
                                                    onChange={e => handleChangeEpisodeAirDate(e, episodes.length - 1, index)}
                                                />
                                            </div>

                                            <div className="col-12">
                                                <div className="form__video">
                                                    <label htmlFor={`form__video-upload${imState.length - 1}${index}`}>
                                                        {
                                                            episodes[episodes.length - 1][index].src
                                                            ? 'File Selected' : `Upload episode ${index + 1}`
                                                        }
                                                    </label>
                                                    <input
                                                        type="file"
                                                        id={`form__video-upload${imState.length - 1}${index}`}
                                                        className="form__video-upload"
                                                        accept="video/mp4,video/x-m4v,video/*"
                                                        onChange={e => handleUploadEpisode(e, episodes.length - 1, index)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* end episode */}

                                {/* episode */}
                                <div className="form__episode">
                                    <div className="row">
                                        <div className="col-12">
                                            <span className="form__title">Episode #{imState[imState.length - 1].length}</span>
                                        </div>

                                        <div className="col-12 col-md-6">
                                            <input
                                                type="text"
                                                className="form__input"
                                                placeholder={`Episode title ${imState[imState.length - 1].length}`}
                                                value={episodes[episodes.length - 1][episodes[episodes.length - 1].length - 1].episodeTitle}
                                                onChange={e => handleChangeEpisodeTitle(e, episodes.length - 1, episodes[episodes.length - 1].length - 1)}
                                            />
                                        </div>

                                        <div className="col-12 col-md-6">
                                            <input
                                                type="text"
                                                className="form__input"
                                                placeholder="Air date"
                                                value={episodes[episodes.length - 1][episodes[episodes.length - 1].length - 1].airDate}
                                                onChange={e => handleChangeEpisodeAirDate(e, episodes.length - 1, episodes[episodes.length - 1].length - 1)}
                                            />
                                        </div>

                                        <div className="col-12 col-sm-8 col-md-9 col-xl-10">
                                            <div className="form__video">
                                                <label htmlFor={`form__video-upload${imState.length - 1}${imState[imState.length - 1].length - 1}`}>
                                                    {
                                                        episodes[episodes.length - 1][episodes[episodes.length - 1].length - 1].src
                                                        ? 'File Selected' : `Upload episode ${imState[imState.length - 1].length}`
                                                    }
                                                </label>
                                                <input
                                                    type="file"
                                                    id={`form__video-upload${imState.length - 1}${imState[imState.length - 1].length - 1}`}
                                                    className="form__video-upload"
                                                    accept="video/mp4,video/x-m4v,video/*"
                                                    onChange={e => handleUploadEpisode(e, episodes.length - 1, episodes[episodes.length - 1].length - 1)}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-12 col-sm-4 col-md-3 col-xl-2">
                                            <button
                                                className="form__btn form__btn--add"
                                                onClick={() => handleAddEpisodeDiv(imState.length - 1)}
                                            >
                                                add episode
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* end episode */}
                            </div>
                            {/* end season */}
                        </div>
                    </div>
                )}

                <div className="col-12">
                    <button
                        type="button"
                        className="form__btn"
                        onClick={() => props.handleSubmit()}
                    >
                        {props.submitText}
                    </button>
                </div>
            </div>
        </div>
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
)(MTContect)