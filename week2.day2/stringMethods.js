let value = "TestLeaf"
           //01234567

let subvalue = value.substring(2,7) //ending index will have n-1
console.log(subvalue)

//slice() -> same as substring but it will accept negative values as well 
let myName = "Ajay"
                        //(n,n-1)
let nameSlice=myName.slice(1,3)
console.log(nameSlice + " ==> Sliced name ")

let data="playwright"
                          //(n-1,n)
let negsubvalue = data.slice(-8,-2)
console.log(negsubvalue + " => Negative value slice")

//replace - old value to new value
let stringdata="Welcome to TestLeaf PW Batch 2025"
let replacedvalue = stringdata.replace("Welcome","Vanakkam")
console.log("The replaced value is : " + replacedvalue)

//replaceall
let value1="testleaf@gmail.com"
console.log(value1.replaceAll(/[a-z]/g,"a"))  // /g represents global 

//includes --> checks if the search string is present in target string ==> similar to contains in java
let tool ="playwright"
console.log(tool.includes("play"))

//concat 
let area = "Chennai"
console.log(area.concat(" Sithalapakkam"))

//repeat 
console.log(area.repeat(2))