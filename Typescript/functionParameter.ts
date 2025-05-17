function empdetails(name:string,id:number,mailid='ajaysundar@ak.com',status?:boolean){

    //mailid -> default parameter - it is declared in parameter itself
    //status --> optional parameter

    return `The employee details are ${name}: ${id} : ${mailid} : ${status}`

}

console.log(empdetails('ajay',16, 'ajaysundar@tcs.com',true)) //default value can be overridden 

