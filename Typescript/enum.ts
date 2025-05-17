//numeric enum

enum teststatus{
    pass, //0
    fail = 5, //1
    absent, //2
    timeout = -1, // can accept negative value also
    status
}

console.log(teststatus.absent)

//string enum 
enum browsername{
    browser1='Chrome',
    browser2='Edge',
    browser3='Webkit',
    browser4='Firefox'
}

console.log(browsername.browser2)

//hetergenous -> both number and string 
enum hetero{
    name='ajay',
    id=37,
    mailid='ajaysundar@ak.com',

} 

console.log(hetero.mailid)