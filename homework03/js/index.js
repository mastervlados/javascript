const apiService = new UnsplashService()
const storageService = new LocalStorageService()
const feed = document.getElementById('feed')

const load = async () => {
    let isCorrect = false

    while (!isCorrect) {
        const randomPhoto = await apiService.getRandomPhoto()
        if (storageService.addPhotoToStorage(randomPhoto)) {
            storageService.savePhotoToStorage(randomPhoto)
            isCorrect = true
        }
    }  
}

const render = async () => {
    await load();
    const storedPhotos = storageService.loadStoredPhotos()

    for (let photoID of storedPhotos) {
        const storedData = storageService.loadStoredPhotoById(photoID)
        const apiData = await apiService.getPhotoByID(photoID)
        const currentFeed = feed.innerHTML

        feed.innerHTML = `
            <article id="${apiData.id}" class="photo">
                <div class="photo__image-container">
                    <img class="photo__image" src="${apiData.image}" alt="">
                </div>
                <footer class="photo__details">
                    <p class="photo__author">${apiData.author}</p>
                    <p class="photo__description">${apiData.description}</p>
                    <div class="photo__counters">
                        <div class="photo__counter photo__views">
                            <i class="bi bi-eye"></i>
                            <span class="photo__total-views">${apiData.views}</span>
                        </div>
                        <div class="photo__counter photo__likes">
                            <button class="photo__like-button"><i class="bi ${storedData.isLiked ? 'bi-heart-fill' : 'bi-heart'}"></i></button>
                            <span class="photo__total-likes">${storedData.likes}</span>
                        </div>
                    </div>
                </footer>
            </article>`.trim() + currentFeed
    } 
}

render().then(() => {
    const likeButtons = document.querySelectorAll('.photo__like-button')

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const article = button.closest('.photo')
            const triggerPhotoId = article.id
            const storedData = storageService.loadStoredPhotoById(triggerPhotoId)
            const { likes, isLiked } = storedData
            if (!isLiked) {
                button.getElementsByTagName('I')[0].className = 'bi bi-heart-fill'
            } 
            storageService.savePhotoToStorage({ id: triggerPhotoId, likes: likes + 1, isLiked: true })
            article.querySelector('.photo__total-likes').textContent = likes + 1
        })
    })
})
