let username = "Ajay Sundar"
let reversename = ""

let strLen = username.length

for(let i=strLen; i>=0; i--){
    reversename = reversename+username.charAt(i)
}
console.log(`The reversed string is "${reversename}"`)