console.log("test");

const myName = "TelephoneFace";

function sayHello() {
  console.log("Hello " + myName); // "Hello TelephoneFace"
}

sayHello(); // "Hello TelephoneFace"
console.log(myName); // "TelephoneFace"

function sayHelloAgain() {
  const myName = "NotTelephoneFace";
  console.log("Hello " + myName);
}

sayHelloAgain(); // "Hello NotTelephoneFace"

// Really good point: Variables that are only scoped within a function can be forgotten, saving memory. If we only used global variables, we could never clear anything up behind us.
