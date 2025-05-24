import test from '@playwright/test'

test('Window Handling',async({page})=>{

    await page.goto("https://amazon.in/")

    const searchbox = page.locator("#twotabsearchtextbox")

    await searchbox.fill("Phones")
    await searchbox.press("Enter")
})