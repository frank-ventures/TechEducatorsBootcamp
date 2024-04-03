console.log("I'm debugging");

function counter() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
    debugger;
  }
}

counter();
