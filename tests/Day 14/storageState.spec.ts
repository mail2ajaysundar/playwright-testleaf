import test, { TestInfo } from "@playwright/test";

test('Login Functionality', async ({ page }) => {
    console.log("Running before each test")
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username", "demoCSR")
    await page.fill("#password", "crmsfa")
    await page.click(".decorativeSubmit")
    await page.click('text=CRM/SFA')
    await page.context().storageState({path:"data/login_LT.json"})
})