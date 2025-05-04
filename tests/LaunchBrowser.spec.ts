import { chromium, test } from "@playwright/test";
test("To launch a browser", async () => {
    //Launch the Browser and specifically tell to execute only in chrome 
const browserInstance = await chromium.launch({ headless: false, channel:"chrome" });
//Open window or Context 
const browserContext = await browserInstance.newContext();
//open the tab or page 
const page = await browserContext.newPage();
//load the url 
await page.goto("http://leaftaps.com/opentaps/control/main");

await page.waitForTimeout(5000)

//npx playwright test LaunchBrowser.spec.ts

const context1 = await browserInstance.newContext()

const page1 = await context1.newPage()

await page1.goto("https://platform.testleaf.com/")

await page1.waitForTimeout(5000)


});