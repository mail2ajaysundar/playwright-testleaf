class Browser{

    //property
    browserInfo:string="Chrome"
    browserversion:number=131.45

    //action - user defined method
    launchBrowser(){
        console.log("Launching Chrome")
    }
}

//create a object outside the class --> new keyword --> to initialize the object --> assign a default value to it
let browser1 = new Browser()
browser1.launchBrowser() //calling the method
console.log(browser1.browserInfo) //accessing the property
console.log(browser1.browserversion) //accessing the property