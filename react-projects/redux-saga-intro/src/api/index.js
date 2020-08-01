const KEY = 
    '?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02'
const URL = 'https://api.unsplash.com/photos'

const fetchImages = async page => {
    const promise = await fetch(`${URL}${KEY}&per_page=3&page=${page}`)
    const response = await promise.json()

    if(promise.status >= 400){
        throw new Error(response.errors)
    }

    return response
}

const fetchImagesStats = async id => {
    const promise = await fetch(`${URL}/${id}/statistics${KEY}`)
    const response = await promise.json()

    if(promise.status >= 400){
        throw new Error(response.errors)
    }

    return response
}

export { fetchImages, fetchImagesStats }