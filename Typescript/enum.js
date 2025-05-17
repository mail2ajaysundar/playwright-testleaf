//numeric enum
var teststatus;
(function (teststatus) {
    teststatus[teststatus["pass"] = 0] = "pass";
    teststatus[teststatus["fail"] = 5] = "fail";
    teststatus[teststatus["absent"] = 6] = "absent";
    teststatus[teststatus["timeout"] = -1] = "timeout";
    teststatus[teststatus["status"] = 0] = "status";
})(teststatus || (teststatus = {}));
console.log(teststatus.absent);
//string enum 
var browsername;
(function (browsername) {
    browsername["browser1"] = "Chrome";
    browsername["browser2"] = "Edge";
    browsername["browser3"] = "Webkit";
    browsername["browser4"] = "Firefox";
})(browsername || (browsername = {}));
console.log(browsername.browser2);
//hetergenous -> both number and string 
var hetero;
(function (hetero) {
    hetero["name"] = "ajay";
    hetero[hetero["id"] = 37] = "id";
    hetero["mailid"] = "ajaysundar@ak.com";
})(hetero || (hetero = {}));
console.log(hetero.mailid);
