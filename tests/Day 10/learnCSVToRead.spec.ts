import test from '@playwright/test'
import fs from 'fs' //this is the library import of file system --> to work with external files
import { parse } from 'csv-parse/sync' //this is the library import of parse --> installed using npm install csv-parse

const loginData = parse(fs.readFileSync("data/login.csv"), {
    columns: true,
    skip_empty_lines: true
}) //this is where the data from the file is read 

console.log(loginData)

for (const data of loginData) {   

test(`Read data from CSV ${data.tcid}`,async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username",data.username)
    await page.fill("#password",data.password)
    await page.click(".decorativeSubmit")   
})
 
}