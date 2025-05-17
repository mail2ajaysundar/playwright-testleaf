import test from "playwright/test";

test('Learn Frame with Frame Locators',async({page})=> {

    await page.goto("https://leafground.com/frame.xhtml")
    await page.frameLocator("(//iframe)[1]").locator("#Click").click()

    await page.waitForTimeout(3000)

    //nested frame -> firstFrame().secondFrame().locator().click();

    await page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click").click()

     await page.waitForTimeout(3000)

     //We cannot handle child frame directly in frame locators but you can do in frameobject
    
})