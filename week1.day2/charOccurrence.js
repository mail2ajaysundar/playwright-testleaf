let browserName = "Chrome Browser"
let targetCharacter = "e"
let counter=0

let strLen = browserName.length

for(let i=0;i<strLen;i++){
    if(browserName.charAt(i)==targetCharacter){
        counter++
    }
}

console.log(`The occurrence of ${targetCharacter} is ${counter} `)