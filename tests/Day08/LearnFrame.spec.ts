import test from "playwright/test";

test('Handle Frame with Frame Locator', async({page})=>{

    await page.goto("https://leafground.com/frame.xhtml")

    const allFrame=page.frames()
    console.log(allFrame.length)
    
    const firstframe = allFrame[1]
    console.log(await firstframe.locator("#Click").innerText())

await firstframe.locator("#Click").click()

console.log(await firstframe.locator("#Click").innerText())

//nested frame 
const fourthframe = allFrame[4]
await fourthframe.locator("#Click").click()

})