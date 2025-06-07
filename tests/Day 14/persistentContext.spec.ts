import test, { chromium } from "@playwright/test";


test(`Playwright Default Browser Launch`,async({})=>{

    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("http://google.co.in")
    await page.waitForTimeout(3000)

})

test.only(`Playwright with normal Browsermode`,async()=>{

    const context=await chromium.launchPersistentContext('./userdatadir')
    const page = await context.newPage()
    await page.goto("https://google.co.in")
    await page.waitForTimeout(3000)    

})