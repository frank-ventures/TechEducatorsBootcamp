console.log("Hello to the whole world");

const buttonOne = document.getElementById("first-button");
const bodySelect = document.querySelector("body");
const firstSection = document.getElementById("first-section");
const headerOneSelect = document.querySelector("h1");
const paragraphSelect = document.querySelector("p");

console.log(buttonOne.textContent);

// test code
// button.addEventListener("click", function (event) {
//   console.log(event);
// });

// simply changing document style
buttonOne.addEventListener("mouseover", function () {
  document.body.style.backgroundColor = "magenta";
});

buttonOne.addEventListener("mouseleave", function () {
  document.body.style.backgroundColor = "white";
});

// click twice to generate two new buttons
// verbose code - looking forward to making these tider loops instead
const lightModeButton = document.createElement("button");
const darkModeButton = document.createElement("button");
const newP = document.createElement("p");

let buttonCount = 0;

buttonOne.addEventListener("click", function () {
  buttonCount += 1;
  headerOneSelect.style.color = "black";
  console.log(buttonCount);

  if (buttonCount === 2) {
    firstSection.appendChild(newP);
    //
    newP.textContent = "Here they are!";
    firstSection.appendChild(lightModeButton);
    lightModeButton.textContent = "Light Mode";
    firstSection.appendChild(darkModeButton);
    darkModeButton.textContent = "Dark Mode";
  }
});

lightModeButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "grey";
  headerOneSelect.style.color = "black";
  paragraphSelect.style.color = "black";
});
darkModeButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "black";
  headerOneSelect.style.color = "white";
  paragraphSelect.style.color = "white";
});

// trying to make a toggle button
const toggleButton = document.getElementById("toggle-button");
let toggleCount = 1;

toggleButton.addEventListener("click", function () {
  if (toggleCount === 0) {
    toggleCount += 1;
    document.body.style.backgroundColor = "white";
    headerOneSelect.style.color = "black";
    paragraphSelect.style.color = "darkred";
  } else if (toggleCount === 1) {
    toggleCount -= 1;
    document.body.style.backgroundColor = "black";
    headerOneSelect.style.color = "orange";
    paragraphSelect.style.color = "yellow";
  }
});
