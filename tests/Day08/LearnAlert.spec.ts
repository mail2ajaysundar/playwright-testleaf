import test from "playwright/test";

test('Auto Dismissing Alert', async({page})=>{
    
await page.goto("https://leafground.com/alert.xhtml")

//simple alert -> accept the button since that is the only button 
await page.locator("//span[text()='Show']").first().click()

await page.waitForTimeout(3000)

//confirmation alert - by default it will be dismissed. 
await page.locator("//span[text()='Show']").nth(1).click()
await page.waitForTimeout(3000)

})

test('Handling Alert with Event Listeners with page.once',async({page})=>{

    page.once('dialog',alertType => {
        const typeofAlert = alertType.type()
        console.log(typeofAlert)
        const msg = alertType.message()
        console.log(msg)
        alertType.accept()
    })
    await page.goto("https://leafground.com/alert.xhtml")
    
    //simple alert -> accept the button since that is the only button 
    await page.locator("//span[text()='Show']").first().click()


await page.locator("//span[text()='Show']").nth(1).click()

await page.waitForTimeout(5000)
})

test('Handling Alert with Event Listeners with page.on',async({page})=>{

    page.on('dialog',alertType => {
        const typeofAlert = alertType.type()
        console.log(typeofAlert)
        const msg = alertType.message() //print message from dialog box
        console.log(msg)
        if(typeofAlert=='confirm'){
        alertType.accept()
    }

        else{
            alertType.dismiss()
        }
    })
    await page.goto("https://leafground.com/alert.xhtml")
    
    //simple alert -> accept the button since that is the only button 
    await page.locator("//span[text()='Show']").first().click()


await page.locator("//span[text()='Show']").nth(1).click()

await page.waitForTimeout(5000)
})

test('Non Modal Alert - Sweet Alert', async({page})=>{
    
    await page.goto("https://leafground.com/alert.xhtml")

    await page.locator("//span[text()='Show']").nth(2).click()
    await page.locator(".ui-icon.ui-icon-closethick").first().click() // added "." infront of the class name - this is for css selector
})

test.only('Handling prompt Alert with Event Listeners with page.on',async({page})=>{

    page.on('dialog',alertType => {
        const typeofAlert = alertType.type()
        console.log(typeofAlert)
        const msg = alertType.message() //print message from dialog box
        console.log(msg)
        if(typeofAlert=='prompt'){
        alertType.accept('Ajay is awesome')
    }

        else{
            alertType.dismiss()
        }
    })
    await page.goto("https://leafground.com/alert.xhtml")
    
    //simple alert -> accept the button since that is the only button 
    await page.locator("//span[text()='Show']").first().click()


await page.locator("//span[text()='Show']").nth(4).click()

await page.waitForTimeout(5000)
})