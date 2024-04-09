const slider = document.getElementById('slider')
const slidesLength = slides.length
let currentSlideIndex = 0

function render() {

    let dots = ''
    for (let i = 0; i < slidesLength; i++) {
        if (i === currentSlideIndex) {
            dots += `<li id="${i}" class="slider__dot slider__dot_active"><i class="bi bi-dot"></i></li>`
        } else {
            dots += `<li id="${i}" class="slider__dot"><i class="bi bi-dot"></i></li>`
        }
    }

    slider.innerHTML = `
        <img class="slider__image" src="./img/${slides[currentSlideIndex].image}" alt="">
        <button id="previous-slide-button" class="slider__button"><i class="bi bi-arrow-left-circle-fill"></i></button>
        <button id="next-slide-button" class="slider__button"><i class="bi bi-arrow-right-circle-fill"></i></button>
        <footer class="slider__content">
            <h3 class="slider__slide-title">${slides[currentSlideIndex].title}</h3>
            <nav class="slider__dots">
                ${dots}
            </nav>
        </footer>`.trim()
}

render()

const previousButton = document.getElementById('previous-slide-button')

previousButton.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()
    let slideIndex = currentSlideIndex

    if (--slideIndex < 0) {
        slideIndex = slidesLength - 1
    }
    changeSlide(slideIndex)
})

const nextButton = document.getElementById('next-slide-button')

nextButton.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()
    let slideIndex = currentSlideIndex

    if (++slideIndex >= slidesLength) {
        slideIndex = 0
    }
    changeSlide(slideIndex)
})

const sliderImage = slider.querySelector('.slider__image')
const sliderTitle = slider.querySelector('.slider__slide-title')

function changeSlide(slideIndex) {
    if (currentSlideIndex === slideIndex) { return }

    const navPanel = slider.querySelector('.slider__dots').children
    
    navPanel[currentSlideIndex].className = 'slider__dot' 
    navPanel[slideIndex].className = 'slider__dot slider__dot_active'

    sliderImage.setAttribute('src', `./img/${slides[slideIndex].image}`)

    sliderTitle.textContent = slides[slideIndex].title

    currentSlideIndex = slideIndex
}

const sliderDots = slider.querySelector('.slider__dots')

sliderDots.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()

    if (event.target.tagName === 'I') {
        const triggerMarker = event.target.closest('.slider__dot').id
        if (triggerMarker !== currentSlideIndex) {
            changeSlide(triggerMarker)
        }
    }
})
