class Manager extends Employee {
    department = 'headoffice'

    constructor(name, department) {
        super(name)
        this.department = department
    }

    displayinfo = () => {
        console.log(`Name: ${super.name}\nDepartment: ${this.department}`)
    }
}