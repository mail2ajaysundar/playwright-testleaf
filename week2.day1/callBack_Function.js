function add(a,b,callSubFunc){
    console.log(a+b)
    callSubFunc(6,2) //call back function -call the sub() function
}

function sub(a,b){
    console.log(a-b)
}

add(7,9,sub)
// sub(6,2)