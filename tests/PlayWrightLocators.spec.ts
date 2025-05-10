import test from "@playwright/test"

test.only('Playwright Locators',async({page})=>{
    await page.goto("https://parabank.parasoft.com/parabank/index.htm")

    //getByText

    await page.getByText("Admin Page").click()

    await page.waitForTimeout(3000)

    //getByRole

    await page.getByRole('link',{name:'Forgot login info?'}).click()

    await page.waitForTimeout(3000)
  

    //getbyAltText 
    await page.getByAltText("ParaBank").click()
    await page.waitForTimeout(3000)
    const url1 = await page.url()
    console.log(url1)
    await page.waitForTimeout(3000)

    //getbyText 

    await page.getByText("Locations").nth(0).click()
    await page.waitForTimeout(3000)

    //clicking on locator which is returning multiple matches => will return error
    // await page.getByText("Search").click()
    //solution VVVVV
    await page.getByPlaceholder("Search").click()
    await page.waitForTimeout(3000)
    
})

test('Get by Label',async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")


    //getByLabel
    await page.getByLabel("Username").fill("DemoSalesManager")

    await page.waitForTimeout(3000)

})

