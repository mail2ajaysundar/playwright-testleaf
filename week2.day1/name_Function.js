function batch(empname){ // we need not declare the type of argument here - it automatically picks from the argument given when function is called
    console.log(`Name of the Employee ${empname}`)
}

batch("Ajay")
batch("Kavya")

function add(a,b){
    return a+b
}

console.log(add("Ajay ","Loves Kavya"))
console.log(add(16,23))