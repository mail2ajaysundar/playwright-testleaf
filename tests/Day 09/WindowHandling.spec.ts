import { test, expect } from "@playwright/test";

test('Handling window in amazon.in',async({context,page})=>{

    await page.goto("https://amazon.in/")

    await page.locator("#twotabsearchtextbox").fill("Mobiles")
    await page.locator("#twotabsearchtextbox").press('Enter');

    await page.waitForTimeout(3000)

    //create promise -> Event Listener 
    const newpromise = context.waitForEvent('page')
    page.locator("//span[contains(text(),'Samsung')]").first().click()

    //resolve the promise - open in new tab
    const childtab = await newpromise

    await page.waitForTimeout(3000)

    console.log(await childtab.title()) //get the title of child tab
    // const price = await childtab.locator(".a-price-whole").innerText()
    // console.log(price)

    await childtab.close()

    //coming back to parent window 
    await page.bringToFront()
    await page.locator("#twotabsearchtextbox").clear()

    await page.waitForTimeout(3000)


})

test('Multiple Window Handling',async({context,page})=>{

        await page.goto("https://leafground.com/window.xhtml")
        const [multipleWindow]=await Promise.all([ //this to handle all the multiple windows displayed
                context.waitForEvent('page'),
                page.getByText("Open Multiple",{exact:true}).click()
        ])
        await page.waitForTimeout(3000)
        const allpages = multipleWindow.context().pages() //returns all the multiple windows 
        const value=allpages.length
        console.log(value)
        await page.waitForTimeout(3000)

        let tab:any

        for(let i=0;i<value;i++){
            await page.waitForTimeout(5000)
            const title = await allpages[i].title()
            console.log(title)
            if(title==='Dashboard'){ //identifies the right window to do action
                tab=allpages[i]
                // await tab.locator("#email").fill("ajay@testleaf.com")
            }           
            
        }
        await tab.locator("#email").fill("ajay@testleaf.com")
            await page.waitForTimeout(5000)
        

})

test.only('Classroom Assignment',async({context,page})=>{

        await page.goto("https://leafground.com/window.xhtml")
        
         //create promise -> Event Listener 
        const newtab = context.waitForEvent('page')
        
        page.locator("//*[text()='Open']").click()

        //resolve the promise - open in new tab
    const childtab = await newtab

    await page.waitForTimeout(3000)

    console.log(await childtab.title()) //get the title of child tab

    await childtab.locator("#message").fill("This is test message")

    await page.waitForTimeout(3000)

})