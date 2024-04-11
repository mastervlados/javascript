class LocalStorageService {
    constructor() {
        this._initLocalStorage()
        // localStorage.clear()
    }

    _initLocalStorage() {
        const currentPhotos = JSON.parse(localStorage.getItem('storedPhotos'))

        if (!currentPhotos) {
            localStorage.setItem('storedPhotos', JSON.stringify([]))
        } 
    }

    loadStoredPhotoById = (id) => {
        return JSON.parse(localStorage.getItem(id))
    }

    loadStoredPhotos = () => {
        return JSON.parse(localStorage.getItem('storedPhotos'))
    }

    savePhotoToStorage(photo) {
        const { id, likes, isLiked } = photo
        localStorage.setItem(id, JSON.stringify({ likes, isLiked }))
    }

    addPhotoToStorage(photo) {
        const { id } = photo
        const existingPhotoIDs = this.loadStoredPhotos()
        // console.log('1 - ', existingPhotoIDs)
        const lengthBefore = existingPhotoIDs.length
        existingPhotoIDs.push(id)
        // console.log('2 - ', existingPhotoIDs)
        if (new Set(existingPhotoIDs).size === lengthBefore) {
            // means that we have already that id in our collection
            return false
        }
        localStorage.setItem('storedPhotos', JSON.stringify(existingPhotoIDs))
        return true
    }
}