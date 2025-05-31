import test from "@playwright/test"
import { createResource,FetchResource } from "./apiUtility"

let lname:any

test('Using API Utility',async({request})=>{
    await createResource(request)
    lname = await FetchResource(request)
    console.log(lname)
})

test('UI test to verify the resource',async({page})=>{
    await page.goto("http://login.salesforce.com")
    await page.fill("#username","mail2ajaysundarqa-gmql@force.com")
    await page.fill("#password","Arkantos12#$")
    await page.click("#Login")
    await page.click(".slds-icon-waffle")
    await page.getByText("View All",{exact:true}).click()
    await page.getByPlaceholder("Search apps or items...").fill("Leads")
    await page.getByText("Leads",{exact:true}).click()
    const searele= page.getByPlaceholder("Search this list...")
    await searele.fill(lname)
    await searele.press('Enter')
    await page.waitForTimeout(3000)
})