//input value="Learn Functions and String"
//output = String and Functions Learn"


//split() and use resever for loop
//print in reverse order

let inputstring = "Learn Functions and String"
let wordssplit = inputstring.split(" ")

let reversestring = "";

for(let i =wordssplit.length-1;i>=0;i--){
    reversestring+=(wordssplit[i] + " ")
}

console.log(reversestring)