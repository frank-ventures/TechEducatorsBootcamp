// Test
console.log("Hello World");

// First variable
let myName = "Frank";
console.log(myName); // Output = "Frank"
let myAge = 31;
console.log(myAge); // Output = "31"

// Some other variables
let currentTask = "Get good at Development";
console.log(currentTask); //Output = "Get good at Development"

// Numbers

let smallNum = 9;
let largeNum = 74;
let hugeNum = 974;

console.log(smallNum); // Output = "9"
console.log(largeNum); // Output = "74"
console.log(hugeNum); // Output = "974"

// Math

let addition = smallNum + hugeNum;
let subtraction = hugeNum - largeNum;
let multiPly = smallNum * smallNum;

console.log(addition); // Output = "983"
console.log(subtraction); // Output = "900"
console.log(multiPly); // Output = "81"

// Multiple string concatenation

let str1 = "Hi, my name is";
let str2 = "What, my name is";
let str3 = "Who, my name is";
let str4 = "Shikka chikky,";

console.log(`${str1} ${str2} ${str3} ${str4} ${myName}`); // Output = "Hi, my name is What, my name is Who, my name is Shikka chikky, Frank"

let tempNum;

tempNum = largeNum; // 74
largeNum = smallNum; // now becomes 9
smallNum = tempNum; // now becomes temp value which is 74
console.log(largeNum); // 9
console.log(smallNum); // 74
