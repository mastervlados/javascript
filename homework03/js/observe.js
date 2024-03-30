const service = new LocalStorageService()

const items = service.getStoredFeedbackList()

const container = document.getElementById('feedback-list')

const elements = items.map((item, index) => {
    const { id, label, articles } = item

    const generatedList = articles.map(({ feedbackID, user, text, date }) => {
        const deleteFunction = service.deleteFeedbackByProductKeyAndFeedbackID
        return `
            <article class="feedback__container">
                <p class="feedback__details"><span>${user}</span> | ${date}</p>
                <p class="feedback__text">${text}</p>
                <button class="delete-feedback" onclick="service.deleteFeedbackByProductKeyAndFeedbackID(${id}, ${feedbackID})">X</button>
            </article>
        `.trim()
    })

    return `
        <details class="product" ${ index === 0 ? 'open' : '' }>
            <summary class="product__name">${label}</summary>
            ${generatedList.join('')}
        </details> 
    `.trim()
})

container.innerHTML = elements.length > 0 ? elements.join('') : '...'