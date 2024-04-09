const userForm = document.getElementById("userInfoForm");

async function handleUserForm(event) {
  event.preventDefault();

  const formData = new FormData(userForm);

  const username = formData.get("username");
  const message = formData.get("message");

  console.log(username, message);
  console.log(JSON.stringify({ username: username, message: message }));

  // Assigns the response of the fetch query to a variable called response
  const response = await fetch("http://localhost:8080", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, message: message }),
  });
  // turns the response into a JSON object (?)
  // basically it's now an array
  dataJson = await response.json();
  // we can see the array on the client side.
  console.log(dataJson);
}

userForm.addEventListener("submit", handleUserForm);
