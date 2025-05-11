let empName:string
empName='ajay'

let empnamelist:string[]=['ajay','kavya','akshana','aksharan']

function add(a:number,b:number){
    return a+b
}

//union and intersection

//union type inference (OR Condition - pass multiple value)

let browser:string|null
browser='Chrome'
browser=null

let responseStatus:string|number
responseStatus='created'
responseStatus=201

//intersections (&)
let browserdata:string&number //this means browserdata can have only both number and string



