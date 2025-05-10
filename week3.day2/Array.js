let browserName = ['Chrome', 'Firefox', 'Safari', 'Edge', 'Opera'];

//find the length of the array

browserName.length; // 5
console.log(browserName.length); // 5   

//There is no out of bound error in JS, if we try to access an index that is not present in the array, it will return undefined.

console.log(browserName[5]); // undefined

browserName[5] = 'Brave'; // Adding a new element to the array at index 5
console.log(browserName); // [ 'Chrome', 'Firefox', 'Safari', 'Edge', 'Opera', 'Brave' ]

browserName[7] = 'Webkit'; // Adding a new element to the array at index 7
console.log(browserName); // [ 'Chrome', 'Firefox', 'Safari', 'Edge', 'Opera', 'Brave', <1 empty item>, 'Webkit' ]

console.log(browserName.length); // 8

//methods of array in TS

browserName.unshift("Ajay"); // add an element to the beginning of the array
console.log(browserName)

//add last value to the array
browserName.push("Kavya"); // add an element to the end of the array
console.log(browserName)

//remove first value from the array
browserName.shift(); // remove the first element of the array
console.log(browserName) // [ 'Firefox', 'Safari', 'Edge', 'Opera', 'Brave', <1 empty item>, 'Webkit', 'Kavya' ]

//remove the last value from the array
browserName.pop(); // remove the last element of the array
console.log(browserName) // [ 'Firefox', 'Safari', 'Edge', 'Opera', 'Brave', <1 empty item>, 'Webkit' ]

let v=browserName.slice(1, 3); // slice the array from index 1 to index 3 (not included)
console.log(v) // [ 'Safari', 'Edge' ]

//Mixed Array
let a1 = [1,true,'playwright','js',8]; // mixed array
let a2 = ['Chrome','msedge',...a1]; // number array

//spread syntax -> ...a2

console.log(a2) // [ 'Chrome', 'msedge', 1, true, 'playwright', 'js', 8 ]
console.log(a2.length) // 7

//nested array or multiple array
let data=['ab',false,170,['ajay','Kavya',true]]
console.log(data[3]) // [ 'ajay', 'Kavya', true ]
