// ⛳️ Use the Fetch API to make a request to the JSON Placeholder API and log the response to the console.
const api1 = document.getElementById("api1");
const api2 = document.getElementById("api2");
const githubProjects = document.getElementById("githubProjects");
const form = document.getElementById("form");

async function getThingFromFarAway() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log("HTTP Response:", response);
  console.log(response.status);
  api1.textContent = `Status response: ${response.status}`;
  const json = await response.json();
  console.log("JSON Data:", json);
  // data wrangling
  const wrangledTitle = json.title;
  api2.textContent = `JSON Title:  ${wrangledTitle}`;
}
getThingFromFarAway();

// You can also do it without async/await, by using the .then() method on the object returned by fetch.
// This is a special type of object called a "promise", and it's how async/await works under the hood.
// We'll use async/await in most cases, but it's useful to recognise what this is if you see it.

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(function (response) {
//     console.log("HTTP Response:", response);
//     return response.json();
//   })
//   .then(function (json) {
//     console.log("JSON Data:", json);
//   });

// GitHub fetching

async function getStuffFromGitHub(url) {
  const response = await fetch(url);
  //   console.log(response);
  const json = await response.json();
  //   console.log(json);
  return json;
}
getStuffFromGitHub();

function createNewP(thisText) {
  const newP = document.createElement("p");
  newP.textContent = thisText;
  githubProjects.appendChild(newP);
}

async function showThingsOnPage(url) {
  request = await getStuffFromGitHub(url);
  console.log("this is", request);
  createNewP(`Project name is: ${request.name}`);
  createNewP(`Project owner is: ${request.owner.login}`);
  createNewP(`Size of project is: ${request.size}`);
  createNewP(`Amount of stargazers is: ${request.stargazers_count}`);
  createNewP(`Found at: ${request.html_url}`);
  createNewP("-----");
  //   projectName.textContent = `Project name is: ${request.name}`;
  //   projectOwner.textContent = `Project owner is: ${request.owner.login}`;
  //   projectSize.textContent = `Size of project is: ${request.size}`;
  //   projectStargazers.textContent = `Amount of stargazers is: ${request.stargazers_count}`;
}
// showThingsOnPage(
//   "https://api.github.com/repos/frank-ventures/TechEd-WeekTwo-Project"
// );

// showThingsOnPage("https://api.github.com/repos/kubernetes/kubernetes");
// showThingsOnPage("https://api.github.com/repos/facebook/react");

function log(event) {
  event.preventDefault();
  const data = new FormData(form);
  const userURL = Object.fromEntries(data);

  console.log(userURL);
  showThingsOnPage(userURL.url);
}

form.addEventListener("submit", log);
