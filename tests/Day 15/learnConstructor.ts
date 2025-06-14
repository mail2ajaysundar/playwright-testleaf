class EmployeeDetails{
    empName: string;
    empId: string

    printDetails(name: string, id: string){
        this.empName = name
        this.empId = id
        console.log(`Employee Details are ${this.empName} : ${this.empId}`)
    }
}

const empDet = new EmployeeDetails()
empDet.printDetails("Kavya", "830766")
empDet.printDetails("Ajay", "232855")

class Login{

    //page instance
    page:string
    constructor(){
        this.page="pg456842656366254"
    }

    loadUrl(){
        console.log("page is loaded with leaftaps url"+this.page)

    }
}