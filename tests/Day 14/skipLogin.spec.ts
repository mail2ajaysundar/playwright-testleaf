import test, { TestInfo } from "@playwright/test";

test.use({storageState:'data/login_LT.json'})
test(`Launch from Homepage`,async({page})=>{
    await page.goto("http://leaftaps.com/crmsfa/control/main")
    console.log(await page.title())
})