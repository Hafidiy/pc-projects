const isArrSame = (arr1, arr2) => {
    let tmpObj = {
        firstArr: [],
        lastArr: []
    }

    arr1.map(item => {
        let tmpBool
        arr2.map(item1 => {
            if(typeof item === 'object'){
                if(`/uploads/images/${item.name}` === item1){
                    tmpBool = true
                }
            } else {
                if(item === item1){
                    tmpBool = true
                }
            }
        })
        if (!tmpBool){
            tmpObj.firstArr.push(item)
        }
    })

    arr2.map(item => {
        let tmpBool
        arr1.map(item1 => {
            if (typeof item1 === 'object') {
                if(`/uploads/images/${item1.name}` === item){
                    tmpBool = true
                }
            } else {
                if(item1 === item){
                    tmpBool = true
                }
            }
        })
        if (!tmpBool){
            tmpObj.lastArr.push(item)
        }
    })

    if(!tmpObj.firstArr.length && !tmpObj.lastArr.length){
        return false
    }

    return tmpObj
}

const filterNotSame = (arr1, arr2) => {
    arr2.map(item => {
        if(arr1.findIndex(item1 => item1 === item) !== -1){
        arr1.splice(arr1.findIndex(item1 => item1 === item), 1)    
        }
    })
    return arr1
}

const checkTvSeriesSame = (arr1, arr2) => {
    let tmpBool

    if(arr1.length !== arr2.length){
        return true
    }

    arr1.map((season, seasonIndex) => {
        if(season.seasonTitle !== arr2[seasonIndex].seasonTitle){
            tmpBool = true
        }
        if(season.seasonInfo !== arr2[seasonIndex].seasonInfo){
            tmpBool = true
        }
        season.episodes.map((episode, episodeIndex) => {
            if(episode.episodeTitle !== arr2[seasonIndex].episodes[episodeIndex].episodeTitle){
                tmpBool = true
            }
            if(episode.airDate !== arr2[seasonIndex].episodes[episodeIndex].airDate){
                tmpBool = true
            }
            if(episode.src !== arr2[seasonIndex].episodes[episodeIndex].src){
                tmpBool = true
            }
        })
    })

    return tmpBool
}

module.exports = { isArrSame, filterNotSame, checkTvSeriesSame }