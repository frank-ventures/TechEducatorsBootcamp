/// some variables from the page
const blueCounter = document.getElementById("blue");
const orangeCounter = document.getElementById("orange");
const form = document.querySelector("form");

const blueBtn = document.getElementById("blueBtn");
const orangeBtn = document.getElementById("orangeBtn");
const resetBothBtn = document.getElementById("resetBoth");

// a local counters object
let counters = {
  blue: 0,
  orange: 0,
};

// increasing the blue and orange counter
function increaseBlueCount() {
  counters.blue++;
  blueCounter.textContent = counters.blue;

  const stringifiedCounters = JSON.stringify(counters);
  localStorage.setItem("counters", stringifiedCounters);
}
function increaseOrangeCount() {
  counters.orange++;
  orangeCounter.textContent = counters.orange;

  const stringifiedCounters = JSON.stringify(counters);
  localStorage.setItem("counters", stringifiedCounters);
}
// resetting the counters
function resetBothCount() {
  counters = {
    blue: 0,
    orange: 0,
  };
  blueCounter.textContent = counters.blue;
  orangeCounter.textContent = counters.orange;

  const stringifiedCounters = JSON.stringify(counters);
  localStorage.setItem("counters", stringifiedCounters);
}
// loading locally stored page values, if they exist
function load() {
  const countString = localStorage.getItem("counters");
  counters = JSON.parse(countString);

  blueCounter.textContent = counters.blue;
  orangeCounter.textContent = counters.orange;
}

if (localStorage.getItem("counters")) {
  load();
}
//listening for user input
blueBtn.addEventListener("click", increaseBlueCount);
orangeBtn.addEventListener("click", increaseOrangeCount);
resetBothBtn.addEventListener("click", resetBothCount);

// background colour code! Workshop tasks, number two --
function savePreferences(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const colour = formData.get("uColour");

  const preferences = {
    colour,
  };

  localStorage.setItem("preferences", JSON.stringify(preferences));
}
form.addEventListener("submit", savePreferences);
form.addEventListener("submit", loadPreferences);

const preferences = JSON.parse(localStorage.getItem("preferences"));
// this code populates the input box on page load if a preference exists
if (preferences) {
  const input = document.querySelector("input");
  input.value = preferences.colour;
}

function loadPreferences() {
  // first load them from the user
  const preferences = JSON.parse(localStorage.getItem("preferences"));

  //if 'preferences' exists in users local storage'
  if (preferences) {
    const input = document.querySelector("input");
    input.value = preferences.colour || "#000000";

    const body = document.querySelector("body");
    body.style.backgroundColor = preferences.colour || "#000000";
  }
}
loadPreferences();

// Function to handle changes in local storage
function handleLocalStorageChange(event) {
  if (event.key === "favouriteColour") {
    // Do something when the specific local storage key changes
    const newValue = event.newValue;
    console.log(`Local storage favouriteColour changed to: ${newValue}`);
  }
}

// Add an event listener to listen for changes in local storage
window.addEventListener("storage", handleLocalStorageChange);
