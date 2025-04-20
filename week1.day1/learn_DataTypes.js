var comName = 'TestLeaf';
console.log(comName); // TestLeaf
console.log(typeof comName); // string

var age = "37";
//String value convert into number -> +
console.log("The string value " + age + ", "+typeof(+age) + " is converted into number"); // 37

var a = 70;
//Number value convert into string -> String()
console.log("The number value " + a + ", "+typeof(a+" ") + " is converted into string"); // 70

var numberbig = 9675123012851255211n;
console.log(numberbig); // 9675123012851255211n
console.log(typeof(numberbig)); // bigint