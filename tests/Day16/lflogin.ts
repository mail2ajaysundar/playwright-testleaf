import {chromium,Page} from "@playwright/test"

export class LFLoginFunctionality{

    pageInstance:Page
    
    constructor(){

    }

    async launchBrowser(){
        const browser=await chromium.launch({headless:false})
        const context = await browser.newContext()
        const page = await context.newPage()
        this.pageInstance = page
    }
    
    async clickLogin(){

        await this.pageInstance.close()
    }

    async login() {
        

    }
}

