class LocalStorageService {
    #products = [
        { id: 1, label: 'Apple iPhone 13' },
        { id: 2, label: 'Samsung Galaxy Z Fold 3' },
        { id: 3, label: 'Sony PlayStation 5' },
    ]

    get products() {
        return this.#products
    }

    set products(products) {
        this.#products = products
    }

    _getRandomUserName = () => {
        const names = [
            'Reggie Taylor',
            'Elijah Warner',
            'Kaiden Owen',
            'Dylan Banks',
            'Omar Short',
            'Dale Stevenson',
            'Lewis Burgess',
            'William Kent',
            'Kiaan Akhtar',
            'Abdullah Dyer',
            'Ember Coleman',
            'Cara Hughes',
            'Paige Chapman',
            'Chloe Thomson',
            'Ayat Andrews',
            'Anastasia Fletcher',
            'Lena MacDonald',
            'Annabel Cartwright',
            'Maeva Hudson',
            'Gabriella Cross',
        ]
        const randomIndex = Math.floor(Math.random() * (names.length - 1))
        return names[randomIndex]
    }

    addFeedback(productID, text) {
        const feedbackDetails = {
            user: this._getRandomUserName(),
            text,
            date: new Date()
        }
        const key = `product-${productID}`
        const productDetails = JSON.parse(localStorage.getItem(key))

        if (!productDetails) {
            // is Empty
            localStorage.setItem(key, JSON.stringify({ nextIndex: 1 }))
            localStorage.setItem(`${key}-0`, JSON.stringify({...feedbackDetails, feedbackID: 0 }))
        } else {
            // Exists
            const { nextIndex } = productDetails
            // Save feedback
            localStorage.setItem(`${key}-${nextIndex}`, JSON.stringify({...feedbackDetails, feedbackID: nextIndex }))
            // Incremenent value
            localStorage.setItem(key, JSON.stringify({ nextIndex: nextIndex + 1 }))
        }
        
    }

    getStoredFeedbackList() {
        const feedback = this.#products.map(({ id, label }) => {
            const storedData = JSON.parse(localStorage.getItem(`product-${id}`))
            if (storedData) {
                const { nextIndex: feedbackLength } = storedData
                const articles = []

                for (let i = 0; i < feedbackLength; i++) {
                    const element = JSON.parse(localStorage.getItem(`product-${id}-${i}`))
                    if (element) {
                        // If we delete an element
                        // It'll keep current sequences
                        // of indexes (skip deleted)
                        articles.push(element)
                    }
                }

                return {
                    id,
                    label,
                    articles,
                }
            }
            // skip those product
            // it hasn't any feedback
            return
        })
        return feedback.filter((fb) => fb)
    }

    deleteFeedbackByProductKeyAndFeedbackID(productID, feedbackID) {
        localStorage.removeItem(`product-${productID}-${feedbackID}`)
    }
}