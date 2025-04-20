console.log(20+10)  // 30 addition
console.log(10-5)  // 10 subtraction
console.log(10*5)  // 50 multiplication
console.log(10/5)  // 2 division
console.log(10%5)  // 0 mod
console.log(10**2) // 100 exponentiation
console.log(5>2)  // true greater than
console.log(5!=2)  // true not equal to
console.log(5==2)  // false equal to
console.log(5===2)  // false equal to and type

//Control Statements

//Conditional Statements
//if statement - when the condition is true, the block of code inside the if statement will be executed.
if (5 > 2) {
    console.log("5 is greater than 2"); // 5 is greater than 2
}

//if-else statement - when the condition is true, the block of code inside the if statement will be executed, otherwise the block of code inside
// the else statement will be executed
if (5 < 2) {
    console.log("5 is less than 2"); // This will not be executed
}
else {
    console.log("5 is greater than 2"); // 5 is greater than 2
}
//if-else if-else statement - when the first condition is false, the second condition will be checked. If the second condition is also false, the block of code inside the else statement will be executed
if (5 < 2) {
    console.log("5 is less than 2"); // This will not be executed
}
else if (5 > 2) {
    console.log("5 is greater than 2"); // 5 is greater than 2
}
else {
    console.log("5 is equal to 2"); // This will not be executed
}   


//Switchcase statements'
//Switch case statement - when the value of the expression matches the value of one of the cases, the block of code inside that case will be executed
