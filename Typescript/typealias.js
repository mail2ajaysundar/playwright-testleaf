//type alias -> create custom type of data 
var value; //--> sample string
var emp = 'Ajay';
function launchBrowser(browser) {
    if (browser === 'Chrome') {
        console.log("Launch Chrome Browser");
    }
    else if (browser == 'Edge') {
        console.log("Launch Edge Browser");
    }
    else {
        console.log("No Browser is launched");
    }
}
launchBrowser('Chrome');
var value1 = {
    username: 'Ajay',
    userid: 232855,
    name: 'testmanager',
    status: true
};
console.log(value1);
console.log(value1.userid);
