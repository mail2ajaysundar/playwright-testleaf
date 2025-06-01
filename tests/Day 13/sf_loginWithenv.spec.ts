import test from '@playwright/test'
import dotenv from 'dotenv'
dotenv.config({path:"data/qa.env"})


test(`Read the data from SF env file`,async({page})=>{
console.log(process.env.baseUrl)
console.log(process.env.SF_username)  
let url=process.env.baseUrl as string
let username=process.env.SF_username as string
let pwd=process.env.SF_password as string
await page.goto(url)
await page.fill("#username",username)
await page.fill("#password",pwd)
await page.click("#Login")
})