import test from '@playwright/test'
import dotenv from 'dotenv'
dotenv.config({path:"data/qa.env"})


test(`Read the data from env file`,async({page})=>{
console.log(process.env.BaseUrl)
console.log(process.env.LF_Username)  
let url=process.env.BaseUrl as string //we are asserting that this data should be a string. it should not be given a undefined data
let username=process.env.LF_Username as string
let pwd=process.env.LF_Password as string
await page.goto(url)
await page.fill("#username",username)
await page.fill("#password",pwd)
await page.click(".decorativeSubmit")
})