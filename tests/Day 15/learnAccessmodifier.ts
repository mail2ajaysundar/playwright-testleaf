export class EmployeeSignup{
    eName: string
    eid: string
    ephoneno: number
    eSalary: number

    constructor(){
        this.eName="Ajay"
        this.eid="eid23"
        this.ephoneno=7896543210
        this.eSalary=4000000
    }

    printDetails(){
        console.log(`The emp details ${this.eName}:${this.eid}:${this.ephoneno}:${this.eSalary}`)
    }

}

