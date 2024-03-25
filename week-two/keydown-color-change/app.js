// Getting the container for the headers, then, all of the <p> elemts
const headers = document.getElementById("terrible");
const paraGraph = document.getElementsByTagName("p");

// This add a 'keydown' EventListener to our whole document

document.addEventListener("keydown", function (event) {
  // Generate a random color
  // This will help: https://stackoverflow.com/questions/1484506/random-color-generator/37281143
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  var randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  var randomColor3 = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Change the background color of the body and headers
  document.body.style.backgroundColor = randomColor;
  headers.style.color = randomColor2;
  // terrible.style.color = randomColor2;

  for (let index = 0; index < paraGraph.length; index++) {
    paraGraph[index].style.color = randomColor2;
    paraGraph[index].style.textShadow = `2px 2px 1px ${randomColor3}`;
    console.log(document.body.style.backgroundColor);
    console.log(paraGraph[index].style.textShadow);
    console.log(paraGraph[index].style.color);
  }
});
