//pending
//fulfilled
//rejected 
//Promise is an interface 
function login(userName){

    console.log("Check the UserName ")
    return new Promise((resolve,reject) => {
        setTimeout(()=>{                            // This will add 5000 ms delay for the validation to happen 
            if(userName === "Ajay"){
                resolve("Valid username")                
            }else{
                reject("Invalid username")
            }
        },5000)
    
    })      
}

function ValidateUser(user,LoginInfo){
    
    LoginInfo(user).then((result) => { //similar to try catch 
        console.log(result)
    }).catch((err)=>{
        console.log(err)
    });
}

ValidateUser('Ajay',login)