// decalring some variables
// first, the buttons
const introBtnOne = document.getElementById("introBtnOne");
const introBtnTwo = document.getElementById("introBtnTwo");
const storyBtnOne = document.getElementById("storyBtnOne");
const storyBtnTwo = document.getElementById("storyBtnTwo");
const contactBtnOne = document.getElementById("contactBtnOne");
const contactBtnTwo = document.getElementById("contactBtnTwo");
// next the page sections
const introSection = document.getElementById("introSection");
const storySection = document.getElementById("storySection");
const contactSection = document.getElementById("contactSection");
// now the audio
const audio = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
// it's a loud track so this sets the volume lower on page load
audio.volume = 0.2;

playBtn.addEventListener("click", function () {
  audio.play();
});
pauseBtn.addEventListener("click", function () {
  audio.pause();
});

// these next lines set the initial button colour to show which image the user is currently on.
introBtnOne.style.backgroundColor = "darkolivegreen";
storyBtnOne.style.backgroundColor = "darkolivegreen";
contactBtnOne.style.backgroundColor = "darkolivegreen";

// these variables
let introImg = 0;
let storyImg = 0;
let contactImg = 0;

// this statements handle the change of image when the buttons are clicked
// about section
introBtnOne.addEventListener("click", function () {
  introSection.style.backgroundImage = "url(./assets/campsite1.jpg)";
  introBtnOne.style.backgroundColor = "darkolivegreen";
  introBtnTwo.style.backgroundColor = "rgba(255, 255, 255, 0.75)";
  introImg = 0;
});
introBtnTwo.addEventListener("click", function () {
  introSection.style.backgroundImage = "url(./assets/campsite4.jpg)";
  introBtnOne.style.backgroundColor = "rgba(255, 255, 255, 0.75)";
  introBtnTwo.style.backgroundColor = "darkolivegreen";
  introImg = 1;
});
// story section
storyBtnOne.addEventListener("click", function () {
  storySection.style.backgroundImage = "url(./assets/campsite2.jpg)";
  storyBtnOne.style.backgroundColor = "darkolivegreen";
  storyBtnTwo.style.backgroundColor = "rgba(255, 255, 255, 0.75)";
  storyImg = 0;
});
storyBtnTwo.addEventListener("click", function () {
  storySection.style.backgroundImage = "url(./assets/campsite5.jpg)";
  storyBtnOne.style.backgroundColor = "rgba(255, 255, 255, 0.75)";
  storyBtnTwo.style.backgroundColor = "darkolivegreen";
  stroyImg = 1;
});
// contact section
contactBtnOne.addEventListener("click", function () {
  contactSection.style.backgroundImage = "url(./assets/campsite3.jpg)";
  contactBtnOne.style.backgroundColor = "darkolivegreen";
  contactBtnTwo.style.backgroundColor = "rgba(255, 255, 255, 0.75)";
  contactImg = 0;
});
contactBtnTwo.addEventListener("click", function () {
  contactSection.style.backgroundImage = "url(./assets/campsite6.jpg)";
  contactBtnOne.style.backgroundColor = "rgba(255, 255, 255, 0.75)";
  contactBtnTwo.style.backgroundColor = "darkolivegreen";
  contactImg = 1;
});

// this very long if-statement (which hurts my eyes) was my attempt to ensure that the colour of the buttons remains as intended, to indicate to the user which image they're on.
// it didn't work fully as intended, so I used ChatGPT to review my code and point out where I could make improvements. That revision is the working code underneath.
// if (introImg === 0) {
//   introBtnOne.addEventListener("mouseover", function () {
//     introBtnOne.style.backgroundColor = "grey";
//   });
//   introBtnOne.addEventListener("mouseout", function () {
//     introBtnOne.style.backgroundColor = "darkolivegreen";
//   });
//   introBtnTwo.addEventListener("mouseover", function () {
//     introBtnTwo.style.backgroundColor = "grey";
//   });
//   introBtnTwo.addEventListener("mouseout", function () {
//     introBtnTwo.style.backgroundColor = "rgba(255, 255, 255, 0.75)";
//   });
// } else if (introImg === 1) {
//   introBtnOne.addEventListener("mouseover", function () {
//     introBtnOne.style.backgroundColor = "grey";
//   });
//   introBtnOne.addEventListener("mouseout", function () {
//     introBtnOne.style.backgroundColor = "(255, 255, 255, 0.75)";
//   });
//   introBtnTwo.addEventListener("mouseover", function () {
//     introBtnTwo.style.backgroundColor = "grey";
//   });
//   introBtnTwo.addEventListener("mouseout", function () {
//     introBtnTwo.style.backgroundColor = "red";
//   });
// }

introBtnOne.addEventListener("mouseover", function () {
  if (introImg === 0) {
    introBtnOne.style.backgroundColor = "grey";
    // here is the extra else-if I wrote in to ensure all colour states.
  } else if (introImg === 1) {
    introBtnOne.style.backgroundColor = "grey";
  } else {
    introBtnOne.style.backgroundColor = "rgba(255, 255, 255, 0.75)";
  }
});

introBtnOne.addEventListener("mouseout", function () {
  if (introImg === 0) {
    introBtnOne.style.backgroundColor = "darkolivegreen";
  } else {
    introBtnOne.style.backgroundColor = "rgba(255, 255, 255, 0.75)";
  }
});

introBtnTwo.addEventListener("mouseover", function () {
  if (introImg === 1) {
    introBtnTwo.style.backgroundColor = "grey";
    // here is the extra else-if I wrote in to ensure all colour states.
  } else if (introImg === 0) {
    introBtnTwo.style.backgroundColor = "grey";
  } else {
    introBtnTwo.style.backgroundColor = "rgba(255, 255, 255, 0.75)";
  }
});

introBtnTwo.addEventListener("mouseout", function () {
  if (introImg === 1) {
    introBtnTwo.style.backgroundColor = "darkolivegreen";
  } else {
    introBtnTwo.style.backgroundColor = "rgba(255, 255, 255, 0.75)";
  }
});
