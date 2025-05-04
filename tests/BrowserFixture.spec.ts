import { chromium, test } from "@playwright/test"
test('Common code - Launch Browser',async ({page}) =>{      //adding page reduces the lines of code to launch the page

    page.goto("https://www.gmail.com")

    await page.waitForTimeout(5000)

    //print the title of the page
    console.log(await page.title())

})