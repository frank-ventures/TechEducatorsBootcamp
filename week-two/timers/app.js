// TASK ONE
//As a user, when I click a button, a message should display for 5 seconds to confirm the action occurred, before disappearing again.

//Create an event handler that makes visible a message that is hidden by default

//Use setTimeout to hide the message after 5 seconds
const displayButton = document.getElementById("displayMessage");
const hiddenParagraph = document.getElementById("messageToDisplay");

function timer() {
  hiddenParagraph.textContent =
    "Click confirmed! This message self-destructs after 5 seconds.";
  hiddenParagraph.style.visibility = "visible";
  setTimeout(hideMessage, 5000);
}

function hideMessage() {
  hiddenParagraph.style.visibility = "hidden";
}

displayButton.addEventListener("click", timer);

// TASK TWO

// As a user, I want to click a button to start a timer, like a stopwatch. Pressing the button again to stop the timer.

// Create an event handler that starts a timer when a button is clicked

// Use setInterval to update the timer every second

// To stop the interval, you need a reference to the interval. Does the interval function have a return value we can use in combination with the clearInterval function.

// Use clearInterval to stop the timer when the button is clicked again

// click button to start, click same button to stop, setInterval to update timer every sceond,

const stopwatchButton = document.getElementById("startTimer");
const stopwatchDisplay = document.getElementById("stopwatchDisplay");

/// First iteration where everything is contained within one function;

// let stopwatchTime = 0;
// let currentClick = 1;
// let stopwatchInterval;

// function stopwatch() {
//   if (currentClick === 1) {
//     currentClick -= 1;
//     stopwatchInterval = setInterval(() => {
//       stopwatchTime += 1;
//       console.log(stopwatchTime);
//       stopwatchDisplay.textContent = `Current timer: ${stopwatchTime}`;
//     }, 1000);
//   } else if (currentClick === 0) {
//     currentClick += 1;
//     clearInterval(stopwatchInterval);
//   }
// }

// Second iteration (with help from GPT displaying where I could split out my code to be modular). I had to re-add the currentClick variable so it functioned like a toggle.

let stopwatchTime = 0;
let currentClick = 1;
let stopwatchInterval;

function startStopwatch() {
  currentClick -= 1;
  stopwatchInterval = setInterval(updateStopwatch, 1000);
  stopwatchButton.textContent = "Stop";
}

function stopStopwatch() {
  currentClick += 1;
  clearInterval(stopwatchInterval);
  stopwatchButton.textContent = "Start";
}

function updateStopwatch() {
  stopwatchTime++;
  stopwatchDisplay.textContent = `Current timer: ${stopwatchTime}`;
}

function toggleStopwatch() {
  if (currentClick === 1) {
    startStopwatch();
  } else {
    stopStopwatch();
  }
}

stopwatchButton.addEventListener("click", toggleStopwatch);

// stopwatchButton.addEventListener("click", stopwatch);
