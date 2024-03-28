const pageCounter = document.getElementById("pageCounter");
const btn = document.getElementById("btn");
const reset = document.getElementById("reset");

let count = 0;

function increaseCount() {
  count++;
  pageCounter.textContent = count;
  console.log(count);
  localStorage.setItem("count", count);
}

function resetCount() {
  count = 0;
  pageCounter.textContent = count;
  localStorage.setItem("count", count);
}

function load() {
  if (localStorage.getItem("count")) {
    count = localStorage.getItem("count");
    pageCounter.textContent = count;
  }
}

load();
btn.addEventListener("click", increaseCount);
reset.addEventListener("click", resetCount);

// background colour code! Workshop tasks --
// this listens to the form being submitted

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const formData = new FormData(form);
//   const colour = formData.get("uColour");
//   console.log(colour);
//   localStorage.setItem("userColour", colour);
// });

//
// let colour = localStorage.getItem("userColour");
// // on page load, if there is a locally stored key called 'userColour' then we'll add that string to the input box.
// if (colour) {
//   const input = document.getElementById("userColour");
//   input.value = colour;
// }
