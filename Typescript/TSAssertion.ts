//Typescript Assertion

//Typecasting - informing the ts compiler to infer the data as string, number etc 

let price
price='Ajay'

const inferedData = (price as string).includes('A')

console.log(inferedData)

const inferedData2= (<string>price)
console.log(inferedData2)