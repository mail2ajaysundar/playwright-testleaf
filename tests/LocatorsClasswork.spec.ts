import test from "@playwright/test";
import { only } from "node:test"; 
test('Learn Basic Locators',async({page})=>{

    await page.goto("http://login.salesforce.com")

    await page.locator('//input[@id="username"]').fill("vidyar@testleaf.com")
    await page.locator('//input[@id="password"]').fill("Sales@123")
    
    await page.locator('//input[@id="Login"]').click()
    await page.waitForTimeout(3000)
    const titleofpage = await page.title()
    console.log(`The Title of the page is ${titleofpage}`)
})

test('Handle Dropdowns with Select tag',async({page})=>{

    await page.goto("https://www.leafground.com/select.xhtml;")

    await page.waitForTimeout(3000)
    await page.selectOption(".ui-selectonemenu",{label:"Puppeteer"})
})

test('Handle Dropdown without Select Tag',async({page})=>{

    await page.goto("https://www.leafground.com/select.xhtml;")

    await page.locator("[id='j_idt87:country_label']").click()

    await page.waitForTimeout(2000)

    await page.locator("[id='j_idt87:country_3']").click()

    await page.waitForTimeout(2000)
})
