//type alias -> create custom type of data 

let value:string //--> sample string

//syntax -> type typeName:definition

type username=string
let emp:username='Ajay'

type browserName="Chrome"|"Edge"

function launchBrowser(browser:browserName){
    if (browser === 'Chrome'){
        console.log("Launch Chrome Browser")
    } else if(browser =='Edge'){
        console.log("Launch Edge Browser")
    }else{
        console.log("No Browser is launched")
    }
}

launchBrowser('Chrome')

//intersection
type Admin={
    username:string
    userid:number
}

type employee={
    name:string
    status?:boolean //? means optional
}

type db=Admin&employee

let value1:db={
username:'Ajay',
userid:232855,
name:'testmanager',
status:true
}

console.log(value1)
console.log(value1.userid)