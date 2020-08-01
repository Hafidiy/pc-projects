import axios from 'axios'

export const fetchFunc = async (url, method = 'GET', data = null) => {
    let opts = {
        headers: {'Content-Type': 'application/json'},
        method
    }

    if(data) {
        opts.body = JSON.stringify(data)
    }

    const promise = await fetch(`/api/${url}`, opts)
    const response = await promise.json()

    if(promise.status >= 400 || !response.success) {
        throw new Error(response.msg)
    }

    return response.data
}

export const specialFetchFunc = async (url, item, cb1) => {
    const formData = new FormData()
    formData.append('cover', item.cover)
    item.uploadPhotos.map((photo, index) => formData.append(`photo${index}`, photo))
    if (item.category === 'movie'){
        formData.append('movie', item.movie)
    } else {
        item.movie.map((season, index) => {
            season.episodes.map((episode, eIndex) => {
                formData.append(`episode${index}${eIndex}`, episode.src)
            })
        })
    }
    formData.append('dd', JSON.stringify(item))

    const options = {
        header: {
            'Accept': 'application.json',
            'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
            const { loaded, total } = progressEvent
            let percentt = (Math.floor((loaded * 100) / total))
            cb1(percentt)
            if(percentt > 99){
                cb1(0)
            }
            // console.log(`${loaded}b of ${total}b | ${percentt}%`)
        }
    }

    const response = await axios.post(`/api/${url}`, formData, options)

    if(!response.data.success){
        throw new Error(response.data.msg)
    }

    return response.data.data
}