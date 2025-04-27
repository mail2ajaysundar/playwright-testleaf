const { resolve } = require("path")

function login(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(username === "Ajay"){
                resolve("Valid Username")
            } else {
                reject("Invalid Username")
            }
        },5000)
    })
    
}

async function validateUser(user,login) {
    const message = await login(user)
    console.log(message)    
}

validateUser("Ajay",login)