// test complete
// console.log("Hi mate");

//doing the demo buttons from memory
// two variables linked to the HTML buttons ID
const simpleBtn = document.getElementById("simpleBtn");
const bgBtn = document.getElementById("bgBtn");
// simple console log
simpleBtn.addEventListener("click", () => {
  console.log("I am a simple thing");
});
// seperate function to change the background
function changeBackground() {
  document.body.style.backgroundColor = "magenta";
}
// attaching function to the button
bgBtn.addEventListener("click", changeBackground);

// Workshop

// Some copied code from the workshop page.
// First function, when called, prints two things to the console.
// When called below, an anonymous function is passed in.
function myAwesomeFunction(onCompleteCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
  onCompleteCallback();
}
// What this does is pass an anonymous function in which prints a new line to the console, which then gets run on line 27
myAwesomeFunction(function () {
  console.log("notifyUser function was called!");
});
// This can also be defined as the shorthand arrow function seen here
myAwesomeFunction(() => {
  console.log("notifyUser function was called!");
});

function myOtherAwesomeFunction(onSuccessCallback, onFailureCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
  // randomly choose if success is true or false
  const success = Math.random() > 0.5;
  if (success) {
    onSuccessCallback({
      message: "This is the message of success",
    });
  } else {
    onFailureCallback();
  }
}

// This next bit, calling the function, reads like this: myOtherAwesomeFunction(parameter one, parameter two)

// However, the parameters being passed are functions: myOtherAwesomeFunction(function () {console.log("Hi friend");}, function () {console.log("Bye friend");});

// Putting that all together below, they're passed as arrow functions.
myOtherAwesomeFunction(
  (data) => {
    console.log("It was successful: ", data.message);
  },
  () => {
    console.log("It failed :(");
  }
);

// To prevent messiness, instead of anonymously being defined, they can be seperately defined:
function onAwesomeSuccess(data) {
  console.log("It was successful: ", data.message);
}

function onAwesomeFailure() {
  console.log("It failed :(");
}

myOtherAwesomeFunction(onAwesomeSuccess, onAwesomeFailure);

// Here's the calculator from the Workshop

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function myCalculatorFunction(a, b, operationCallback) {
  console.log("Doing a calculation using the numbers: ", a, b);
  console.log(
    "We might have code that saves the result to a log or a database"
  );

  return operationCallback(a, b);
}

const result = myCalculatorFunction(1, 2, add);
console.log(result); // Output: 3

const result2 = myCalculatorFunction(2, 3, multiply);
console.log(result2); // Output: 6

// add the two results together
const finalResult = myCalculatorFunction(result, result2, add);
console.log(finalResult); // Output: 9

const result3 = myCalculatorFunction(10, 2, subtract);
console.log(result3); // Output: 8

const result4 = myCalculatorFunction(50, 5, divide);
console.log(result4); // Output: 10

const secondResult = myCalculatorFunction(result3, result4, multiply);
console.log(secondResult); // Output: 80
