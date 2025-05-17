import test from "playwright/test";

test('Learn Frame with frame object',async({page})=>{
    
    await page.goto("https://leafground.com/frame.xhtml")

    //Frame Object
    const frame1 = page.frame({url:"https://leafground.com/default.xhtml"})
    await frame1?.locator("#Click").click();

})

test.only('Learn Nested Frame with Frame Object', async({page})=>{

await page.goto("https://leafground.com/frame.xhtml")
const innerFrame = page.frame({url:"https://leafground.com/page.xhtml"})

const childFrame = innerFrame?.childFrames();

console.log("The Total number of Child Frames are : " + childFrame?.length);

await childFrame?.at(0)?.locator("#Click").click()

await page.waitForTimeout(4000)

})