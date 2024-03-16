class Employee {
    name = ''

    constructor(name) {
        this.name = name
    }

    displayinfo = () => {
        console.log(`Name: ${this.name}`)
    }
}