class SchoolLibrary {
    #books = []

    get allBooks() {
        return this.#books
    }

    set allBooks(books) {
        if (new Set(books).size === books.length) {
            this.#books = books
        } else {
            throw new Error('The list must contain only unique values.')
        }
        
    }

    constructor(books) {
        // Init value via setter
        this.allBooks = books
    }

    addBook(title) {
        if (this.hasBook(title)) {
            this.#books = [
                ...this.#books,
                { title }
            ]
        } else {
            throw new Error(`Book: ${title} is already exist!`)
        }
    }

    removeBook(title) {
        if (!this.hasBook(title)) {
            this.#books = this.#books.filter((book) => book.title !== title)
        } else {
            throw new Error(`Book: ${title} is already exist!`)
        }
    }

    hasBook(title) {
        if (!this.#books.find((book) => book.title === title)) {
            return true
        }
        return false
    }
}

const slib = new SchoolLibrary([{ title: 'Once together' }, { title: 'Sleep well' }])
console.log(slib.allBooks)
slib.addBook('Sleep well 2')
console.log(slib.allBooks)
slib.removeBook('Sleep well 2')
slib.hasBook('Sleep well 2')
console.log(slib.allBooks)