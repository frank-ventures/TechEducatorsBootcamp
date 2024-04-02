const form = document.getElementById("myForm");

form.addEventListener("submit", (theEvent) => {
  theEvent.preventDefault();

  const formData = new FormData(theEvent.target);
  console.log(formData);

  const myObj = Object.fromEntries(formData);
  console.log(myObj);

  // this means we can play with the data within the object
  console.log(myObj.username);
  console.log(myObj.password);
  console.log(myObj.email);
});
