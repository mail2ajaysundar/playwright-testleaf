//Automate interactions with frames, trigger alerts, and verify the displayed text based on actions using Playwright on the given application
import { test, expect } from "@playwright/test";

test('ClassRoom Assignment with Alerts',async({page})=>{

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
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")

    await page.frameLocator("//*[@name='iframeResult']").locator("//button[text()='Try it']").click()

    await page.waitForTimeout(3000)

    const innertext = await page.frameLocator("//*[@name='iframeResult']").locator("//*[@id='demo']").innerText()
    expect(innertext).toEqual("You pressed OK!")
    

    //  await page.waitForTimeout(5000)

})