const userForm = document.getElementById("userForm");
const formElement = document.querySelector("form");
const guestbook = document.getElementById("guestbook");

async function loadComments() {
  const response = await fetch("http://localhost:3000/messages", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  dataJson = await response.json();
  guestbook.innerHTML = "";
  dataJson.forEach((element) => {
    console.log(element);
    const newP = document.createElement("p");
    newP.textContent = `Username: ${element.username} - Message Number:${element.id} Message: ${element.text}`;
    guestbook.appendChild(newP);
  });
}

async function handleSubmitForm(event) {
  event.preventDefault();
  // Gets the form data and the elements of the form
  const formData = new FormData(userForm);
  const message = formData.get("message");
  const username = formData.get("username");
  // Interacts with the API; sends the username and message to the server
  const response = await fetch("http://localhost:3000/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, message }),
  });

  dataJson = await response.json();
  // Writes the servers response to the web page
  guestbook.innerHTML = "";
  dataJson.forEach((element) => {
    console.log(element);
    const newP = document.createElement("p");
    newP.textContent = `Username: ${element.username} - Message Number:${element.id} Message: ${element.text}`;
    guestbook.appendChild(newP);
  });
}

userForm.addEventListener("submit", handleSubmitForm);
loadComments();
