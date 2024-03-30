const service = new LocalStorageService()
const select = document.getElementById('product-select')

// Init products list
const options = service.products.map(({ id, label }) => `<option value="${id}">${label}</option>`)
select.innerHTML = options.join('')

const submitButton = document.getElementById('publish-feedback-button')
const textArea = document.getElementById('feedback-area__text')

submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    feedbackLength = textArea.value.length
    
    if (feedbackLength < 50 || feedbackLength > 500) {
        throw new Error('Text must be contain more than 50 or less than 500 symbols.')
    } else {
        service.addFeedback(select.value, textArea.value)
        textArea.value = ''
    }
})