var Browser = /** @class */ (function () {
    function Browser() {
        //property
        this.browserInfo = "Chrome";
        this.browserversion = 131.45;
    }
    //action - user defined method
    Browser.prototype.launchBrowser = function () {
        console.log("Launching Chrome");
    };
    return Browser;
}());
//create a object outside the class --> new keyword --> to initialize the object --> assign a default value to it
var browser1 = new Browser();
browser1.launchBrowser(); //calling the method
console.log(browser1.browserInfo); //accessing the property
console.log(browser1.browserversion); //accessing the property
