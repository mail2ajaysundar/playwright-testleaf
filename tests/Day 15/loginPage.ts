import { chromium, Page } from "@playwright/test";

class LoginPage{

    page:Page

    constructor(page:Page){
        this.page=page  //initially no value is assigned        
    }

    async loadurl(url:string){
        await this.page.goto(url)
    }

    async enterCredentials(userName:string,pwd:string){
        await this.page.fill("#username",userName)
        await this.page.fill("#password",pwd)
    }

    async clickLogin(){
        await this.page.click(".decorativeSubmit")
    }

    async verifyTitle():Promise<string>{
        return await this.page.title()
    }


}

//independent function
async function doLogin(){
    const browser1=await chromium.launch
}