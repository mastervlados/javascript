const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

var nextID = 5
var targetIndex = 0

reRenderPage(initialData[targetIndex])

function moveBack() {
    if (targetIndex - 1 >= 0) {
        targetIndex--
        reRenderPage(initialData[targetIndex])
    } else {
       // do nothing.. 
    }
}

function moveForward() {
    if (initialData.length > targetIndex + 1) {
        targetIndex++
        reRenderPage(initialData[targetIndex])
    } else {
        // do nothing..
    }
}

function reRenderPage(element) {
    const currentProduct = document.getElementsByClassName('product__name')
    const reviewsContainer = document.getElementById('reviews')

    currentProduct[0].textContent = element.product
    
    reviewsContainer.innerHTML = ''

    for (let entry of element.reviews) {
        reviewsContainer.innerHTML += `<p key="${entry.id}" class="review__text">${entry.text}</p>`
    }
}

const submitButton = document.getElementById('add_button')
const textArea = document.getElementById('text_area')

submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    const reviewLength = textArea.value.length
    const reviewContainer = document.getElementById('reviews')

    if (reviewLength < 50 || reviewLength > 500) {
        throw new Error('Text must be contain more than 50 or less than 500 symbols.')
    } else {
        initialData[targetIndex].reviews.push({ id: nextID, text: textArea.value })
        reviewContainer.innerHTML += `<p key="${nextID++}" class="review__text">${textArea.value}</p>`
        textArea.value = ''
    }
})