class UnsplashService {
    #apiBase = 'https://api.unsplash.com/'
    // you should paste 
    // your access key from 
    // https://unsplash.com/
    #apiAccessKey = 'Qbuhja0iYL80Nb_9krmzGzv3O3M0q2byagAds1GeFDo'

    _generateURL = (path) => {
        return `${this.#apiBase + path}?client_id=${this.#apiAccessKey}`
    }

    _translatePhoto = (response) => {
        const { id, alt_description, urls, user, views, likes } = response

        return {
            id,
            description: alt_description,
            views,
            likes,
            image: urls?.regular ?? urls?.small,
            author: user?.name,
            isLiked: false,
        }
    }

    getRandomPhoto = async () => {
        const photo = await new Promise((resolve, reject) => {
            fetch(this._generateURL('/photos/random'))
                .then(result => result.json())
                .then(json => resolve(json))
        })
        // console.log(this._translatePhoto(photo))
        return this._translatePhoto(photo)
    }

    getPhotoByID = async (id) => {
        const photo = await new Promise((resolve, reject) => {
            fetch(this._generateURL(`/photos/${id}`))
                .then(result => result.json())
                .then(json => resolve(json))
        })
        // console.log(this._translatePhoto(photo))
        return this._translatePhoto(photo)
    }
}