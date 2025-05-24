import test from '@playwright/test'
import cred from '../../data/credentials.json' // cred - is the variable which holds the array of data from credentials.json
import fs from "fs"

console.log(cred)

for (const data of cred) {   

test(`Read data from CSV ${data.tcid}`,async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username",data.Username)
    await page.fill("#password",data.Password)
    await page.click(".decorativeSubmit")   
})
 
}

//parse 
const loginInfo = JSON.parse(fs.readFileSync("data/credentials.json", "utf-8"))