import test from "@playwright/test";
import { only } from "node:test"; 
test('Learn Basic Locators',async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")

//id=username
//locator()-> locate the element in the dom  
//fill()-> type the value inside the textbox
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
//click()-> click the button
    await page.locator(".decorativeSubmit").click()
//click based on the displayed text , provided it is a href. 
//we are using ` to avoid any issues with ' & ""
    await page.click(`text='CRM/SFA'`)

    const titleofpage = await page.title()
    console.log(titleofpage)
})

test('Handle Dropdown with Select tag',async({page})=>{

    await page.goto("https://www.leafground.com/select.xhtml;")

    //select value from dropdown - index
    //here its 2 because value starts from 0
    // await page.selectOption(".ui-selectonemenu",{index:2})

    await page.waitForTimeout(3000)
    await page.selectOption(".ui-selectonemenu",{label:"Puppeteer"})
})

test.only('Handle Dropdown without Select Tag',async({page})=>{

    await page.goto("https://www.leafground.com/select.xhtml;")

    await page.locator("[id='j_idt87:country_label']").click()

    await page.waitForTimeout(2000)

    await page.locator("[id='j_idt87:country_3']").click()

    await page.waitForTimeout(2000)
})

test('Playwright Locators',async({page})=>{

    await page.goto("http://facebook.com")

    await page.locator("#email").fill("ajuece19@gmail.com")

    await page.locator("#pass").fill("arkan")

    await page.getByRole("button",{name:'login'})

    // await page.getByLabel()
})