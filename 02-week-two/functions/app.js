// test
console.log("Hello Worldsters");

function sayHello() {
  console.log("Hello superfans");
}

sayHello();
sayHello();
sayHello();
// passing arguments

function sayHelloTo(name) {
  console.log("Hello " + name + "!");
}
sayHelloTo("Frank");
sayHelloTo("Jimmy");
sayHelloTo("your mother for me");
// that's a mafia-style reference

// returning values
function add(a, b) {
  return a + b;
}
// checking the function works
console.log(add(1, 5));
// defining some more functions
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function subtract(a, b) {
  return a - b;
}

// putting it all together in a calculator function
function calculate(a, b, operator) {
  let result;
  if (operator == "+") {
    result = add(a, b);
  } else if (operator == "-") {
    result = subtract(a, b);
  } else if (operator == "*") {
    result = multiply(a, b);
  } else if (operator == "/") {
    result = divide(a, b);
  }
  return result;
}

// making it with a switch statement instead
function swCalculate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "That's not an operator";
  }
}

console.log(swCalculate(9, 5, "*"));
