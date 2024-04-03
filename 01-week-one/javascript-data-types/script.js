console.log("Hello World again!");

// Numbers
let myNumber = 1;
console.log(myNumber);

let mints = 5;
let chocolates = 10;
let sweets = mints + chocolates;
console.log(sweets);

// Strings
let firstName = "Franko";
let lastName = "Del Boyo";
let fullName = `${firstName} ${lastName}`;
console.log(fullName); // Output - Franko Del Boyo

console.log(`${firstName} is ${firstName.length} characters long`); // Output - Franko is 6 characters long
// This accessed a built-in JS function called length

// typeof Operator
// Checks what data type we have

console.log(typeof firstName); // Output - string
console.log(typeof chocolates); // Output - number

let isTrue = true;
console.log(`The type of the isTrue variable is ${typeof isTrue}`); // Output - The type of the isTrue variable is boolean

// undefined and null
// The absence of a value

let aNewName;
console.log(aNewName); // Output - undefined

let aNewAge = null;
console.log(aNewAge); // Output - null

// Comparisons
// Comparing numbers gives boolean outputs.

let a = 1;
let b = 2;
let isAGreaterThanB = a > b;
let isALessThanB = a < b;
let isAEqualToB = a === b;

console.log(isAGreaterThanB); // Output: false
console.log(isALessThanB); // Output: true
console.log(isAEqualToB); // Output: false
//Yay!

console.log(`Is ${a} greater than ${b}?`, isAGreaterThanB);
// Output - Is 1 greater than 2? false
console.log(`Is ${a} less than ${b}?`, isALessThanB);
// Output - Is 1 less than 2? true
console.log(`Is ${a} equal to ${b}?`, isAEqualToB);
// Output - Is 1 equal to 2? false

// Extra credit!
// Here we are creating a sentence where we can change the variables, altering the sentence output.

let faveProgramLanguage = "JavaScript!";
let currentCourseDay = 3;
console.log(
  `My favourite programming language is ${faveProgramLanguage}. We are on day ${currentCourseDay}`
);

// First Output - My favourite programming language is Python. We are on day 3
//Second Output - My favourite programming language is JavaScript!. We are on day 3

// Cool!!!
