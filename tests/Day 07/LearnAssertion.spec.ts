import test, {expect} from "playwright/test";

test('Learn Auto Retry Assertion', async({page}) => {

        await page.goto("https://leafground.com/input.xhtml")

        await expect(page.getByPlaceholder("Babu Manickam")).toBeEnabled()

        await expect(page.getByPlaceholder("Disabled")).toBeDisabled()
})

test('Soft Assert', async({page}) => {

    await page.goto("https://leafground.com/input.xhtml")

    await expect.soft(page.getByPlaceholder("Babu Manickam")).toBeDisabled()

    await expect.soft(page.getByPlaceholder("Disabled")).toBeDisabled()
})

test.only('Non Retry Assert',async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")

    const title = await page.title()
    console.log(title)
    const actual_title = 'Leaftaps - TestLeaf Automation Platform'
    expect(title).toEqual(actual_title)

    await page.fill("#username","demosalesmanager")

})